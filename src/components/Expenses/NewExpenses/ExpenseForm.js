import PropTypes from "prop-types";
import React, { Component } from "react";

export class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", amount: "", created_at: "" };
    /* this.state = { enteredTitle: "" };
    this.state = { enteredAmount: "" };
    this.state = { enteredDate: "" }; */
  }
  titleChangeHandler(event) {
    this.setState({ title: event.target.value });
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log("Expense Form", this.state);
    this.props.onSaveExpenseDataCallBack(this.state);
    /* let expenseData = {
      ...this.state,
      id: Math.random().toString(),
    }; */
    /* console.log(
      `${this.state.title}, ${this.state.amount}, ${this.state.created_at}, ${this.state.subject} `
    ); */
  };
  static propTypes = {};

  render() {
    return (
      <React.Fragment>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <form onSubmit={this.submitHandler}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      name="title"
                      value={this.state.title}
                      onChange={this.changeHandler}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Amount</label>
                    <input
                      type="number"
                      name="amount"
                      value={this.state.amount}
                      onChange={this.changeHandler}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Date</label>
                    <input
                      type="date"
                      name="created_at"
                      value={this.state.created_at}
                      onChange={this.changeHandler}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>&nbsp;</label>
                    <button
                      className="form-control btn btn-primary my-2 my-sm-0"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ExpenseForm;
