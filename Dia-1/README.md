Para criar a Store deverá usar a função `createStore()` do Redux, passando como argumento uma função `reducer`.
```javascript
const store = createStore(reducer);
```

O `reducer`é a função responsável por ESCREVER no estado global. Deverá receber um `state`e uma `action` como parâmetro e retornar um novo estado ou estado anterior.
```javascript
const reducer = (state, action) => state
```

Um `action`é um OBJETO que possui OBRIGATORIAMENTE a chave `type`
```javascript
const action = {

  type: 'INCREMENT_COUNTER'

};
```
Definimos o `type`da `action` como sendo a ação que será enviada para o `reducer`para alterar o estado.
No caso acima, a `action` irá enviar a ação `'INCREMENT_COUNTER'` para o `reducer`.
Assim que receber essa `action`, o `reduce` será responsável por atualizar o estado global.

Para enviar uma `action` para o `reduce` é necessário passá-la como argumento para a função `dispatch()`
```javascript
dispatch({type: 'INCREMENT_COUNTER'});
```

Para ler o estado global, o objeto `store` disponibiliza a função `getState()`. Essa função retorna o estado global
```javascript
const state = store.getState()
```

Geralmente iremos fazer ações quando o estado global é atualizado. Por exemplo, toda vez que o contador é incrementado, precisaremos renderizar o novo valor do estado na tela.
PAra isso, o objeto `store`também disponibiliza a função `subscribe()`. Essa função recebe um callback que irá ser chamado toda vez que o estado global sofrer alterações
```javascript
store.subscribe(() => {
    console.log(`O novo estado global é ${store.getState()}`)
})
```

Juntando todas as peças: (Vá no link e procure o gif que tem no site da trybe)
https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif


Para retirar o `warning` na função `createStore`:
```javascript
import { legacy_createStore as createStore } from 'redux';
```
instalando e importando o ReduxDevTools no projeto
```javascript
npm i @redux-devtools/extension

import { composeWithDevTools } from "@redux-devtools/extension";
```


exercicio: https://stackblitz.com/edit/vitejs-vite-j9espl?file=index.js