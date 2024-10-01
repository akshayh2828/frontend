import React, { useState } from 'react';
import axios from 'axios';

const DeleteById = () => {
  const [personId, setPersonId] = useState('');
  const [message, setMessage] = useState('');

  const deletePersonById = async (id) => {
    try {
     const x=await axios.delete(`http://localhost:8083/code/delete/${id}`);
      setMessage("Person deleted successfully!");
    } catch (error) {
      console.error("Error deleting person!", error);
      setMessage("Failed to delete person.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    deletePersonById(personId);
  };

  return (
    <div>
      <h2>Delete Person by ID</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={personId}
          onChange={(e) => setPersonId(e.target.value)}
          placeholder="Enter Person ID"
        />
        <button type="submit">Delete</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteById;
