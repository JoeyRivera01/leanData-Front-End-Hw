import { useState } from 'react';
import { Table, Form, Row, Col, Button } from 'react-bootstrap';

const ExpenseTable = ({users, setUsers, expensesByCategory}) => {
  const [categories, setCategories] = useState(['Food', 'Travel', 'Supplies', 'Health']);
  const [currCategory, setCurrCategory] = useState('');
  const [currDescription, setCurrDescription] = useState('');
  const [currCost, setCurrCost] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [editingCell, setEditingCell] = useState(0);

  let entryNum = 1;

  const handleAddExpense = (e) => {
    e.preventDefault();
    let id = e.target.id

    // create new expense
      // category
      // description
      // cost

    let newExpense = {
      category: currCategory,
      description: currDescription,
      const: currCost
    }

    // create a copy of users with the new expense
      // add the new expense to the id

    setUsers(/*

       */)
    setCurrCategory('');
    setCurrDescription('');
    setCurrCost(0);
  }

  const handleCategoryChange = (e) => {
    // todo
  }
  const handleUserSelection = (e) => {
    // todo
  }

  const handleCostChange = (e) => {
    setCurrCost(e.target.value);
  }

  const handleEdit = (e) => {
    setEditMode(true);
    setEditingCell(e.target.id);
    // store index of edited expense

  }

  const handleSave = (e) => {
    let newUserSet = {...users};

    // update the expenses for user
      // update total expense
      // TODO

      // update expenses by category

    setUsers(newUserSet);
    setCurrCategory('');
    setCurrDescription('');
    setCurrCost(0);
    setEditMode(false);
    setEditingCell(0);

  }

  const handleDelete = (e) => {
    let id = e.target.id;
    let newUserSet = {...users};
    // delete the specific expense at the user id

    setUsers(newUserSet);
  }

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
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          { users &&
            Object.entries(users).map(([userId, user]) => (
              user.expenses.map(expense =>
                <tr key={userId * Math.floor(Math.random() * 100000) + 1} className={userId}>
                  <td>{entryNum++}</td>
                  <td>{user.firstName + ' ' + user.lastName}</td>
                  <td>{expense.category}</td>
                  <td>{expense.description}</td>
                  <td>{'$' + expense.cost}</td>
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
              ))
            )}
        </tbody>
      </Table>
      <Form className="AddTableForm" style={{margin:'2vh'}} onSubmit={(e) => handleAddExpense(e)}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Users</Form.Label>
              <Form.Select>
                {
                  Object.entries(users).map(([userId, user]) => (
                    <option>{user.firstName + ' ' + user.lastName}</option>
                  ))
                }
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Select>
              {
                categories.map((category) => (
                  <option>{category}</option>
                ))
              }
              </Form.Select>
          </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="cost">
              <Form.Label>Cost</Form.Label>
              <Form.Control
                required
                type="number"
                value={currCost}
                placeholder="0"
                onChange={handleCostChange}
              />
          </Form.Group>
          </Col>
          <Button variant="primary" type="submit">
            Add Expense
          </Button>
        </Row>
      </Form>
    </>
  );
}

export default ExpenseTable;