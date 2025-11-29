import React from 'react';
import { Link } from 'react-router-dom';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="container">
        <div className="terms__header">
          <Link to="/" className="terms__back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </Link>
          <h1 className="terms__title">Terms of Service</h1>
          <p className="terms__last-updated">Last updated: January 15, 2024</p>
        </div>

        <div className="terms__content">
          <section className="terms__section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading and using the ExamMonitor browser extension ("the Extension"), 
              you agree to be bound by these Terms of Service and our Privacy Policy. 
              If you disagree with any part of these terms, you may not use our Extension.
            </p>
          </section>

          <section className="terms__section">
            <h2>2. Use License</h2>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to use the 
              ExamMonitor Extension for the purpose of maintaining academic integrity during 
              online examinations as required by your educational institution.
            </p>
          </section>

          <section className="terms__section">
            <h2>3. Permitted Use</h2>
            <p>You may use the Extension to:</p>
            <ul>
              <li>Participate in online examinations as required by your institution</li>
              <li>Maintain exam integrity through monitored sessions</li>
              <li>Review collected monitoring data before submission</li>
            </ul>
          </section>

          <section className="terms__section">
            <h2>4. Restrictions</h2>
            <p>You may not:</p>
            <ul>
              <li>Attempt to disable, bypass, or tamper with the Extension's monitoring capabilities</li>
              <li>Use the Extension for any unauthorized purposes</li>
              <li>Reverse engineer, decompile, or disassemble the Extension</li>
              <li>Distribute modified versions of the Extension</li>
              <li>Use the Extension in violation of your institution's academic integrity policies</li>
            </ul>
          </section>

          <section className="terms__section">
            <h2>5. Monitoring and Data Collection</h2>
            <p>
              The Extension monitors specific activities during exam sessions as detailed in 
              our Privacy Policy. By using the Extension, you consent to this monitoring and 
              data collection for academic integrity purposes.
            </p>
          </section>

          <section className="terms__section">
            <h2>6. User Responsibilities</h2>
            <p>You are responsible for:</p>
            <ul>
              <li>Ensuring the Extension is properly installed and functioning before exams</li>
              <li>Not attempting to circumvent the Extension's monitoring features</li>
              <li>Following your institution's exam policies and procedures</li>
              <li>Maintaining the security of your device and browser</li>
            </ul>
          </section>

          <section className="terms__section">
            <h2>7. Institution Policies</h2>
            <p>
              Your use of the Extension is subject to your educational institution's 
              academic integrity policies and exam procedures. The Extension is a tool 
              to support these policies, and any disputes regarding exam integrity 
              should be resolved through your institution's established procedures.
            </p>
          </section>

          <section className="terms__section">
            <h2>8. Disclaimer</h2>
            <p>
              The Extension is provided "as is" without warranties of any kind. While we 
              strive for accuracy in monitoring, we cannot guarantee detection of all 
              potential academic integrity violations. The Extension is a supportive tool 
              and should not be considered the sole determinant of academic honesty.
            </p>
          </section>

          <section className="terms__section">
            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, ExamMonitor shall not be liable for 
              any indirect, incidental, special, consequential, or punitive damages resulting 
              from your use or inability to use the Extension.
            </p>
          </section>

          <section className="terms__section">
            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the 
              Extension after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="terms__section">
            <h2>11. Governing Law</h2>
            <p>
              These terms shall be governed by the laws of the jurisdiction where your 
              educational institution is located, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="terms__section">
            <h2>12. Contact</h2>
            <p>
              For questions about these Terms of Service, please contact your institution's 
              exam support team or IT department.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;