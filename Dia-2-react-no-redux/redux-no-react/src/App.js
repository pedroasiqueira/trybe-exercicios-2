import { connect } from 'react-redux';
import './App.css';
import React from 'react';
import { actionCreator } from './redux/actions';

class App extends React.Component {
  render() {
    // estou acessando essas props graças ao mapStateToProps e connect lá debaixo.
    // a chave 'countState' é a chave que eu dei o nome que eu quis dentro do mapStateToProps
    const { countState, dispatch } = this.props
    return (
      <div>
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button onClick={() => dispatch(actionCreator())}>Incrementa 1</button>
        <button onClick={() => dispatch(actionCreator(5))}>Incrementa 5</button>
      </div>
    );
  }
}

// Objetivo dessa função é criar propriedades que irão receber os valores que estão no ESTADO GLOBAL no momento
const mapStateToProps = (globalState) => ({
  countState: globalState.count
  // O globalState está sendo acessado apenas dessa forma porque não criei o rootReducer. Se eu tivesse criado, teria que por o globalState.NomeDoReducer.count
})

export default connect(mapStateToProps)(App);
