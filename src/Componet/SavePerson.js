import React, { useState } from 'react';
import axios from 'axios';

const SavePerson = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const savePerson = async () => {
    try {
      const person = { name };
      await axios.post('http://localhost:8083/code/save', person);
      setMessage("Person saved successfully!");
    } catch (error) {
      console.error("Error saving person!", error);
      setMessage("Failed to save person.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    savePerson();
  };

  return (
    <div>
      <h2>Add New Person</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Person Name"
        />
        <button type="submit">Save</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default SavePerson;
