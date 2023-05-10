import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <form>
        <label>
            <input
              type="email"
              placeholder="Email"
              data-testid="email-input"
              name="email"
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Senha"
              data-testid="password-input"
              name="senha"
            />
          </label>
          <button
            type="button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Home;
