import { createStore } from "redux";

// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const resetCount = () => ({
  type: "RESET"
});

const setCount = ({ count = 0 } = {}) => ({
  type: "SET",
  count
});

const store = createStore((state = { count: 0 }, action) => {
  // by doing state = we are assigning a default state
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    case "SET":
      return {
        count: action.count
      };
    default:
      return state;
  }
});

store.subscribe(() => {
  console.log(store.getState());
});

// console.log(store.getState());

// actions - an object that gets sent to the store

// increment, decrement, reset

// i would like to increase the count by 1 or decrement by 1
// we can achieve this using Actions

// i would like to increment the count by 1
store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 2 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 100 }));

store.dispatch(setCount({ count: 33 }));

// console.log(store.getState());
