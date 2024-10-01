import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchAll = () => {
  const [persons, setPersons] = useState([]);

  const fetchPersons = async () => {
    try {
      const response = await axios.get('http://localhost:8083/code/all');
      setPersons(response.data);
    } catch (error) {
      console.error("Error fetching persons!", error);
    }
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  return (
    <div>
      <h2>All Persons</h2>
      <ul>
        {persons.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchAll;
