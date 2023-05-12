import React, { Component } from 'react';
import { userEmailAction } from '../redux/actions';
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    email: '',
    senha: '',
    buttonClick: true,
  }

  validationInputs = () => {
    const { email, senha } = this.state;
    const valEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const valERegex = valEmail.test(email);
    const valSenha = senha.length >= 6;
    if(valERegex && valSenha){
      this.setState({
        buttonClick: false,
      }) 
    } else {
      this.setState({buttonClick: true});
    }
  }

  onInputChange = (event) => {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: value,
    }, this.validationInputs);
  };

  onClickButton = () => {
    // Tenho que colocar aqui o estado global
    const { history, dispatch } = this.props;
    const { email } = this.state
    dispatch(userEmailAction(email))
    history.push('/carteira');
  }

  render() {
    const { email, senha, buttonClick } = this.state;
    return (
      <div>
        <form>
        <label>
            <input
              type="email"
              placeholder="Email"
              data-testid="email-input"
              name="email"
              value={ email }
              onChange={ this.onInputChange }
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Senha"
              data-testid="password-input"
              name="senha"
              value={ senha }
              onChange={ this.onInputChange }
            />
          </label>
          <button
            type="button"
            disabled={ buttonClick }
            onClick={ this.onClickButton }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(Home);
