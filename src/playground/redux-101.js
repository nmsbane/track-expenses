import { createStore } from "redux";

const store = createStore((state = { count: 0 }) => {
  // by doing state = we are assigning a default state
  return state;
});

console.log(store.getState());

// i would like to increase the count by 1 or decrement by 1
// we can achieve this using Actions
