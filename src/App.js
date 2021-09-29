import {useState} from 'react'
import './App.css';

const App = () => {
  // use a userid for quick user lookup when deleting
  const [users, setUsers] = useState([
    {
      firstName: 'Joey',
      lastName: 'Rivera',
      personalExpenses: [
        {category: 'rent', price: 1000},
        {category: 'gas', price: 50}
      ],
      companyExpenses: [
        {category: 'business trip', price: 4000},
        {category: 'client meal', price: 80}
      ],
      totalPersonalExpenses: 1050,
      totalCompanyExpenses: 4080,
      totalExpenses: this.totalPersonalExpenses + this.totalCompanyExpenses
    },
    {
      firstName: 'Alexandra',
      lastName: 'Rivera',
      personalExpenses: [
        {category: 'rent', price: 1500},
        {category: 'personal meal', price: 0}
      ],
      companyExpenses: [
        {category: 'business trip', price: 4000},
        {category: 'client meal', price: 80}
      ],
      totalExpenses: 0
    },

  ])

  return (
    <div className="App">

    </div>
  );
}

export default App;
