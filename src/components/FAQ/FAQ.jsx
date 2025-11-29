import React, { useState } from 'react';
import { FAQ_ITEMS } from '../../utils/constants';
import './FAQ.css';

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <div className="faq__header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about the Exam Monitor extension and how it works.
          </p>
        </div>

        <div className="faq__content">
          <div className="faq__items">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className={`faq__item ${openItem === index ? 'faq__item--open' : ''}`}>
                <button 
                  className="faq__question"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItem === index}
                >
                  <span className="faq__question-text">{item.question}</span>
                  <span className="faq__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M6 9L12 15L18 9" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div className="faq__answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq__contact">
            <div className="faq__contact-card">
              <div className="faq__contact-icon">💬</div>
              <h3 className="faq__contact-title">Still have questions?</h3>
              <p className="faq__contact-description">
                Contact your institution's exam support team for specific questions about exam policies and technical support.
              </p>
              <div className="faq__contact-info">
                <div className="faq__contact-item">
                  <span className="faq__contact-label">Support Email:</span>
                  <span className="faq__contact-value">examsupport@yourinstitution.edu</span>
                </div>
                <div className="faq__contact-item">
                  <span className="faq__contact-label">Response Time:</span>
                  <span className="faq__contact-value">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;