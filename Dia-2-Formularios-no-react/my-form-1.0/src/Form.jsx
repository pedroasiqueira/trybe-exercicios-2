import React, { Component } from "react";

class Form extends Component {
  state = {
    teste: '',
    email: '',
    nome: '',
    idade: 0,
    gostaOuNao: false,
    sobremesaFavorita: ''
  }

  handleChange = ({ target }) => {
    // const { name, value } = target; seria assim se não tivesse o checkbox
    // Com o checkbox fica assim:
    const { name } = target;
    const value = target.type ==='checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }
  render() {
    const { teste, email, nome, idade, gostaOuNao, sobremesaFavorita } = this.state;
    const { handleChange } = this;
    return (
    <div>
      <label>
        Escreva aqui para testar:
        <textarea 
          name="teste"
          value={teste}
          onChange={handleChange}
        />
      </label>
      <hr />
      <label>
        Email
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <hr />
      <label>
        Nome
        <input 
          type="text"
          name="nome"
          value={nome}
          onChange={handleChange}
        />
      </label>
      <hr />
      <label>
        Idade
        <input
          type="number"
          name="idade"
          value={idade}
          onChange={handleChange}
        />
      </label>
      <hr />
      <label>
        Se gosta de doce, marque na caixinha:
      <input
        type="checkbox"
        name="gostaOuNao"
        value={gostaOuNao}
        onChange={handleChange}
      />
      </label>
      <hr />

      <label>
        Sobremesa favorita:
        <select
          name="sobremesaFavorita"
          value={sobremesaFavorita}
          onChange={handleChange}>
          <option>Pizza de chocolate</option>
          <option>Bolo de chocolate</option>
          <option>Docinho</option>
          <option>Pudim</option>
        </select>
        </label>

        
    </div>
    )
  }
}

export default Form;