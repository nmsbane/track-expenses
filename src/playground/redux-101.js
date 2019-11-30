import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  // by doing state = we are assigning a default state
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
});

console.log(store.getState());

// actions - an object that gets sent to the store

// increment, decrement, reset

// i would like to increase the count by 1 or decrement by 1
// we can achieve this using Actions

// i would like to increment the count by 1
store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "DECREMENT"
});

store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT"
});

console.log(store.getState());
