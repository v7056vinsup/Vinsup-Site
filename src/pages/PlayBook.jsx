import { useEffect, useState, useMemo, useRef } from "react";
import Loader from "../components/Loader";

export default function PlayBook() {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const containerRef = useRef(null);
  const [categories, setCategories] = useState(["All Categories"]);

  // Backend pagination
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 8;

  // ✅ Fetch data (IMPORTANT: googleusercontent.com)
  useEffect(() => {
    setLoading(true);

    const categoryParam =
        selectedCategory !== "All Categories"
        ? `&category=${encodeURIComponent(selectedCategory)}`
        : "";
    fetch(
      `https://script.google.com/macros/s/AKfycbxAOltiOUVgZcoYxM8TyWhDRo-IVOb5isfpXdKqNoyiNn-4zK1h7NoRJ18XpA7PNWUt/exec?page=${page}&limit=${limit}${categoryParam}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        setTotal(res.total);
    //     if (res.categories && res.categories.length > 0) {
    //       setCategories(["All Categories", ...res.categories]);
    //     } else {
    //       // Fallback: derive categories from data if backend doesn't provide them
    //       const uniqueCategories = new Set();
    //       res.data.forEach((item) => item.Category && uniqueCategories.add(item.Category));
    //       setCategories(["All Categories", ...Array.from(uniqueCategories)]);
    //     }
    //   })
            setCategories((prev) => {
            if (prev.length > 1) return prev; // already set → don't overwrite

            if (res.categories && res.categories.length > 0) {
            return ["All Categories", ...res.categories];
            }

            const unique = new Set();
            res.data.forEach((item) => item.Category && unique.add(item.Category));
            return ["All Categories", ...Array.from(unique)];
        });
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [page, selectedCategory]);

  // Scroll to top after data loads
  useEffect(() => {
    if (!loading && containerRef.current) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [loading]);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showFilterDropdown && !event.target.closest(".filter-container")) {
        setShowFilterDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showFilterDropdown]);

  // Date fix
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    });
  };

  // Convert Google Drive URL to embeddable format
  const convertDriveUrl = (url) => {
    if (!url) return url;
    const match = url.match(/[-\w]{25,}/);
    if (match) {
      const fileId = match[0];
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
    }
    return url;
  };

  // Filter (NOTE: only current page data)
  const filteredData = useMemo(() => {
    if (selectedCategory === "All Categories") return data;
    return data.filter((item) => item.Category === selectedCategory);
  }, [data, selectedCategory]);

  // Total pages from backend
  const totalPages = Math.ceil(total / limit);

  if (loading) return <Loader />;

  return (
    <div ref={containerRef} style={{ padding: "40px", background: "#f7f9fc", minHeight: "100vh" }}>
      
      {/* Header */}
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
        What's Happening
      </h1>
      <p style={{ marginBottom: "30px", color: "#555" }}>
        Updates on career, tools & latest technology trends
      </p>

      {/* Filter */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div className="filter-container" style={{ position: "relative" }}>
          <button 
            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
             style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "14px",
              color: "#333",
              transition: "all 0.2s",
            }}
            >
            Filter: {selectedCategory}
          </button>

          {showFilterDropdown && (
            <div style={{ position: "absolute", right: 0, background: "#fff", zIndex: 100, boxShadow: "0 4px 12px rgba(0,0,0,0.15)", borderRadius: "8px", border: "1px solid #e0e0e0", minWidth: "200px" }}>
              {categories.map((cat) => (
                <div
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setShowFilterDropdown(false);
                  }}
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    fontSize: "16px",
                    background:
                      selectedCategory === cat ? "#f0f7ff" : "#fff",
                  }}
                >
                  {cat}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {filteredData.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedCard(item)}
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-4px)";
              e.target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            }}
          >
            <img
              src={convertDriveUrl(item.Image)}
              alt=""
              style={{ width: "100%", height: "220px", objectFit: "cover" }}
            />

            <div style={{ padding: "16px" }}>
              <span
                style={{
                  background: "#e6f0ff",
                  color: "#0066ff",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "12px",
                }}
              >
                {item.Category}
              </span>

              <h3 style={{ marginTop: "10px" }}>{item.Title}</h3>

              <p style={{ fontSize: "14px", color: "#666" }}>
                {item.Description}
              </p>

              <p style={{ fontSize: "12px", color: "#999" }}>
                {formatDate(item.Date)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div style={{ 
        marginTop: "40px", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        gap: "8px"
      }}>
        
        {/* Prev */}
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          style={{
            padding: "10px 16px",
            border: "1px solid #ddd",
            background: page === 1 ? "#f8f9fa" : "#fff",
            borderRadius: "8px",
            cursor: page === 1 ? "not-allowed" : "pointer",
            fontSize: "14px",
            fontWeight: "500",
            color: page === 1 ? "#999" : "#333",
            transition: "all 0.2s ease",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            boxShadow: page === 1 ? "none" : "0 2px 4px rgba(0,0,0,0.05)",
          }}
          onMouseEnter={(e) => {
            if (page !== 1) {
              e.target.style.background = "#f0f7ff";
              e.target.style.borderColor = "#0066ff";
              e.target.style.color = "#0066ff";
              e.target.style.transform = "translateY(-1px)";
              e.target.style.boxShadow = "0 4px 8px rgba(0,102,255,0.15)";
            }
          }}
          onMouseLeave={(e) => {
            if (page !== 1) {
              e.target.style.background = "#fff";
              e.target.style.borderColor = "#ddd";
              e.target.style.color = "#333";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
            }
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
          Previous
        </button>

        {/* Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            style={{
              margin: "0 4px",
              padding: "10px 14px",
              background: page === i + 1 ? "#0066ff" : "#fff",
              color: page === i + 1 ? "#fff" : "#333",
              border: page === i + 1 ? "1px solid #0066ff" : "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: page === i + 1 ? "600" : "500",
              transition: "all 0.2s ease",
              cursor: "pointer",
              boxShadow: page === i + 1 ? "0 4px 12px rgba(0,102,255,0.3)" : "0 2px 4px rgba(0,0,0,0.05)",
            }}
            onMouseEnter={(e) => {
              if (page !== i + 1) {
                e.target.style.background = "#f0f7ff";
                e.target.style.borderColor = "#0066ff";
                e.target.style.color = "#0066ff";
                e.target.style.transform = "translateY(-1px)";
              }
            }}
            onMouseLeave={(e) => {
              if (page !== i + 1) {
                e.target.style.background = "#fff";
                e.target.style.borderColor = "#ddd";
                e.target.style.color = "#333";
                e.target.style.transform = "translateY(0)";
              }
            }}
          >
            {i + 1}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() =>
            setPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={page === totalPages}
          style={{
            padding: "10px 16px",
            border: "1px solid #ddd",
            background: page === totalPages ? "#f8f9fa" : "#fff",
            borderRadius: "8px",
            cursor: page === totalPages ? "not-allowed" : "pointer",
            fontSize: "14px",
            fontWeight: "500",
            color: page === totalPages ? "#999" : "#333",
            transition: "all 0.2s ease",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            boxShadow: page === totalPages ? "none" : "0 2px 4px rgba(0,0,0,0.05)",
          }}
          onMouseEnter={(e) => {
            if (page !== totalPages) {
              e.target.style.background = "#f0f7ff";
              e.target.style.borderColor = "#0066ff";
              e.target.style.color = "#0066ff";
              e.target.style.transform = "translateY(-1px)";
              e.target.style.boxShadow = "0 4px 8px rgba(0,102,255,0.15)";
            }
          }}
          onMouseLeave={(e) => {
            if (page !== totalPages) {
              e.target.style.background = "#fff";
              e.target.style.borderColor = "#ddd";
              e.target.style.color = "#333";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
            }
          }}
        >
          Next
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Modal for complete card data */}
      {selectedCard && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "20px",
          }}
          onClick={() => setSelectedCard(null)}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: "relative" }}>
              <img
                src={convertDriveUrl(selectedCard.Image)}
                alt=""
                style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "16px 16px 0 0" }}
              />
              <button
                onClick={() => setSelectedCard(null)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "rgba(255,255,255,0.95)",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#333",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                }}
              >
                ×
              </button>
            </div>

            <div style={{ padding: "24px" }}>
              <span
                style={{
                  background: "#e6f0ff",
                  color: "#0066ff",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: "500",
                }}
              >
                {selectedCard.Category}
              </span>

              <h2 style={{ marginTop: "16px", fontSize: "24px", fontWeight: "bold", color: "#333" }}>
                {selectedCard.Title}
              </h2>

              <p style={{ fontSize: "14px", color: "#999", marginTop: "8px" }}>
                {formatDate(selectedCard.Date)}
              </p>

              <div style={{ marginTop: "20px", lineHeight: "1.6", color: "#555" }}>
                <p style={{ fontSize: "16px" }}>{selectedCard.Description}</p>
              </div>

              {selectedCard.Link && (
                <a
                  href={selectedCard.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "24px",
                    padding: "12px 24px",
                    background: "#0066ff",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontWeight: "500",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => e.target.style.background = "#0052cc"}
                  onMouseLeave={(e) => e.target.style.background = "#0066ff"}
                >
                  View Details
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}