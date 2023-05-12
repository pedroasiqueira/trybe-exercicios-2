import React, { Component } from "react";
import Header from "./Header";

class WalletForm extends Component {
  render() {
    return (
      <div>
        <form>
        <label>
          Despesa:
            <input
              type="text"
              placeholder="despesa/value-input"
              data-testid="value-input"
              name="despesa"
            />
          </label>
          <hr />
          <label>
            Descrição despesa: 
            <input
              type="text"
              placeholder="descrição/description-input"
              data-testid="description-input"
              name="description"
            />
          </label>
          <hr />
          <hr />


          <label>
            ASSINCRONOOOOOOOOO:
            <select
            data-testid="currency-input"
            name="currency">
              <option>algo</option>

            </select>
          </label>


          <hr />
          <label>
            Forma de pagamento:
          <select
            data-testid="method-input"
            name="method"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
          </label>
          <hr />
          <hr />
          <label>
            Forma de pagamento:
          <select
            data-testid="tag-input"
            name="tag"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
          </label>
          <hr />
          <button
          type="button"
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}


export default WalletForm;
