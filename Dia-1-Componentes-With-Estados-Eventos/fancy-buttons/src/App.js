import React, { Component } from 'react'
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.clique1 = this.clique1.bind(this)
    this.state = {
      numeroDeCliques: 0
    }

  }
  clique1() {
    console.log('as coisas irão acontecer após essa mensagem');
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
}

  render() {
    console.log(this)
    return (
      
        <button onClick={this.clique1}>Clique para aumentar a contagem de cliques: "{this.state.numeroDeCliques}"</button>
      
    )
  }
}

export default App;
