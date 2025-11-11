import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/about';
    }
    return location.pathname === path;
  };

  const handleCVClick = (e) => {
    e.preventDefault();
    // Use process.env.PUBLIC_URL for GitHub Pages compatibility
    const pdfPath = `${process.env.PUBLIC_URL || ''}/cv.pdf`;
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
          About
        </Link>
        <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`}>
          Blog
        </Link>
        <button 
          onClick={handleCVClick}
          className="nav-link nav-button"
        >
          CV
        </button>
      </div>
    </nav>
  );
}

export default Navigation;

