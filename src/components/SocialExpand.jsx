import "./SocialExpand.css";

export default function SocialExpand() {
  return (
    <div className="follow-container">
      <button className="follow-btn">Follow Us</button>

      <div className="social-icons">
        <a href="https://maps.app.goo.gl/En19xC24GXEBvawg8" target="_blank" rel="noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            width="42"
            height="42"
            loading="lazy"
            decoding="async"
            alt="Google Map"
          />
        </a>

        <a href="https://www.linkedin.com/company/vinsup-skill-academy/" target="_blank" rel="noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            width="42"
            height="42"
            loading="lazy"
            decoding="async"
            alt="LinkedIn"
          />
        </a>

        <a href="https://www.instagram.com/vinsupskillacademy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            width="42"
            height="42"
            loading="lazy"
            decoding="async"
            alt="Instagram"
          />
        </a>

        <a href="https://www.facebook.com/share/14NqmEXBLMG/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174848.png"
            width="42"
            height="42"
            loading="lazy"
            decoding="async"
            alt="Facebook"
          />
        </a>

        <a href="https://www.youtube.com/@VinsupSkillAcademy" target="_blank" rel="noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174883.png"
            width="42"
            height="42"
            loading="lazy"
            decoding="async"
            alt="YouTube"
          />
        </a>
      </div>
    </div>
  );
}
