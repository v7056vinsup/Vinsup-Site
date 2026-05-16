// PrivacyPolicy.jsx
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <section className="privacy-page">
      <div className="privacy-container">
        <div className="privacy-header">
          <h1>Privacy Policy Vinsup Skill Academy</h1>
        </div>

        <div className="privacy-card">
          <p className="last-updated">
            <strong>
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </strong>
          </p>

          <p>
            At <strong>Vinsup Skill Academy</strong>, we are committed to
            protecting the privacy and personal information of our students,
            trainees, website visitors, and users. This Privacy Policy explains
            how we collect, use, manage, and protect the information shared with
            us through our website, training programs, internships, workshops,
            placement activities, and educational services.
          </p>

          <p>
            Users accessing the services of Vinsup Skill Academy must be at
            least 15 years of age or have the consent of a parent or legal
            guardian. By registering with Vinsup Skill Academy, users confirm
            that all information provided during registration, admission,
            inquiries, or communication is accurate, current, and complete.
          </p>

          <h3>Information We Collect</h3>
          <p>
            We may collect personal information including your name, phone
            number, email address, educational qualifications, resume details,
            payment information, and course preferences during registration or
            while using our services.
          </p>

          <h3>Services Offered</h3>
          <p>
            Vinsup Skill Academy provides training and career development
            services including software development, full-stack development,
            data science, UI/UX design, digital marketing, internships, project
            assistance, placement support, workshops, and skill development
            programs.
          </p>

          <h3>How We Use Your Information</h3>
          <p>
            The information collected is used for student registration,
            internship management, placement support, workshop communication,
            career guidance, internal analytics, and service improvement.
          </p>

          <h3>Communication Consent</h3>
          <p>
            By registering with Vinsup Skill Academy, users consent to receive
            calls, SMS, WhatsApp messages, emails, and notifications related to
            courses, internships, placements, workshops, and promotional
            activities.
          </p>

          <h3>Placement Assistance Disclaimer</h3>
          <p>
            Placement opportunities depend on student performance, attendance,
            technical knowledge, communication skills, company hiring
            requirements, and market conditions. The academy does not guarantee
            employment or salary packages.
          </p>

          <h3>Fees & Payment Policy</h3>
          <p>
            All course fees must be paid according to the agreed payment
            schedule. Fees once paid are generally non-refundable unless
            approved under exceptional circumstances.
          </p>

          <h3>Internship & Project Support</h3>
          <p>
            Internship and project guidance services are intended strictly for
            educational purposes. Certificates may be issued based on attendance
            and successful completion criteria.
          </p>

          <h3>Data Protection & Security</h3>
          <p>
            We take reasonable security measures to protect user information
            from unauthorized access, misuse, loss, or disclosure.
          </p>

          <h3>Sharing of Information</h3>
          <p>
            Vinsup Skill Academy does not sell or trade personal information
            with unauthorized third parties except when required for academic,
            placement, or legal purposes.
          </p>

          <h3>Intellectual Property Rights</h3>
          <p>
            All training materials, course content, videos, graphics, branding
            materials, and website content are the intellectual property of
            Vinsup Skill Academy unless otherwise stated.
          </p>

          <h3>AI-Generated Content & Media Usage</h3>
          <p>
            The academy may use AI-generated profile photographs, student
            creatives, event photos, and testimonials for website publishing,
            branding, and marketing purposes.
          </p>

          <h3>Cookies & Website Usage</h3>
          <p>
            Our website may use cookies and analytics tools to improve website
            functionality and user experience.
          </p>

          <h3>Third-Party Services</h3>
          <p>
            Some services may involve third-party platforms such as payment
            gateways, meeting tools, and social media platforms.
          </p>

          <h3>User Rights</h3>
          <p>
            Users may request updates or corrections to their information or opt
            out of promotional communication through official communication
            channels.
          </p>

          <h3>Termination of Services</h3>
          <p>
            The academy reserves the right to suspend or remove users from
            services if academy policies are violated.
          </p>

          <h3>Changes to Privacy Policy</h3>
          <p>
            Vinsup Skill Academy reserves the right to update or modify this
            Privacy Policy at any time.
          </p>

          <h3>Governing Law</h3>
          <p>
            This Privacy Policy shall be governed and interpreted in accordance
            with the laws of India. Any disputes shall be subject to the
            jurisdiction of the courts in Coimbatore, Tamil Nadu.
          </p>

          <h3>Contact Information</h3>

          <div className="contact-box">
            <p>
              For any questions, concerns, or requests regarding this Privacy Policy, users may contact
              Vinsup Skill Academy using the details below.
            </p>
            <p>
              <strong>Website:</strong> <a href="https://www.vinsupskillacademy.com" target="_blank" rel="noopener noreferrer">www.vinsupskillacademy.com</a>
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:hrvinsup@gmail.com">hrvinsup@gmail.com</a>
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:+918128683567">+91 81286 83567</a>
            </p>
            <p>
              <strong>Location</strong><br/>
              <strong>Registered office: </strong>
              369/4 Krishnan Koil Street, Aygudi Tenkasi, Tamil Nadu 627852<br/>
              <strong>Coimbatore office:</strong>
              148, AB Gopalsamy Koil St, Sridevi Nagar, Ganapathy, Coimbatore, Tamil Nadu 641006
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}