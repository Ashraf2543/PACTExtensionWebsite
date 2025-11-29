import React, { useState } from 'react';
import { handleExtensionDownload, handleGuideDownload } from '../../utils/downloadHandler';
import './Download.css';

const Download = () => {
  const [activeBrowser, setActiveBrowser] = useState('chrome');

  const browsers = [
    {
      id: 'chrome',
      name: 'Google Chrome',
      icon: '🦊',
      description: 'Recommended for best performance'
    },
    {
      id: 'firefox',
      name: 'Mozilla Firefox',
      icon: '🦊',
      description: 'Full feature support'
    },
    {
      id: 'edge',
      name: 'Microsoft Edge',
      icon: '🌐',
      description: 'Chromium-based support'
    }
  ];

  return (
    <section id="download" className="download section">
      <div className="container">
        <div className="download__header">
          <h2 className="section-title">Download Exam Monitor Extension</h2>
          <p className="section-subtitle">
            Get started in minutes. Choose your browser and download the extension to ensure exam integrity.
          </p>
        </div>

        <div className="download__content">
          <div className="download__options">
            <h3 className="download__options-title">Select Your Browser</h3>
            <div className="download__browsers">
              {browsers.map((browser) => (
                <button
                  key={browser.id}
                  className={`download__browser-btn ${activeBrowser === browser.id ? 'download__browser-btn--active' : ''}`}
                  onClick={() => setActiveBrowser(browser.id)}
                >
                  <span className="download__browser-icon">{browser.icon}</span>
                  <span className="download__browser-name">{browser.name}</span>
                </button>
              ))}
            </div>

            <div className="download__main-action">
              <button 
                className="btn btn-primary btn-large download__btn"
                onClick={() => handleExtensionDownload(activeBrowser)}
              >
                <span>Download for {browsers.find(b => b.id === activeBrowser)?.name}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 16L12 4M12 16L8 12M12 16L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <p className="download__file-info">
                File size: ~2.3 MB • Version: 1.0.0 • Updated: Jan 2024
              </p>
            </div>

            <div className="download__guide">
              <h4>Need help installing?</h4>
              <button 
                className="btn btn-secondary"
                onClick={handleGuideDownload}
              >
                <span>Download Setup Guide</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="download__steps">
            <h3 className="download__steps-title">Quick Setup Guide</h3>
            <div className="download__steps-list">
              <div className="download__step">
                <div className="download__step-number">1</div>
                <div className="download__step-content">
                  <h4>Download Extension</h4>
                  <p>Click the download button for your preferred browser</p>
                </div>
              </div>
              <div className="download__step">
                <div className="download__step-number">2</div>
                <div className="download__step-content">
                  <h4>Install in Browser</h4>
                  <p>Go to extensions page and enable developer mode to install</p>
                </div>
              </div>
              <div className="download__step">
                <div className="download__step-number">3</div>
                <div className="download__step-content">
                  <h4>Activate for Exams</h4>
                  <p>The extension automatically activates during online exams</p>
                </div>
              </div>
              <div className="download__step">
                <div className="download__step-number">4</div>
                <div className="download__step-content">
                  <h4>Automatic Submission</h4>
                  <p>Data is securely sent when you submit your exam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;