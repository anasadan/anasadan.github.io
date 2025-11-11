import React from 'react';
import './CV.css';

function CV() {
  const handleOpenPDF = (e) => {
    e.preventDefault();
    // Use process.env.PUBLIC_URL for GitHub Pages compatibility
    const pdfPath = `${process.env.PUBLIC_URL || ''}/cv.pdf`;
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div className="cv-page">
      <h1 className="page-title">Curriculum Vitae</h1>
      <div className="cv-content">
        <div className="cv-link-container">
          <button 
            onClick={handleOpenPDF}
            className="cv-link"
          >
            View CV PDF
          </button>
          <p className="cv-link-description">
            Click the button above to open my CV in a new tab.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CV;

