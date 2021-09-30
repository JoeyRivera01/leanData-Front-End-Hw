import { useState } from 'react';
import { Table } from 'react-bootstrap';

const ExpenseTable = ({users}) => {

  return (
    <>
      <h2>Expenses</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          { users &&
            Object.entries(users).map(([userId, user], index) => (
              user.expenses.map(expense =>
                <tr key={userId}>
                  <td>{index + 1}</td>
                  <td>{user.firstName + ' ' + user.lastName}</td>
                  <td>{expense.category}</td>
                  <td>{expense.description}</td>
                  <td>{expense.cost}</td>
                </tr>
              ))
            )}
        </tbody>
      </Table>
    </>
  );
}

export default ExpenseTable;