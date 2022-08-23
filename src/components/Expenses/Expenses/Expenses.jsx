import Card from "../../UI/Card/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

function Expenses({ list }) {
  const [seletedYear, setSelectedYear] = useState("2020");

  const filteredExpenses = list.filter((expense) => {
    return expense.date.getFullYear().toString() === seletedYear;
  });

  const selectedYearHanlder = (enteredYear) => {
    setSelectedYear(enteredYear);
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onSeletedYear={selectedYearHanlder} seletedYear={seletedYear} />
        <ExpensesChart expenses={filteredExpenses} />
        {<ExpensesList items={filteredExpenses} />}
      </Card>
    </>
  );
}

export default Expenses;
