function Gallery(props) {
  const afterImages = props.afterImages;

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
              onClick={(e) => {
                e.currentTarget.src = `/images/${props.beforeImages.kitchen[1]}`;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
