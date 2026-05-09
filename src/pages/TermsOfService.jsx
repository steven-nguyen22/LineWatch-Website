import { Link } from 'react-router-dom'

function TermsOfService() {
  return (
    <div className="page privacy">
      <header className="privacy-header">
        <Link to="/" className="back-link">&larr; Back to Home</Link>
        <h1>Terms of Service</h1>
        <p className="effective-date">Last Updated: April 27, 2026</p>
      </header>

      <main className="privacy-content">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using the LineWatch mobile application
            ("App"), you agree to be bound by these Terms of Service. If you do
            not agree, do not use the App.
          </p>
        </section>

        <section>
          <h2>2. Informational Purposes Only</h2>
          <p>
            LineWatch is an odds-comparison tool that displays publicly available
            sports betting information. The App does not accept wagers, bets, or
            payments of any kind. All information is provided for informational
            and entertainment purposes only. LineWatch is not a sportsbook,
            gambling operator, or betting advisory service.
          </p>
        </section>

        <section>
          <h2>3. No Guarantee of Accuracy</h2>
          <p>
            Odds, lines, and related data are sourced from third-party providers
            and may be delayed, incomplete, or inaccurate. LineWatch makes no
            warranties, express or implied, regarding the accuracy, reliability,
            completeness, or timeliness of any information displayed. Always
            verify odds directly with your chosen sportsbook before placing any
            wager.
          </p>
        </section>

        <section>
          <h2>4. Limitation of Liability</h2>
          <p>
            <strong>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, LINEWATCH AND
              ITS DEVELOPERS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT,
              INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE
              OF OR INABILITY TO USE THE APP, INCLUDING BUT NOT LIMITED TO
              FINANCIAL LOSSES RESULTING FROM RELIANCE ON INFORMATION PROVIDED BY
              THE APP.
            </strong>
          </p>
        </section>

        <section>
          <h2>5. User Eligibility</h2>
          <p>
            You must be at least 21 years of age to use this App. You are solely
            responsible for ensuring that sports betting is legal in your
            jurisdiction before placing any wager. Not all sportsbooks shown in
            the App are available in every state. LineWatch does not facilitate
            access to sportsbooks and is not responsible for ensuring
            availability in your location.
          </p>
        </section>

        <section>
          <h2>6. Responsible Gambling</h2>
          <p>
            Sports betting involves financial risk. If you or someone you know
            has a gambling problem, call the National Problem Gambling Helpline
            at{' '}
            <a href="tel:18005224700">1-800-522-4700</a> or visit{' '}
            <a href="https://www.ncpgambling.org" target="_blank" rel="noopener noreferrer">
              ncpgambling.org
            </a>.
          </p>
        </section>

        <section>
          <h2>7. Third-Party Services</h2>
          <p>
            The App displays information from third-party sportsbooks and data
            providers. LineWatch does not endorse any sportsbook, guarantee any
            outcome, or have a financial relationship with any sportsbook unless
            explicitly disclosed.
          </p>
        </section>

        <section>
          <h2>8. Intellectual Property</h2>
          <p>
            All content, design, and code within the App is the property of
            LineWatch. You may not copy, reproduce, or distribute any part of
            the App without written permission.
          </p>
        </section>

        <section>
          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued
            use of the App after changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2>10. Contact</h2>
          <p>For questions about these Terms, contact us at:</p>
          <p className="contact-info">
            <strong>Steven Nguyen</strong><br />
            <a href="mailto:app.linewatch@gmail.com">app.linewatch@gmail.com</a>
          </p>
        </section>
      </main>

      <footer className="privacy-footer">
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <span className="footer-sep">&middot;</span>
          <Link to="/terms">Terms of Service</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Steven Nguyen. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default TermsOfService
