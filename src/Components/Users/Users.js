import React from 'react';
import { Link } from 'react-router-dom';
import './Users.css'
import { Card, Row, Col, Button } from 'react-bootstrap';

const Users = (props) => {
  const { name, email, id } = props.users;
  return (



    <Card style={{ width: '19rem' }}>
      <p>ID: {id}</p>
      <Card.Body>
        <h5>{name}</h5>
        <Card.Text>
          <p>Email: <small>{email}</small></p>
        </Card.Text>
        <Link to={`/user/${id}`}>
        <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>




  );
};

export default Users;