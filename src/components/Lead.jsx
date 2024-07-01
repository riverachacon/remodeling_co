import React, { useState, useEffect } from "react";

function Lead() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // load after one second

    return () => clearTimeout(timer);
  }, []);

  const customStyle = {
    lead: {
      display: "flex",
      flexDirection: "row-reverse",
      opacity: isVisible ? 1 : 0,
      transition: "opacity 1s ease-in-out", // Fade-in transition
    },
    h4: {
      fontSize: "1.4rem",
      color: "#606C38",
    },
  };

  return (
    <div style={customStyle.lead} className="lead">
      <div className="lead-text">
        <div className="lead-title">
          <h4 style={customStyle.h4}>Home renovation in Orlando</h4>
        </div>
        <p style={{ width: "65%" }}>
          Renovate in Orlando area with the experts. Specializing in kitchens,
          bathrooms and full home remodels.
        </p>
      </div>
    </div>
  );
}

export default Lead;
