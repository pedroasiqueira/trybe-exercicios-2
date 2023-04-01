import React, { Component } from 'react'
import './App.css';

// const clique1 = () => console.log('Na página não acontece nada, só aqui 1')
// const clique2 = () => console.log('Igual ao anterior, só muda o texto 2')
// const clique3 = () => console.log('Mesma coisa 3')

class App extends Component {
  constructor() {
    super()

    // this.clique2 = this.clique2.bind(this)
    this.numeroCliques = this.numeroCliques.bind(this)
    this.state = {
      numeroDeCliques: 0
    }

    
  }
  clique1() {
    //O this não vai aparecer no navegador porque eu não coloquei essa função dentro do constructor e abaixo do super.
    console.log(this)
    console.log('Na página não acontece nada, só aqui 1')
}
  clique2() {
    // O this aparece no navegador porque eu coloquei essa função dentro do constructor e abaixo do super.
    console.log(this)
    console.log('Igual ao anterior, só muda o texto 2')
  }
  clique3 = () => {
    // O this vai aparecer porque essa é uma arrow function. E não precisa colocar dentro do constructor.
    console.log(this)
    console.log('Mesma coisa 3')
}
  numeroCliques() {

  }

  render() {
    // console.log(this)
    return (
      <div>
        <button onClick={this.clique1}>Clique para ver o que acontece</button>
        <button onClick={this.clique2}>Clique para ver</button>
        <button onClick={this.clique3}>Clica novamente papai</button>
      </div>
    )
  }
}

export default App;
