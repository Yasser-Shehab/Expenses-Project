import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

function NewExpense({ onAddExpense }) {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
