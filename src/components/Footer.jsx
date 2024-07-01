function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <hr />
      <footer className="footer">
        <p>Copyright ⓒ {year}</p>
      </footer>
    </>
  );
}

export default Footer;
