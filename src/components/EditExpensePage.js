import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    console.log("updated", expense);
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/"); //redirect to dashboard page
  };

  onRemove = e => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editExpense: (id, expense) => {
      return dispatch(editExpense(id, expense));
    },
    removeExpense: ({ id }) => {
      return dispatch(removeExpense({ id }));
    }
  };
};

const mapStateToProps = (state, props) => {
  // props points to the props passed into the component
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
