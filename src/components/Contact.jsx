function Contact() {
  const h3Style = {
    textAlign: "center",
  };
  const customTextStyle = {
    paddingTop: "5%",
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-img">
          <img src="./advisory.jpeg" alt="client being guided " />
        </div>
        <div style={customTextStyle} className="contact-text">
          <h3 style={h3Style}>Free consult</h3>
          <div className="contact-p">
            <p>
              Meet with our renovation expert who will assess your needs, review
              your home in person, and provide an itemized proposal for labor
              costs for the entire project. Full transparency, no surprises.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
