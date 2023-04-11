import React from 'react';
import Joke from './Joke';

class DadJoke extends React.Component {
  
    state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }

  async fetchJoke() {
    this.setState(
      { loading: true }, //Primeiro parametro da setState()!
      async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
      const requestObject = await requestReturn.json();
      this.setState({
        loading: false,
        jokeObj: requestObject,
      })
  })
    
  }

  componentDidMount = () => {
    this.fetchJoke();
  }

  saveJoke = () => {
    this.setState(({ jokeObj, storedJokes }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }))
    // Salvando a piada no array de piadas existestes
    this.fetchJoke()

  }


  render() {
    const { storedJokes, jokeObj, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      {
        /*
        Aqui vamos construir nossa lógica com uma renderização condicional
        do nosso componente Joke, a ideia é renderizar um loading enquanto
        esperamos a nossa requisição de piadas finalizar.*/

        <p>
          {
          loading
            ? loadingElement
            : <Joke jokeObj={jokeObj} saveJoke={this.saveJoke} />
          // jokeObj ? this.renderJokeElement() : loadingElement
          // Esse if de cima é "mesma coisa" desse debaixo
          // jokeObj === undefined ? loadingElement : jokeObj.joke
          }
          </p>
      }

      </div>
    );
  }
}

export default DadJoke;