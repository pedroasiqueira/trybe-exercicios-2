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

clique5() {
  console.log('as coisas irão acontecer após essa mensagem');
  this.setState((estadoAnterior, _props) => ({
    numeroDeCliques: estadoAnterior.numeroDeCliques + 5
  }))
}

  render() {
    // console.log(this)
    const { numeroDeCliques } = this.state
    return (
      <div>
        <button onClick={this.clique1}>Clique para aumentar a contagem de cliques</button>
        <p>{numeroDeCliques}</p>
      </div>
    )
  }
}

export default App;
