import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../error";
import "./app.css";
import CharacterPage from "../characterPage";

export default class App extends Component {
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
        </Container>
      </>
    );
  }
}
