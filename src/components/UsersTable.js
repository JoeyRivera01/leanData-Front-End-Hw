import { useState } from 'react';
import { Table, Form, Row, Col, Button } from 'react-bootstrap';

const UsersTable = ({users, setUsers}) => {
  const [nextUserId, setNextUserId] = useState(4);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editingCell, setEditingCell] = useState(0);

  const handleAddUser = (e) => {
    e.preventDefault();
    setUsers({...users, nextUserId: {
      firstName,
      lastName,
      expenses: [],
      totalExpenses: 0
    }});
    setNextUserId(prevState => prevState + 1);
    setFirstName('');
    setLastName('');
  }

  const handleFirstNameInput = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastNameInput = (e) => {
    setLastName(e.target.value);
  }

  const handleEdit = (e) => {
    setEditMode(true);
    setEditingCell(e.target.id);
  }

  const handleSave = (e) => {
    let newUserSet = {...users};
    newUserSet[editingCell].firstName = firstName;
    newUserSet[editingCell].lastName = lastName;
    setUsers(newUserSet);
    setFirstName('');
    setLastName('');
    setEditMode(false);
    setEditingCell(0);
  }

  const handleDelete = (e) => {
    let id = e.target.id;
    let newUserSet = {...users};
    delete newUserSet[id];
    setUsers(newUserSet);
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
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          { users &&
            Object.entries(users).map(([userId, user], index) =>
              <tr key={userId}>
                <td>{index + 1}</td>
                <td>
                  {editMode && userId === editingCell ?
                    <input type='text' value={firstName} onChange={handleFirstNameInput} id={userId}></input>
                    : user.firstName
                  }
                </td>
                <td>
                  {editMode && userId === editingCell ?
                    <input type='text' value={lastName} onChange={handleLastNameInput} id={userId}></input>
                    : user.lastName
                  }
                </td>
                <td>{'$' + user.totalExpenses}</td>
                <td>
                  <Button
                    variant='success'
                    className='edit-btn'
                    id={userId}
                    onClick={editMode ? handleSave : handleEdit}>
                    {editMode ? 'Save' :'Edit'}
                  </Button>
                  <Button
                    variant='danger'
                    className='delete-btn'
                    id={userId}
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </td>
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
                value={firstName}
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
              value={lastName}
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