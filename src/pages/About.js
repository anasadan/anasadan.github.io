import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-main">
          <h1 className="name">Anas Adan</h1>
          <p className="title">Software Engineer | AI Engineer | DevOps | Data Analyst</p>
          
          <div className="bio-section">
            <p>
              Hi, I'm <strong>Anas Adan</strong>, a <span className="highlight">Software Engineer </span> passionate about building <span className="highlight">performant backend systems, user-focused apps and data-driven insights</span>.
            </p>
            <p>
              Over the past <span className="highlight">3 years</span>, I've worked on projects spanning <span className="highlight">cloud infrastructure, API design, distributed systems, and web applications</span>, combining strong technical foundations with a problem-solving mindset.
            </p>
            <p>
              My approach blends technical depth with pragmatic design. I enjoy transforming complex ideas into clean, efficient, and maintainable solutions. Recently, I've been focused on <span className="highlight">Cloud infrastructure, AI engineering and DevOps</span>.
            </p>
            <p>
              When I'm not coding, you'll find me <span className="highlight">exploring system design patterns, contributing to open source, or mentoring junior devs</span>.
            </p>
          </div>
        </div>
        
        <div className="about-sidebar">
          <div className="profile-picture">
            <img 
              src={`${process.env.PUBLIC_URL || ''}/images/profile.jpg`}
              alt="Anas Adan" 
              className="profile-image"
              onError={(e) => {
                // Try alternative image paths
                const alternatives = [
                  '/images/profile.png',
                  '/images/profile.jpeg',
                  '/images/photo.jpg',
                  '/images/headshot.jpg'
                ];
                const currentSrc = e.target.src;
                const currentIndex = alternatives.findIndex(alt => currentSrc.includes(alt.split('/').pop()));
                
                if (currentIndex < alternatives.length - 1) {
                  e.target.src = `${process.env.PUBLIC_URL || ''}${alternatives[currentIndex + 1]}`;
                } else {
                  // Fallback to placeholder if no image found
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }
              }}
            />
            <div className="profile-placeholder" style={{ display: 'none' }}>
              <span>Photo</span>
            </div>
            <p className="ai-headshot-label">AI headshot</p>
          </div>
          <div className="contact-info">
            <p>Email: <a href="mailto:anasadan2@gmail.com" className="contact-link">anasadan2@gmail.com</a></p>
            <p>Location: London, UK</p>
            <p>LinkedIn: <a href="https://linkedin.com/in/anas-adan" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a></p>
            <p>GitHub: <a href="https://github.com/anasadan" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

