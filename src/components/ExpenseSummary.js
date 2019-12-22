import React from "react";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expense-total";
import { connect } from "react-redux";

export const ExpenseSummary = props => {
  const expenseWord = props.expensesCount > 1 ? "expenses" : "expense";
  const expenseTotal = numeral(props.expensesTotal / 100).format("$0,0.00");

  return (
    <div>
      <h1>
        Viewing {props.expensesCount} {expenseWord} totalling {expenseTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

const ConnectedExpenseSummary = connect(mapStateToProps)(ExpenseSummary);

export default ConnectedExpenseSummary;
