import { Link } from 'react-router-dom'

function PrivacyPolicy() {
  return (
    <div className="page privacy">
      <header className="privacy-header">
        <Link to="/" className="back-link">&larr; Back to Home</Link>
        <h1>Privacy Policy</h1>
        <p className="effective-date">Effective Date: April 12, 2026</p>
      </header>

      <main className="privacy-content">
        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to LineWatch. This Privacy Policy explains how Steven Nguyen
            ("we," "us," or "our") collects, uses, and protects your personal
            information when you use the LineWatch mobile application ("App").
            By using the App, you agree to the collection and use of information
            in accordance with this policy.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>We collect the following information when you create an account and use the App:</p>
          <ul>
            <li><strong>Email Address</strong> — collected when you sign up for an account, used for authentication and communication.</li>
            <li><strong>Full Name</strong> — collected during signup to personalize your account experience.</li>
            <li><strong>Subscription Tier</strong> — information about which subscription plan you are enrolled in.</li>
            <li><strong>Device Identifiers</strong> — anonymous device and installation identifiers used by our analytics and subscription providers to distinguish devices and manage entitlements.</li>
            <li><strong>Usage &amp; Analytics Data</strong> — anonymized product events such as screen views, feature interactions, paywall views, trial starts, and purchase events.</li>
          </ul>
          <p>The categories listed above are the only information we collect.</p>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>The information we collect is used for the following purposes:</p>
          <ul>
            <li>To create and manage your account</li>
            <li>To authenticate your identity when you log in</li>
            <li>To manage your subscription and provide access to the appropriate features</li>
            <li>To communicate with you about your account, including service updates and support</li>
            <li>To understand how users interact with the App so we can improve features, diagnose issues, and measure product performance</li>
          </ul>
        </section>

        <section>
          <h2>Data Storage and Security</h2>
          <p>
            Your data is securely stored using Supabase, a trusted cloud-based
            backend platform. We implement appropriate technical and
            organizational measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction.
          </p>
          <p>
            While we strive to protect your information, no method of electronic
            storage or transmission over the internet is 100% secure. We cannot
            guarantee absolute security but are committed to maintaining
            industry-standard protections.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>We use the following third-party services to operate the App:</p>
          <ul>
            <li><strong>Supabase</strong> — for secure data storage and authentication.</li>
            <li><strong>Apple App Store</strong> — for processing subscription payments. Payment information is handled entirely by Apple and is not accessible to us.</li>
            <li><strong>RevenueCat</strong> — for subscription management and entitlement tracking. RevenueCat receives anonymized user identifiers and purchase data to manage your subscription status across devices.</li>
            <li><strong>PostHog</strong> — for product analytics. We send anonymized usage events (such as screen views, feature interactions, and purchase events) to PostHog to improve the App. No personally identifying content is sent.</li>
          </ul>
          <p>
            Each of these services has its own privacy policy and data handling
            practices. We do not sell, trade, or otherwise transfer your
            personal information to any other third parties.
          </p>
        </section>

        <section>
          <h2>Data Retention</h2>
          <p>
            We retain your personal information for as long as your account is
            active or as needed to provide you with our services. If you wish to
            delete your account and associated data, please contact us at the
            email address below, and we will process your request promptly.
          </p>
        </section>

        <section>
          <h2>Children's Privacy</h2>
          <p>
            The App is not intended for use by children under the age of 13. We
            do not knowingly collect personal information from children under 13.
            If we become aware that we have collected personal data from a child
            under 13, we will take steps to delete that information as quickly as
            possible. If you believe a child under 13 has provided us with
            personal information, please contact us immediately.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for data processing</li>
          </ul>
          <p>To exercise any of these rights, please contact us using the information below.</p>
        </section>

        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated effective date. We encourage
            you to review this policy periodically to stay informed about how we
            are protecting your information.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
          </p>
          <p className="contact-info">
            <strong>Steven Nguyen</strong><br />
            <a href="mailto:app.linewatch@gmail.com">app.linewatch@gmail.com</a>
          </p>
        </section>
      </main>

      <footer className="privacy-footer">
        <p>&copy; {new Date().getFullYear()} Steven Nguyen. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default PrivacyPolicy
