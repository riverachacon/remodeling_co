// function About() {
//   const customStyle = {
//     p1: {
//       fontSize: "1.4rem",
//       color: "#606C38",
//     },
//   };
//   return (
//     <div id="about" className="aboutUs">
//       <h1 style={{ fontSize: "3.5rem" }}>About Us</h1>
//       <div className="aboutText">
//         <p style={customStyle.p1}>
//           {" "}
//           With more than 76 percent of our business is either repeat customers
//           or referral based business; surely we are doing something right!
//         </p>
//         <p>
//           With over 8 years of experience, we specialize in making your home
//           look its best. Our team focuses on remodeling and restoring homes,
//           including bathrooms, kitchens, living rooms, and outdoor spaces. We
//           are dedicated to excellent work and meticulous in every detail. Choose
//           Renoble for your next project and experience the difference our work
//           makes.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default About;

import React, { useEffect, useState } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const aboutPosition = aboutSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (aboutPosition < screenHeight * 0.75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const customStyle = {
    p1: {
      fontSize: "1.4rem",
      color: "#606C38",
      opacity: isVisible ? 1 : 0, // opacity
      transition: "opacity 0.5s ease-in-out", // smooth transition for opacity change
    },
  };

  return (
    <div id="about" className="aboutUs">
      <h1 style={{ fontSize: "3.5rem" }}>About Us</h1>
      <div className="aboutText">
        <p style={customStyle.p1}>
          With more than 76 percent of our business is either repeat customers
          or referral based business; surely we are doing something right!
        </p>
        <p>
          With over 8 years of experience, we specialize in making your home
          look its best. Our team focuses on remodeling and restoring homes,
          including bathrooms, kitchens, living rooms, and outdoor spaces. We
          are dedicated to excellent work and meticulous in every detail. Choose
          Renoble for your next project and experience the difference our work
          makes.
        </p>
      </div>
    </div>
  );
}

export default About;
