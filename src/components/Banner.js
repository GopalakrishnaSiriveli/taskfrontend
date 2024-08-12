// src/components/Banner.js
import React, { useEffect, useState } from 'react';
import './banner.css'

const Banner = () => {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/banner')
      .then(response => response.json())
      .then(data => setBanner(data))
      .catch(error => console.error('Error fetching banner:', error));
  }, []);

  if (!banner) return <div>Loading...</div>;

  return (
    <div className='banner' style={{ padding: '20px', backgroundColor: 'black', color:'white',textAlign: 'center' }}>
      <h1 className='heading'>{banner.description}</h1>
      <p className='time'>Time remaining: {banner.timer} seconds</p>
      <a className='link' href={banner.link} target="_blank" rel="noopener noreferrer">Visit Link</a>
    </div>
  );
};

export default Banner;
