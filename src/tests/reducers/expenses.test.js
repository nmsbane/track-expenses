import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// should add an expense
test("should add an expense", () => {
  const action = {
    expense: {
      id: "4",
      description: "udemy skill improvement",
      note: "",
      amount: 19500,
      createdAt: 0
    },
    type: "ADD_EXPENSE"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

// should edit an expense
test("should edit an expense", () => {
  const action = {
    updates: {
      note: "dummy note here"
    },
    type: "EDIT_EXPENSE",
    id: "1"
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].note).toBe("dummy note here");
});

// should not edit expense if expense not found
test("should edit an expense", () => {
  const action = {
    updates: {
      note: "dummy note here"
    },
    type: "EDIT_EXPENSE",
    id: "4"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
