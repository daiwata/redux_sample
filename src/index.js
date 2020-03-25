import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "PLUS_ONE":
      return state + 1;
    case "MINUS_ONE":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({ type: "PLUS_ONE" })
store.dispatch({ type: "PLUS_ONE" })
store.dispatch({ type: "MINUS_ONE" })
