import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

function Expenses({ list }) {
  const [seletedYear, setSelectedYear] = useState("");
  const selectedYearHanlder = (enteredYear) => {
    console.log(seletedYear);
    setSelectedYear(enteredYear);
  };
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onSeletedYear={selectedYearHanlder} seletedYear={seletedYear} />
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
      </Card>
    </>
  );
}

export default Expenses;
