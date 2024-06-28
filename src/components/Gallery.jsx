import React, { useEffect, useState } from "react";

function Gallery(props) {
  const afterImages = props.afterImages;
  const group = props.className;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // scroll event listener to update visibility based on gallery position
    function handleScroll() {
      const gallerySection = document.querySelector(`.${group}`);
      if (!gallerySection) return; // if gallerySection doesnt exist stop code

      const galleryPosition = gallerySection.getBoundingClientRect().top; // returns the size and position of an element relative to the viewport, in here gets the top position of the gallerySection relative to the viewport
      const screenHeight = window.innerHeight; // height where the user has the browser

      if (galleryPosition < screenHeight * 0.75) {
        // if gallery is 75% down the screen

        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [group]);

  return (
    <div className={`imgContainer0 ${group}`}>
      <h3>{props.title}</h3>

      <div className="imgContainer">
        {afterImages.map((image, index) => (
          <div className={`img${index}`} key={index}>
            <img
              className={props.className}
              src={`/images/${image}`}
              alt={`work ${index + 1}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.5s ease-in-out", // applying opacity when scrolling
              }}
              onMouseOver={(e) => {
                e.currentTarget.src = `/images/${
                  props.beforeImages[group][
                    Math.floor(Math.random() * props.beforeImages[group].length) // using bracket notation to access group const
                  ]
                }`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.src = `/images/${image}`;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
