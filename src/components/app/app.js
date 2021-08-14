import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../error";
import CharacterPage from "../Pages/characterPage";
import BookPage from "../Pages/bookPage";
import HousePage from "../Pages/housePage";
import BooksItem from "../Pages/booksItem";
import gotService from "../../services/gotService";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
      <Router>
        <div className="app">
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
            <Route path="/" exact />
            <Route path="/characters" component={CharacterPage} />
            <Route path="/houses" component={HousePage} />
            <Route path="/books" exact component={BookPage} />
            <Route
              path="/books/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <BooksItem bookId={id} />;
              }}
            />
          </Container>
        </div>
      </Router>
    );
  }
}
