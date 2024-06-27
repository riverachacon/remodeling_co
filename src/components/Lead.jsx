function Lead() {
  const customStyle = {
    lead: {
      display: "flex",
      flexDirection: "row-reverse",
      width: "",
    },
  };
  return (
    <div style={customStyle.lead} className="lead">
      <div className="lead-text">
        <p>
          Renovate in Orlando area with the experts. Specializing in kitchens,
          bathrooms and full home remodels.
        </p>
      </div>
    </div>
  );
}

export default Lead;
