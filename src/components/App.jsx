import Gallery from "./Gallery";
import Header from "./Header";
import { beforeImages, afterImages } from "../images";
import About from "./About";
import Contact from "./Contact";
import Lead from "./Lead";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />

      <Lead />

      <div className="gallery">
        <div className="galleryTop">
          <h1 style={{ fontSize: "3.5rem" }} id="gallery">
            Gallery
          </h1>
          <p>Take a look at some of the projects we have completed.</p>
        </div>

        <Gallery
          title={"Kitchen"}
          beforeImages={beforeImages}
          afterImages={afterImages.kitchen}
          className={"kitchen"}
        />
        <Gallery
          title={"Living Room"}
          beforeImages={beforeImages}
          afterImages={afterImages.livingRoom}
          className={"livingRoom"}
        />
        <Gallery
          title={"Bathroom"}
          beforeImages={beforeImages}
          afterImages={afterImages.bathroom}
          className={"bathroom"}
        />
        <Gallery
          title={"Outdoor"}
          beforeImages={beforeImages}
          afterImages={afterImages.outside}
          className={"outside"}
        />
        <Gallery
          title={"Garage"}
          beforeImages={beforeImages}
          afterImages={afterImages.garage}
        />
      </div>

      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
