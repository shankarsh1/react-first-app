import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  return (
    <>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {props.items.map((expense, i) => (
              <ExpenseItem
                key={i}
                id={expense.id}
                created_at={expense.created_at ? "" : ""}
                title={expense.title}
                amount={expense.amount}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Expenses;
