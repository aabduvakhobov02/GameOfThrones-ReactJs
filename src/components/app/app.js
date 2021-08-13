import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../error";
import CharacterPage from "../Pages/characterPage";
import BookPage from "../Pages/bookPage/bookPage";
import HousePage from "../Pages/housePage/housePage";
import gotService from "../../services/gotService";
import "./app.css";

export default class App extends Component {
  gotService = new gotService();
  state = {
    showRandomChar: true,
    error: false,
  };
  componentDidCatch() {
    this.setState({ error: true });
  }
  onToggleRandomChar = () => {
    const show = this.state.showRandomChar;
    this.setState({ showRandomChar: !show });
  };
  render() {
    const { showRandomChar, error } = this.state;

    const char = showRandomChar ? <RandomChar /> : null;

    if (error) {
      return <ErrorMessage />;
    }
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {char}
              <button
                className="random-block btn btn-secondary"
                onClick={this.onToggleRandomChar}
              >
                Toggle Random Character
              </button>
            </Col>
          </Row>
          <CharacterPage />
          <BookPage />
          <HousePage />
        </Container>
      </>
    );
  }
}
