import React, { Component } from "react";
import ItemList from "../itemList";
import ErrorMessage from "../error";
import gotService from "../../services/gotService";
import { withRouter } from "react-router";

class BookPage extends Component {
  gotService = new gotService();
  state = {
    error: false,
  };
  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return (
      <ItemList
        onItemSelected={(itemId) => {
          this.props.history.push(itemId);
        }}
        getData={this.gotService.getAllBooks}
        renderItem={(item) => item.name}
      />
    );
  }
}

export default withRouter(BookPage);
