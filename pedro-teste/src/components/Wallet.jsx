import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import WalletForm from "./WalletForm";

class Wallet extends Component {
  render() {
    // essa prop email é a chave lá do mapStateToProps
    return (
      <div>
        <Header />
        <WalletForm />
      </div>
    );
  }
}

const mapStateToProps = (globalState) => ({
  // a chave email é a props que colocar lá em cima
  email: globalState.emailReducer.username.email,
})

export default connect(mapStateToProps)(Wallet);
