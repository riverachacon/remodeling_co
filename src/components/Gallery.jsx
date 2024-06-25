function Gallery(props) {
  const afterImages = props.afterImages;
  const group = props.className;

  return (
    <div className="imgContainer0">
      <h3>{props.title}</h3>

      <div className="imgContainer">
        {afterImages.map((image, index) => (
          <div key={index}>
            <img
              className={props.className}
              src={`/images/${image}`}
              alt={`work ${index + 1}`}
              onMouseOver={(e) => {
                e.currentTarget.src = `/images/${
                  props.beforeImages[group][
                    Math.floor(Math.random() * props.beforeImages[group].length) // using bracket notation to acces group const
                  ]
                }`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.src = `/images/${image}`;
                setTimeout(() => {
                  e.currentTarget.style.opacity = 1;
                }, 500); // 500ms should match the transition duration
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
