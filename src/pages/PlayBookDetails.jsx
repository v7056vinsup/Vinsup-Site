import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  IoArrowBack,
  IoCalendarOutline,
  IoPricetagOutline,
  IoOpenOutline,
} from "react-icons/io5";
import "./PlayBookDetails.css";

export default function PlayBookDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const card = location.state?.card;

  if (!card) {
    return (
      <div className="no-data-container">
        <h2>No data found</h2>
        <button
          onClick={() => navigate("/playbook")}
          className="no-data-button"
        >
          Back to PlayBook
        </button>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    });
  };

  const convertDriveUrl = (url) => {
    if (!url) return url;
    const match = url.match(/[-\w]{25,}/);
    if (match) {
      const fileId = match[0];
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
    }
    return url;
  };

  const renderBlocks = (blocks, className = "") => {
  if (!Array.isArray(blocks)) return null;

  return blocks.map((block, i) => {
    if (block.type === "title") {
      return (
        <h3 key={i} className="content-card-title">
          {block.value}
        </h3>
      );
    }

    if (block.type === "paragraph") {
      return (
        <p key={i} className={className}>
          {block.value}
        </p>
      );
    }

    if (block.type === "list") {
      return (
        <ul key={i} className={className}>
          {block.value.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    }

    if (block.type === "quote") {
      return (
        <div key={i} className="quote-block">
          {block.value.map((q, idx) => (
            <p key={idx} className="quote-line">
              "{q}"
            </p>
          ))}
        </div>
      );
    }

    return null;
  });
};

  const renderSummaryCards = (blocks) => {
    if (!Array.isArray(blocks)) return null;

    // Group blocks: title starts a new group, others attach to current group
    const groups = [];
    let current = null;

    blocks.forEach((block) => {
      if (block.type === "title") {
        if (current) groups.push(current);
        current = { title: block.value, content: [] };
      } else {
        if (!current) current = { title: null, content: [] };
        current.content.push(block);
      }
    });
    if (current) groups.push(current);

    return groups.map((group, i) => (
      <motion.div
        key={i}
        className={`summary-card ${!group.title ? "summary-card-no-title" : ""} ${
          group.title === "Final Thoughts:" ? "summary-card-final-thought" : ""
        }`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95 + i * 0.1 }}
      >
        {group.title && (
          <div className="summary-card-title-side">
            <h4 className="summary-card-label">{group.title}</h4>
          </div>
        )}
        <div className="summary-card-content-side">
          {group.content.map((block, j) => {
            if (block.type === "paragraph") {
              return <p key={j} className="summary-card-text">{block.value}</p>;
            }
            if (block.type === "list") {
              return (
                <ul key={j} className="summary-card-list">
                  {block.value.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              );
            }
            if (block.type === "quote") {
              return (
                <div key={j} className="summary-card-quote">
                  {block.value.map((q, idx) => (
                    <p key={idx} className="summary-card-quote-line">"{q}"</p>
                  ))}
                </div>
              );
            }
            return null;
          })}
        </div>
      </motion.div>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="playbook-details-container"
    >
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate("/playbook")}
        className="back-button"
      >
        <IoArrowBack size={18} />
        Back to PlayBook
      </motion.button>

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="title-section"
      >
        <span className="category-badge">
          <IoPricetagOutline size={16} />
          {card.Category}
        </span>

        <h1 className="title">{card.Title}</h1>

        <div className="date-display">
          <IoCalendarOutline size={16} />
          {formatDate(card.Date)}
        </div>
      </motion.div>

      {/* 🔥 Dynamic Sections */}
      {card.Sections?.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.2 }}
          className={`content-row ${
            section.type === "image-right" ? "reverse" : ""
          }`}
        >
          {/* Image */}
          {section.image && (
            <motion.div
              className="image-container"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={convertDriveUrl(section.image)}
                alt=""
                className="content-image"
              />
            </motion.div>
          )}

          {/* Text */}
          <motion.div
            className="text-container"
            initial={{
              opacity: 0,
              x: section.type === "image-right" ? -30 : 30,
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.2 }}
          >
            <div
              className={
                index === 1
                  ? "gradient-card"
                  : index === 2
                  ? "bordered-card"
                  : "content-card"
              }
            >
              {section.title && (
                <h3 className="content-card-title">{section.title}</h3>
              )}
              {/* <p className="content-card-text">{section.text}</p> */}
              {Array.isArray(section.text) ? (
  section.text.map((block, i) => {
    if (block.type === "paragraph") {
      return (
        <p key={i} className="content-card-text">
          {block.value}
        </p>
      );
    }

    if (block.type === "quote") {
      return (
        <div key={i} className="quote-block">
          {block.value.map((q, idx) => (
            <p key={idx} className="quote-line">
              "{q}"
            </p>
          ))}
        </div>
      );
    }

    if (block.type === "list") {
      return (
        <ul key={i} className="content-card-text">
          {block.value.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    }

    return null;
  })
) : (
  <p className="content-card-text">{section.text}</p>
)}
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* CTA Button */}
      {card.Link && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="cta-section"
        >
          <a
            href={card.Link}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            <IoOpenOutline size={20} />
            View Full Details
          </a>
        </motion.div>
      )}

      {/* Additional Info */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="additional-info-card"
      >
        <h3 className="additional-info-title">Related Information</h3>
        <p className="additional-info-text">
          Stay updated with the latest trends in {card.Category}. Keep checking
          PlayBook for more insights.
        </p>
      </motion.div> */}
      {/* 🔥 Bottom Description */}
      {card.Description && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bottom-description-card"
        >
          {/* <div className="bottom-description-header">
            <div className="bottom-description-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <h3 className="bottom-description-title">
              Summary
            </h3>
          </div> */}
          <div className="bottom-description-cards">
            {renderSummaryCards(card.Description)}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}