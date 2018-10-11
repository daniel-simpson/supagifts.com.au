import React from "react";

export default ({ children }) => (
  <div
    style={{
      background: "rgba(255, 255, 255, 0.9)",
      margin: "0 auto",
      maxWidth: "1200px",
      padding: "1rem 1.0875rem"
    }}
  >
    {children}
  </div>
);
