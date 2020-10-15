import React from "react";

function UserTable({ deleteUser, users, editUser }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => {
            const { id, name, username } = user;
            return (
              <tr key={name}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>
                  <button onClick={() => deleteUser(id)}>Delete</button>
                  <button onClick={() => editUser(user)}>Edit</button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={4}> No user found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default UserTable;
