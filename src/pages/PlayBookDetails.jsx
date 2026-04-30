// import { useNavigate, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import { IoArrowBack, IoCalendarOutline, IoPricetagOutline, IoOpenOutline } from "react-icons/io5";
// import "./PlayBookDetails.css";

// export default function PlayBookDetails() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const card = location.state?.card;

//   if (!card) {
//     return (
//       <div className="no-data-container">
//         <h2>No data found</h2>
//         <button
//           onClick={() => navigate("/playbook")}
//           className="no-data-button"
//         >
//           Back to PlayBook
//         </button>
//       </div>
//     );
//   }

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-IN", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//       timeZone: "UTC",
//     });
//   };

//   const convertDriveUrl = (url) => {
//     if (!url) return url;
//     const match = url.match(/[-\w]{25,}/);
//     if (match) {
//       const fileId = match[0];
//       return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
//     }
//     return url;
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="playbook-details-container"
//     >
//       {/* Back Button */}
//       <motion.button
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         onClick={() => navigate("/playbook")}
//         className="back-button"
//       >
//         <IoArrowBack size={18} />
//         Back to PlayBook
//       </motion.button>

//       {/* Title Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.1 }}
//         className="title-section"
//       >
//         <motion.span
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2 }}
//           className="category-badge"
//         >
//           <IoPricetagOutline size={16} />
//           {card.Category}
//         </motion.span>

//         <h1 className="title">
//           {card.Title}
//         </h1>

//         <div className="date-display">
//           <IoCalendarOutline size={16} />
//           {formatDate(card.Date)}
//         </div>
//       </motion.div>

//       {/* Row 1: Left Image, Right Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3 }}
//         className="content-row"
//       >
//         <motion.div
//           className="image-container"
//           whileHover={{ scale: 1.02 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           <img
//             src={convertDriveUrl(card.Image)}
//             alt=""
//             className="content-image"
//           />
//         </motion.div>
        
//         <motion.div
//           className="text-container"
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.4 }}
//         >
//           <div className="content-card">
//             <h3 className="content-card-title">
//               Overview
//             </h3>
//             <p className="content-card-text">
//               {card.Description}
//             </p>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Row 2: Left Content, Right Image */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5 }}
//         className="content-row reverse"
//       >
//         <motion.div
//           className="image-container"
//           whileHover={{ scale: 1.02 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           <img
//             src={convertDriveUrl(card.Image)}
//             alt=""
//             className="content-image"
//           />
//         </motion.div>
        
//         <motion.div
//           className="text-container"
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.6 }}
//         >
//           <div className="gradient-card">
//             <h3 className="gradient-card-title">
//               Key Highlights
//             </h3>
//             <p className="gradient-card-text">
//               Explore the key features and highlights of this update. Stay informed about the latest developments in {card.Category}.
//             </p>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Row 3: Left Image, Right Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.7 }}
//         className="content-row"
//       >
//         <motion.div
//           className="image-container"
//           whileHover={{ scale: 1.02 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           <img
//             src={convertDriveUrl(card.Image)}
//             alt=""
//             className="content-image"
//           />
//         </motion.div>
        
//         <motion.div
//           className="text-container"
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.8 }}
//         >
//           <div className="bordered-card">
//             <h3 className="content-card-title">
//               Additional Details
//             </h3>
//             <p className="content-card-text">
//               Discover more about this topic and how it impacts your career journey. Our comprehensive coverage ensures you have all the information you need.
//             </p>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* CTA Button */}
//       {card.Link && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.9 }}
//           className="cta-section"
//         >
//           <a
//             href={card.Link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="cta-button"
//           >
//             <IoOpenOutline size={20} />
//             View Full Details
//           </a>
//         </motion.div>
//       )}

//       {/* Additional Info Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1 }}
//         className="additional-info-card"
//       >
//         <h3 className="additional-info-title">
//           Related Information
//         </h3>
//         <p className="additional-info-text">
//           Stay updated with the latest trends and developments in {card.Category}. 
//           Regularly check our PlayBook section for more insights and updates that can help you in your career growth.
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// }


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
          <h3 className="bottom-description-title">
            Summary
          </h3>
          <p className="bottom-description-text">{card.Description}</p>
        </motion.div>
      )}
    </motion.div>
  );
}