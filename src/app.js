import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

// react differentiates between normal html and react component using uppercase letter
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

// store.dispatch(
//   addExpense({
//     description: "water bill",
//     amount: 45000,
//     createdAt: 2000
//   })
// );

// store.dispatch(
//   addExpense({
//     description: "gas bill"
//   })
// );

// store.dispatch(
//   addExpense({
//     description: "rent",
//     amount: 109500,
//     createdAt: 1000
//   })
// );

// // store.dispatch(setTextFilter("water"));
// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
