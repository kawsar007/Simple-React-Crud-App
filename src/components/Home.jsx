import React from "react";
import { UserContext } from "../provider/UserProvider";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";

function Home() {
  const { users, removeUser } = React.useContext(UserContext);
  console.log(users, "Users");
  return (
    <div className="container mt-5">
      {users.length > 0 ? <>
        <Table dark>
        <thead>
          <tr>
            <th>#id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
            {users.map((user, i) => (
                <tr>
            <th scope="row">{i + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Link to={`/edit/${user.id}`} className="btn btn-primary mr-2">Edit</Link>
              <Button onClick={() =>removeUser(user.id)} color="danger">Remove</Button>
            </td>
          </tr>
            ))}
          
        </tbody>
      </Table>
      </> : <>
         <h3>User Not Found</h3>
         <Link to="/add">Please Create User</Link>
      </>}
      
    </div>
  );
}

export default Home;
