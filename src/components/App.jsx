import Gallery from "./Gallery";
import Header from "./Header";
import { beforeImages, afterImages } from "../images";

function App() {
  return (
    <>
      <Header />

      <div className="gallery">
        <div className="galleryTop">
          <h1 id="gallery">Gallery</h1>
          <p>
            Take a look at some of the remodeling projects we have completed.
            Our team is dedicated to delivering quality work and transforming
            spaces to meet our clients' needs and expectations.
          </p>
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
          title={"Outside"}
          beforeImages={beforeImages}
          afterImages={afterImages.outside}
        />
        <Gallery
          title={"Garage"}
          beforeImages={beforeImages}
          afterImages={afterImages.garage}
        />
      </div>
    </>
  );
}

export default App;
