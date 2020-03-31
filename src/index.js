import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import rootReducer from './reducers';

import { Provider } from "react-redux";
import App from "./containers/App";

const store = createStore(rootReducer)

store.subscribe(() => {
  console.log(store.getState())
})

render(
  <Provider store={store} >
    <App />
  </Provider >,
  document.getElementById("root"))

store.dispatch({ type: "PLUS", payload: { num: 3 } })
store.dispatch({ type: "PLUS", payload: { num: 10 } })
store.dispatch({ type: "MINUS", payload: { num: 10 } })
