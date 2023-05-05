import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

// 1. Criando o reducer com o estado inicial
const INITIAL_STATE = {count: 0};
const reducer = (state = INITIAL_STATE, action) => {
  if(action.type === 'INCREMENT_COUNTER'){
    return { count: state.count + 1 }
  }
  return state;
}

// 2. Criando a store já com Redux dev tools
const store = createStore(reducer, composeWithDevTools());

// 3. Criando a action
const action = { type: 'INCREMENT_COUNTER' }


// 4. Disparando a nossa action
const incrementButton = document.querySelector('button');
incrementButton.addEventListener("click", () => {
  store.dispatch(action);
  // console.log('clicou')
})

// 5. Lendo as alteraçõs do estado
store.subscribe(() => {
  const globalState = store.getState();
  
  const counterElement = document.querySelector('h2');
  counterElement.innerHTML = globalState.count
  
  // console.log("estado alterado")
  // console.log(globalState)
})