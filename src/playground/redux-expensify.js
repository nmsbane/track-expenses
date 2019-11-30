import { createStore, combineReducers } from "redux";
const demoState = {
  expenses: [
    {
      id: "laksdlf",
      description: "jan rent",
      note: "rent for january",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
