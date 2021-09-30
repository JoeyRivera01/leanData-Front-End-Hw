import { useState, useEffect } from 'react';
import { Table, Form, Row, Col, Button } from 'react-bootstrap';

const UsersTable = ({users, setUsers}) => {
  const [nextUserId, setNextUserId] = useState(4);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleAddUser = (e) => {
    e.preventDefault();
    setUsers({...users, nextUserId: {
      firstName,
      lastName,
      expenses: [],
      totalExpenses: 0
    }});
    setNextUserId(prevState => prevState + 1);
    console.log(nextUserId);
  }

  const handleFirstNameInput = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastNameInput = (e) => {
    setLastName(e.target.value);
  }

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
                <td>{'$' + user.totalExpenses}</td>
              </tr>
            )}
        </tbody>
      </Table>
      <Form className="userForm" style={{margin:'2vh'}} onSubmit={(e) => handleAddUser(e)}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="John"
                onChange={handleFirstNameInput}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Smith"
              onChange={handleLastNameInput}
            />
          </Form.Group>
          </Col>
          <Button variant="primary" type="submit">
            Add User
          </Button>
        </Row>
      </Form>
    </>
  );
}

export default UsersTable;