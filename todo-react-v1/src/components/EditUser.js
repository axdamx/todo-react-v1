import React, { useEffect, useState } from "react";

function EditUser({ currentUser, updateUser, setEditing }) {
  //naming for this current user for edit.
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.username) updateUser(user);
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
      <button
        className="button-primary"
        type="submit"
        style={{ marginRight: 10 }}
      >
        Save
      </button>
      <button
        className="button-primary"
        type="submit"
        onClick={() => setEditing(false)}
      >
        Cancel
      </button>
    </form>
  );
}

export default EditUser;
