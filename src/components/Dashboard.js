// src/components/Dashboard.js
import React, { useState } from 'react';
import './banner.css'

const Dashboard = () => {
  const [description, setDescription] = useState('');
  const [timer, setTimer] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/banner', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description, timer, link }),
    })
      .then(response => response.json())
      .then(data => console.log('Banner updated:', data))
      .catch(error => console.error('Error updating banner:', error));
  };

  return (
    <div className='container' style={{ padding: '20px',  color:"white",}}>
      <h2 className='heading'>Update Banner</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Banner Description"
            className='description'
          />
        </div>
        <div>
          <label>Timer (seconds):</label>
          <input
            type="number"
            className='description'
            value={timer}
            onChange={(e) => setTimer(e.target.value)}
            placeholder="Timer (seconds)"
          />
        </div>
        <div>
          <label>Link:</label>
          <input
            type="text"
            value={link}
            className='description'
            onChange={(e) => setLink(e.target.value)}
            placeholder="Banner Link"
          />
        </div>
        <button className='button' type="submit">Update</button>
      </form>
    </div>
  );
};

export default Dashboard;
