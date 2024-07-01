function Contact() {
  const customStyle = {
    div: { paddingTop: "5%" },
    h3: {
      textAlign: "center",
    },
    phoneIcon: {
      marginLeft: "1.15rem",
      marginRight: "1.15rem",
      width: "1.5rem",
    },
    phoneNumber: {
      a: "",
    },
  };

  return (
    <>
      <div id="contact" className="contact-container">
        <div className="contact-img">
          <img src="./advisory.jpeg" alt="client being guided " />
        </div>
        <div style={customStyle.div} className="contact-text">
          <h3 style={customStyle.h3}>Free consult</h3>
          <div className="contact-p">
            <p>
              Meet with our renovation expert who will assess your needs, review
              your home in person, and provide an itemized proposal for labor
              costs in the entire project. Full transparency, no surprises.
            </p>
          </div>
        </div>
        <div className="vl"></div>
        <div className="phoneNumber">
          <a style={{ color: "#bc6c25" }} href="tel:3219601201">
            <img
              style={customStyle.phoneIcon}
              src="./phone.svg.png"
              alt="phone icon"
            />
            +1 321-960-1201
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
