import React from "react";
import PropTypes from "prop-types";
import "./Expenses.css";
const ExpenseItem = (props) => {
  return (
      <>
        <div className="col-md-4">
          <div className="card mb-4 box-shadow">
            <img className="card-img-top" data-src="" />
            <div className="card-body">
              <p className="card-text">{props.title}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">{props.amount}</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">{props.created_at}</small>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

ExpenseItem.propTypes = {};

export default ExpenseItem;
