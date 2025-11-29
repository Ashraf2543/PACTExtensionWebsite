import React from 'react';
import { FEATURES } from '../../utils/constants';
import './Features.css';

const Features = () => {
  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="features__header">
          <h2 className="section-title">Comprehensive Monitoring Features</h2>
          <p className="section-subtitle">
            Our extension monitors various activities to ensure exam integrity while respecting student privacy.
          </p>
        </div>
        
        <div className="features__grid">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-card__icon">
                <img 
                  src={`/assets/images/features/${feature.icon}`} 
                  alt={feature.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="feature-card__icon-fallback" style={{display: 'none'}}>
                  🛡️
                </div>
              </div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__description">{feature.description}</p>
              <div className="feature-card__indicator">
                <div className="feature-card__dot"></div>
                <span>Active Monitoring</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="features__notice">
          <div className="features__notice-icon">ℹ️</div>
          <div className="features__notice-content">
            <h4>Privacy First Approach</h4>
            <p>
              All monitoring data is stored locally during the exam and only transmitted to your institution 
              when you click 'Submit Exam'. No personal data is collected or shared with third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;