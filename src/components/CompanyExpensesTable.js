import { Table } from 'react-bootstrap';

const CompanyExpensesTable = ({expensesByCategory}) => {

  return (
    <>
      <h2>Company Expenses</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          { expensesByCategory &&
            Object.entries(expensesByCategory).map(([category, totalExpense], index) =>
              <tr key={index * Math.floor(Math.random() * 100000) + 1}>
                <td>{index + 1}</td>
                <td>{category}</td>
                <td>{totalExpense}</td>
              </tr>
            )}
        </tbody>
      </Table>
    </>
  );
}

export default CompanyExpensesTable;