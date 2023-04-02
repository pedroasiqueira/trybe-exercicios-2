import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
    <div>
      <label>
        Escreva aqui: <textarea />
      </label>
      <hr />
      <label>
        Email
        <input type="text" />
      </label>
      <hr />
      <label>
        Nome
        <input type="text" />
      </label>
      <hr />
      <label>
        Idade
        <input type="number" />
      </label>
      <hr />
      <label>
        Selecione qual sua vontade no momento:
      <select>
        <option>Doce</option>
        <option>Salgado</option>
      </select>
      </label>
      <hr />

      <label>
        Cidade: <input type="checkbox" />
      </label>
      <hr />

      <label>
        Opção 1<input type="radio"/>
      </label>
      <label>
        Opção 2<input type="radio"/>
      </label>
      <label>
        Opção 3<input type="radio"/>
      </label>
    </div>
    )
  }
}

export default Form;