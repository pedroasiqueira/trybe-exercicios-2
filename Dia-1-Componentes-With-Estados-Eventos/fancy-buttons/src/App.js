import React, { Component } from 'react'
import './App.css';

const clique1 = () => console.log('Na página não acontece nada, só aqui 1')
const clique2 = () => console.log('Igual ao anterior, só muda o texto 2')
const clique3 = () => console.log('Mesma coisa 3')

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={clique1}>Clique para ver o que acontece</button>
        <button onClick={clique2}>Clique para ver</button>
        <button onClick={clique3}>Clica novamente papai</button>
      </div>
    )
  }
}

export default App;
