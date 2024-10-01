import React, { useState } from 'react';
import axios from 'axios';
//import './App.css';

const FindById = () => {
  const [personId, setPersonId] = useState('');
  const [person, setPerson] = useState(null);
  const [error, setError] = useState(null);

  const findPersonById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8083/code/emp/${id}`);
      setPerson(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching person!", error);
      setPerson(null);
      setError("Person not found!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    findPersonById(personId);
  };

  return (
    <div>
      <h2>Find Person by ID</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={personId}
          onChange={(e) => setPersonId(e.target.value)}
          placeholder="Enter Person ID"
        />
        <button type="submit">Find</button>
      </form>

      {error && <p className="error">{error}</p>}

      {person && (
        <div className="person-details">
          <p><strong>ID:</strong> {person.id}</p>
          <p><strong>Name:</strong> {person.name}</p>
        </div>
      )}
    </div>
  );
};

export default FindById;
