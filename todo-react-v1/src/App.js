import React, { useState } from "react";
import userList from "./data";
import UserTable from "./components/UserTable";
import "./App.css";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  const [users, setUsers] = useState([]);
  //for edit user
  const [isEditing, setIsEditing] = useState(false);
  const initialUser = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialUser);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (user) => {
    console.log(user);
    setIsEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
  };

  return (
    <div className="container">
      <h1> React CRUD with Hooks </h1>
      <div className="row">
        <div className="five columns">
          {isEditing ? (
            <div>
              <h2> Edit User </h2>
              <EditUser
                currentUser={currentUser}
                setEditing={setIsEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2> Add User </h2>
              <AddUser addUser={addUser} />
            </div>
          )}
        </div>
        <div className="seven columns">
          <h2> View User </h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
