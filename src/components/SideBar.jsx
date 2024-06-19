import React, { useState } from 'react';

export default function SideBar({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
      <div className={`offcanvas offcanvas-start ${isOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" aria-label="Close" onClick={toggleSidebar}></button>
        </div>
        <div className="offcanvas-body">
          <div className="sidebar-item">
            <h2>Title: {data.title}</h2>
            <p>Date: {data.date}</p>
            <p>{data.explanation}</p>
            <p><strong>Copyright:</strong> {data.copyright}</p>
            <p><strong>HD URL:</strong> <a href={data.hdurl} target="_blank" rel="noopener noreferrer">View HD Image</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
