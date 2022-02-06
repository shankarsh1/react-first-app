import PropTypes from "prop-types";
import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";
export class NewExpense extends Component {
  /* constructor(props) {
    super(props);
  } */
  static propTypes = {};

  saveExpenseDataHandler = (callBackExpenseData) => {
    let expenseData = {
      ...callBackExpenseData,
      id: Math.random().toString(),
    };
    this.props.onAddExpense(expenseData);
    console.log('New Expense',expenseData);
  };

  render() {
    return (
      <React.Fragment>
        <ExpenseForm onSaveExpenseDataCallBack={this.saveExpenseDataHandler} />
      </React.Fragment>
    );
  }
}

export default NewExpense;
