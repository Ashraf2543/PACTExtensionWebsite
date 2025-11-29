import React from 'react';
import { handleExtensionDownload } from '../../utils/downloadHandler';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Ensure Academic Integrity with
              <span className="hero__title-accent"> Advanced Exam Monitoring</span>
            </h1>
            <p className="hero__description">
              Download our secure browser extension that monitors and detects potential cheating 
              during online exams. Protect the integrity of your assessments with comprehensive 
              monitoring capabilities.
            </p>
            <div className="hero__actions">
              <button 
                className="btn btn-primary btn-large hero__download-btn"
                onClick={() => handleExtensionDownload()}
              >
                <span>Download Extension</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 16L12 4M12 16L8 12M12 16L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <button 
                className="btn btn-secondary btn-large"
                onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </button>
            </div>
            <div className="hero__info">
              <div className="hero__info-item">
                <span className="hero__info-icon">🛡️</span>
                <span>100% Secure & Private</span>
              </div>
              <div className="hero__info-item">
                <span className="hero__info-icon">⚡</span>
                <span>Lightweight & Fast</span>
              </div>
              <div className="hero__info-item">
                <span className="hero__info-icon">🌐</span>
                <span>Multi-Browser Support</span>
              </div>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__card">
              <div className="hero__card-header">
                <div className="hero__card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="hero__card-title">Exam Monitor Active</div>
              </div>
              <div className="hero__card-content">
                <div className="hero__card-feature">
                  <div className="hero__card-icon">✅</div>
                  <span>Tab Switching Detection</span>
                </div>
                <div className="hero__card-feature">
                  <div className="hero__card-icon">✅</div>
                  <span>Copy/Paste Monitoring</span>
                </div>
                <div className="hero__card-feature">
                  <div className="hero__card-icon">✅</div>
                  <span>Screen Activity Tracking</span>
                </div>
                <div className="hero__card-status">
                  <div className="hero__card-indicator"></div>
                  <span>Monitoring Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;