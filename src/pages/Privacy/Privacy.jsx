import React from 'react';
import { Link } from 'react-router-dom';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="container">
        <div className="privacy__header">
          <Link to="/" className="privacy__back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </Link>
          <h1 className="privacy__title">Privacy Policy</h1>
          <p className="privacy__last-updated">Last updated: January 15, 2024</p>
        </div>

        <div className="privacy__content">
          <section className="privacy__section">
            <h2>1. Introduction</h2>
            <p>
              ExamMonitor ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how our browser extension collects, uses, and safeguards your information during online exams.
            </p>
          </section>

          <section className="privacy__section">
            <h2>2. Information We Collect</h2>
            <p>
              The ExamMonitor extension collects the following types of information during exam sessions:
            </p>
            <ul>
              <li>Browser tab switching events and timestamps</li>
              <li>Copy-paste activity within the exam interface</li>
              <li>Screenshot attempt detection</li>
              <li>AI tool usage indicators</li>
              <li>Virtual machine environment detection</li>
              <li>Multiple monitor setup detection</li>
              <li>Exam session duration and submission time</li>
            </ul>
            <p>
              <strong>We do not collect:</strong> Personal files, email content, private messages, 
              browsing history outside the exam context, or any personally identifiable information 
              not required for exam integrity monitoring.
            </p>
          </section>

          <section className="privacy__section">
            <h2>3. How We Use Collected Information</h2>
            <p>The information we collect is used exclusively for:</p>
            <ul>
              <li>Maintaining academic integrity during online examinations</li>
              <li>Providing institutions with exam session integrity reports</li>
              <li>Detecting and preventing academic dishonesty</li>
              <li>Improving the extension's monitoring capabilities</li>
            </ul>
          </section>

          <section className="privacy__section">
            <h2>4. Data Storage and Transmission</h2>
            <p>
              All monitoring data is stored locally on your device during the exam session. 
              The data is only transmitted to your educational institution's secure servers 
              when you click the "Submit Exam" button. No data is sent to third-party servers 
              or cloud services.
            </p>
          </section>

          <section className="privacy__section">
            <h2>5. Data Retention</h2>
            <p>
              Your institution determines the retention period for exam monitoring data. 
              Typically, this data is retained for the duration required by academic policies 
              and then securely deleted.
            </p>
          </section>

          <section className="privacy__section">
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the monitoring data collected during your exam</li>
              <li>Understand how the data is used by your institution</li>
              <li>File concerns about data handling with your institution</li>
            </ul>
          </section>

          <section className="privacy__section">
            <h2>7. Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect 
              the data collected by our extension. All data transmission is encrypted, and 
              access controls are in place to prevent unauthorized access.
            </p>
          </section>

          <section className="privacy__section">
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify users of 
              any material changes through the extension and our website.
            </p>
          </section>

          <section className="privacy__section">
            <h2>9. Contact Information</h2>
            <p>
              For questions about this Privacy Policy or our data practices, please contact 
              your institution's exam support team or IT department.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;