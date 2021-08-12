import React, { Component } from "react";
import "./randomChar.css";
import gotService from "../../services/gotService";
import Spinner from "../spinner";
import ErrorMessage from "../error";

export default class RandomChar extends Component {
  gotService = new gotService();
  state = {
    char: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updateChar();
    this.timerId = setInterval(this.updateChar, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  onCharLoaded(char) {
    this.setState({ char, loading: false });
  }
  onError(error) {
    this.setState({ error: true, loading: false });
  }
  updateChar = () => {
    const id = Math.floor(Math.random() * 300 + 25);
    this.gotService
      .getCharacter(id)
      .then((char) => this.onCharLoaded(char))
      .catch((error) => this.onError(error));
  };

  render() {
    const { char, loading, error } = this.state;

    const content = error ? (
      <ErrorMessage />
    ) : loading ? (
      <Spinner />
    ) : (
      <View char={char} />
    );
    return <div className="random-block rounded">{content}</div>;
  }
}

const View = ({ char }) => {
  const { name, gender, born, died, culture } = char;
  return (
    <>
      <h4>Random Character: {name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender </span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture </span>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  );
};
