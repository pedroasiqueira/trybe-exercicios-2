import React, { useState } from "react";

function Forms() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [module, setModule] = useState('');
  const [click, setClick] = useState(0);
  return (
    <form>
    <fieldset>
      <legend>Dados Pessoais</legend>
    <label>
      Nome:
      <input
        type="text"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
      />
    </label>
    <hr />
    <label>
      Idade:
      <input
        type="number"
        value={ age }
        onChange={ ({ target }) => setAge(target.value)}
      />
    </label>
    <label>
      Cidade:
      <input
        type="text"
        value={ location }
        onChange={ ({ target }) => setLocation(target.value)}
      />
    </label>
    </fieldset>
    <fieldset>
        <legend>Módulo</legend>
        <label htmlFor="fundamentals">
          Fundamentos
          <input
            type="radio"
            id="fundamentals"
            name="module"
            value="Fundamentos"
            checked={module === 'Fundamentos'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <br />
        <label htmlFor="frontend">
          Front-end
          <input
            type="radio"
            id="frontend"
            name="module"
            value="Front-end"
            checked={module === 'Front-end'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <br />
        <label htmlFor="backend">
          Back-end
          <input
            type="radio"
            id="backend"
            name="module"
            value="Back-end"
            checked={module === 'Back-end'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <br />
        <label htmlFor="cs">
          Ciência da computação
          <input
            type="radio"
            id="cs"
            name="module"
            value="Ciência da computação"
            checked={module === 'Ciência da computação'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
      </fieldset>
    <hr />
    <button
      type="button"
      onClick={ () => setClick(click + 1)}
    >
      Adicionar despesa
    </button>
  </form>
  )
}

export default Forms;
