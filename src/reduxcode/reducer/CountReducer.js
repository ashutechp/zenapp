const initialState = { count: 10, title: 'default title' };

function CountReducer(state = initialState, action) {
  console.log(state);
  console.log(action);
  if (action.type === 'increase') {
    let newState = { ...state, count: state.count + action.step };
    return newState;
  }
  if (action.type === 'decrease') {
    let newState = { ...state, count: state.count - action.step };
    return newState;
  }
  return state;
}

export default CountReducer;
