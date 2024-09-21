import React, { useState } from 'react';

const ContactPage = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedUsers = users.map((user, index) =>
        index === editIndex ? name : user
      );
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, name]);
    }
    setName('');
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setName(users[index]);
  };

  const handleDelete = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter user name"
          required
        />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user} <br /><br />

            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactPage;
