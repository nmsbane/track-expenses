import React from "react";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

import { connect } from "react-redux";

export const ExpenseList = props => (
  <div>
    {props.expenses.length == 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map(expense => (
        <ExpenseListItem {...expense} key={expense.id} />
      ))
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;
