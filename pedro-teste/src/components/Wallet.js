import React, { Component } from "react";

class Wallet extends Component {
  render() {
    return (
      <div>
        <header>
          <p data-testid="email-field">Aqui será mostrado o email da pessoa</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

export default Wallet;
