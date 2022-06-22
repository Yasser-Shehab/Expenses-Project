import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";

function Expenses({ list }) {
  return (
    <div className="expenses">
      {list.map((expense, index) => {
        return (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
