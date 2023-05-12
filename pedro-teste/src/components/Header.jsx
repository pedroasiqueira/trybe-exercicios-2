import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    const { email } = this.props;
    // essa prop email é a chave lá do mapStateToProps
    return (
      <div>
        <header>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (globalState) => ({
  // a chave email é a props que colocar lá em cima
  email: globalState.emailReducer.username.email,
})

export default connect(mapStateToProps)(Header)