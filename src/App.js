import {useState, useEffect} from 'react';
import UsersTable from './components/UsersTable.js';
import ExpenseTable from './components/ExpenseTable.js';
import CompanyExpensesTable from './components/CompanyExpensesTable.js'
import './App.css';

const App = () => {
  const [displaying, setDisplaying] = useState('users');
  const [expensesByCategory, setExpensesByCategory] = useState({
    'Food': 1100,
    'Travel': 50,
    'Supplies': 200,
    'Health': 2000
  });

  // users list is an object and the userid is the key, to ensure user lookup and delete methods are O(1).
  const [users, setUsers] = useState({
    1: {
      firstName: 'Joey',
      lastName: 'Rivera',
      expenses: [
        {category: 'Food', description: 'Client lunch at The French Laundry.', cost: 1000},
        {category: 'Travel', description: 'Filled up rental car with gas.', cost: 50},
        {category: 'Supplies', description: 'Purchased 3 macbooks for engineering.', cost: 4000},
      ],
      totalExpenses: 5050
    },
    2: {
      firstName: 'Alex',
      lastName: 'Rivera',
      expenses: [
        {category: 'Health', description: 'Renewed the company gym membership.', cost: 2000},
        {category: 'Travel', description: 'Filled up rental car with gas.', cost: 50},
        {category: 'Food', description: 'New hire welcome lunch.', cost: 100},
      ],
      totalExpenses: 2150
    },
    3: {
      firstName: 'Oliver',
      lastName: 'Rivera',
      expenses: [
        {category: 'Travel', description: 'Purchased a toddler stroller.', cost: 100},
        {category: 'Supplies', description: 'Purchased crayons for schoolwork.', cost: 20},
        {category: 'Supplies', description: 'Purchased tracing paper.', cost: 5},
      ],
      totalExpenses: 125
    }
  });

  return (
    <div className='App'>
      <h1 className='page-title'>LeanData Front End Assignment</h1>
      <UsersTable users={users} setUsers={setUsers}/>
      <ExpenseTable users={users} expensesByCategory={expensesByCategory}/>
      <CompanyExpensesTable expensesByCategory={expensesByCategory}/>
    </div>
  );
}

export default App;
