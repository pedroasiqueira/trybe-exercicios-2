import React, { Component } from 'react'


class App extends Component {
  constructor() {
    super()
    this.clique1 = this.clique1.bind(this)
    this.clique5 = this.clique5.bind(this)
    this.clique10 = this.clique10.bind(this)
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques5: 0,
      numeroDeCliques10: 0,
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
      numeroDeCliques5: estadoAnterior.numeroDeCliques5 + 5
    }))
  }

  clique10() {
    console.log('as coisas irão acontecer após essa mensagem');
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques10: estadoAnterior.numeroDeCliques10 + 10
    }))
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    // console.log(this)
    const { numeroDeCliques, numeroDeCliques5, numeroDeCliques10 } = this.state
    const { getButtonColor } = this
    const numCliq1 = getButtonColor(numeroDeCliques);
    const numCliq5 = getButtonColor(numeroDeCliques5);
    const numCliq10 = getButtonColor(numeroDeCliques10);
    return (
      <div>
        <button onClick={this.clique1}>Clique para aumentar de 1 em 1</button>
        <p style={ {backgroundColor: numCliq1} }>{numeroDeCliques}</p>

        <button onClick={this.clique5}>Clique para aumentar de 5 em 5</button>
        <p style={ {backgroundColor: numCliq5} }>{numeroDeCliques5}</p>

        <button onClick={this.clique10}>Clique para aumentar de 10 e 10</button>
        <p style={ { backgroundColor: numCliq10 } }>{numeroDeCliques10}</p>
      </div>
    )
  }
}

export default App;
