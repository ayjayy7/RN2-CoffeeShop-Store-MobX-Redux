import React, { Component } from "react";
import { View } from "react-native";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

//Redux
import * as actionCreators from "../../store/actions";
import { connect } from "react-redux";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";

class HomePage extends Component {
  async componentDidMount() {
    await this.props.fetchCoffeeShops();
  }
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <Header style={styles.transparent} />
        <CoffeeList />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCoffeeShops: () => dispatch(actionCreators.getCoffeeShops())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
