import React, { useState } from "react";

function AddUser({ addUser }) {
  const initUser = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initUser);

  //checking the input value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.username) {
      handleChange(e, addUser(user));
      setUser(initUser);
    } else alert("Empty");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        className="u-full-width"
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <label>Username</label>
      <input
        className="u-full-width"
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
      />
      <button className="button-primary" type="submit">
        Add user
      </button>
    </form>
  );
}

export default AddUser;
