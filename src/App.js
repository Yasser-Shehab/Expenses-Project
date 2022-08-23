import { useState } from "react";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem/ExpenseItem";
import Expenses from "./components/Expenses/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { expenses } from "./Data/expenseData";
function App() {
  const [expenseData, setExpenseData] = useState(expenses);

  const addExpenseHandler = (expense) => {
    setExpenseData((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses list={expenseData} />
    </div>
  );
}

export default App;
