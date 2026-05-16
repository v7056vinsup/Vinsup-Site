// Terms.jsx
import "./Terms.css";

export default function Terms() {
  return (
    <section className="terms-page">
      <div className="terms-container">
        <div className="terms-header">
          <h1>Terms & Conditions</h1>
        </div>

        <div className="terms-card">
          <h2>LAW OF JURISDICTION</h2>

          <p>
            All disputes and legal matters arising out of any transaction or
            usage of this website, including payments processed through our
            integrated payment gateway, shall be subject to the exclusive
            jurisdiction of the courts in Tenkasi, Tamil Nadu, India.
          </p>

          <p>
            By using our services and proceeding with any payment, the user
            agrees to comply with the applicable laws of India and acknowledges
            Tenkasi, Tamil Nadu, India as the designated legal jurisdiction.
          </p>
        </div>

        <div className="terms-footer">
          <p>Last Updated: {new Date().getFullYear()}</p>
        </div>
      </div>
    </section>
  );
}