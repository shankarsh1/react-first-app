import React, { useEffect, useState } from "react";
import Expenses from "./Expenses";
import NewExpense from "./NewExpenses/NewExpense";
function Index() {
  let expenses = [
    { id: 1, title: "product1", amount: 100, created_at: "" },
    { id: 2, title: "product2", amount: 200, created_at: "" },
    { id: 3, title: "product3", amount: 300, created_at: "" },
    { id: 4, title: "product4", amount: 400, created_at: "" },
    { id: 4, title: "product4", amount: 400, created_at: "" },
  ];
  const [expenseItems, setItems] = useState(expenses);
  function addExpenseHandler(expenseItem) {
    //console.log(expenseItem);
    setItems([...expenseItems, expenseItem]);
    console.log(expenseItems);
  }
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenseItems} />
    </>
  );
}

export default Index;
