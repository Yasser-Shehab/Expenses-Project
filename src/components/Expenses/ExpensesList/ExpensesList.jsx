import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

function ExpensesList({ items }) {
  let expensesContent = <p>No Expenses Found.</p>;

  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {
        (expensesContent = items.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        }))
      }
    </ul>
  );
}

export default ExpensesList;
