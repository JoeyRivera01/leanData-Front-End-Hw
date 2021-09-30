import { useState } from 'react';
import { Table } from 'react-bootstrap';

const UsersTable = ({users}) => {

  return (
    <>
      <h2>Users</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Total Expenses</th>
          </tr>
        </thead>
        <tbody>
          { users &&
            Object.entries(users).map(([userId, user], index) =>
              <tr key={userId}>
                <td>{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.totalExpenses}</td>
              </tr>
            )}
        </tbody>
      </Table>
    </>
  );
}

export default UsersTable;