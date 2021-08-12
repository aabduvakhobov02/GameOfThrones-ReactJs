import React, { Component } from "react";
import "./personDetails.css";
import gotService from "../../services/gotService";

export default class PersonDetails extends Component {
  gotService = new gotService();
  state = {
    char: null,
  };

  componentDidMount() {
    this.updateChar();
  }
  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }
  updateChar() {
    const { charId } = this.props;
    if (!charId) {
      return;
    }
    // this.foo.bar = 0;

    this.gotService
      .getCharacter(charId)
      .then((char) => this.setState({ char }));
  }

  render() {
    if (!this.state.char) {
      return (
        <span className="select-error text-light">
          Please select a character
        </span>
      );
    }

    const { name, gender, born, died, culture } = this.state.char;
    return (
      <div className="person-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born</span>
            <span>{born}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died</span>
            <span>{died}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Books</span>
            <span>{culture}</span>
          </li>
        </ul>
      </div>
    );
  }
}
