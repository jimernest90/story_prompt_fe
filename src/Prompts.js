import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './prompts.css'

function Prompts() {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3001/prompts') // Replace with your API endpoint
        .then(response => setData(response.data))
        .catch(error => console.error('Error:', error));
    }, []);
  
    return (
      <div>
      {/* Display the fetched data */}
      {data.map(item => (
        <div className= "prompt_card"key={item.id}>
          <p>{item.genre}</p>
          <p>{item.protagonist}</p>
          <p>{item.decade}</p>
          <p>{item.duedate}</p>
          </div>
      ))}
    </div>
    );
}
export default Prompts;