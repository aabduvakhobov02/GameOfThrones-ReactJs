import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import ItemList from "../itemList";
import PersonDetails from "../personDetails";
import ErrorMessage from "../error";

export default class CharacterPage extends Component {
  state = {
    selectedChar: 130,
    error: false,
  };
  componentDidCatch() {
    this.setState({ error: true });
  }
  onCharSelected = (id) => {
    this.setState({
      selectedChar: id,
    });
  };

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return (
      <Row>
        <Col md="6">
          <ItemList onCharSelected={this.onCharSelected} />
        </Col>
        <Col md="6">
          <PersonDetails charId={this.state.selectedChar} />
        </Col>
      </Row>
    );
  }
}
