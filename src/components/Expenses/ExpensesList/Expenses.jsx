import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

function Expenses({ list }) {
  const [seletedYear, setSelectedYear] = useState("2020");
  const [filteredList, setFilteredList] = useState(list);
  console.log(filteredList);

  const filteredExpenses = list.filter((expense) => {
    return expense.date.getFullYear().toString() == seletedYear;
  });

  const selectedYearHanlder = (enteredYear) => {
    setSelectedYear(enteredYear);
  };
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onSeletedYear={selectedYearHanlder} seletedYear={seletedYear} />
        {filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
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
