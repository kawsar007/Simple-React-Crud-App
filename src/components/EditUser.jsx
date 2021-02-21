import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { UserContext } from "../provider/UserProvider";

function EditUser(props) {
    const [selectedUser, setSelectedUser] = React.useState({
        id: '',
        name:'',
        email: ''
    })
    const { users, editUser } = React.useContext(UserContext);
    const history = useHistory()
    const currentUserId = props.match.params.id;

    React.useEffect(() => {
        const userId = currentUserId;
        const selectUser = users.find(user => user.id === userId)
        setSelectedUser(selectUser);
    }, [currentUserId, users]);
  
    const handleSubmit = () => {
      editUser(selectedUser);
      history.push('/')
    }

    const onChange = (e) => {
       setSelectedUser({...selectedUser, [e.target.name]: e.target.value})  
    }

    return (
        <div className="container mt-5">
    <Form onSubmit={handleSubmit}>
        <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          value={selectedUser.name}
          onChange={onChange}
          id="name"
          placeholder="Enter Your Name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="Email">Email</Label>
        <Input
          type="email"
          name="email"
          value={selectedUser.email}
          onChange={onChange}
          id="Email"
          placeholder="Enter Your Email"
        />
      </FormGroup>
      <Button color="primary">Submit</Button>
      <Link to="/" className="btn btn-info ml-3">Cancel</Link>
    </Form>
    </div>
    )
}

export default EditUser
