import React from 'react';

export default function Main({ data }) {
  return (
    <div className="main-content">
      <img src={data.hdurl} alt={data.title} className="main-image" />
      </div>
    
  );
}

