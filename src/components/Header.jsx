function Header() {
  return (
    <div className="top">
      <header id="home">
        <nav>
          <div className="maxNav">
            <a href="#home">
              <img src="./logo11.png" alt="" />
            </a>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li className="contact">
                <a href="tel:3219601201">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
