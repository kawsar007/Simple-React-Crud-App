import React from "react";
import { Link, useHistory } from "react-router-dom";
import uuid from 'react-uuid'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { UserContext } from "../provider/UserProvider";


function AddUser() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const { addUser } = React.useContext(UserContext);
  const history = useHistory()

  const handleSubmit = () => {
    const newUser = {
       id: uuid(),
       name,
       email,
       
    }
    addUser(newUser)
    history.push('/')
  }

  return (
      <div className="container mt-5">
    <Form onSubmit={handleSubmit}>
        <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Enter Your Name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="Email">Email</Label>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="Email"
          placeholder="Enter Your Email"
        />
      </FormGroup>
      <Button color="primary">Submit</Button>
      <Link to="/" className="btn btn-info ml-3">Cancel</Link>
    </Form>
    </div>
  );
}

export default AddUser;
