const INITIAL_STATE = {
  count: 0,
  clicks: 0,
}

const counterReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    // cria um novo state a partir dos dados recebidos pela Action
    case "INCREMENT_COUNTER":
      return {
        ...state,
        count: state.count + action.payload,
      };
  
    default:
      return state;
  }
}

export default counterReducer;
