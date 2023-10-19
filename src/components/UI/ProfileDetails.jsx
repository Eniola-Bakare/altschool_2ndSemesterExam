import Footer from "./Footer";

function ProfileDetails() {
  return (
    <div>
      <section className="hero">
        <div className="hero-text">
          <h1>Hi I'm EniolaOluwa Bakare, Front-end Engineer</h1>
          <p className="hero-text">
            My work is mainly focused on third-dimension modeling, texturing and
            rendering. I like exploring the creatures with a touch of dark
            surrealism for characters and production. Now I’m an interactive
            media design student in Istanbul ⏤ currently freelancing and seeking
            internship opportunities.
          </p>
        </div>

        <div className="hero-img">
          <img src="./assets/heroImg.JPG" alt="user's profile picture" />
        </div>
      </section>

      <section className="skills">
        <div className="main-software">
          <p className="main-SW">Main Software</p>
          <div className="desc">
            <p className="main-SW-desc">
              Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold
              Renderer, Blender, Forger
            </p>

            <div className="extra-desc">Adobe CC, Figma, Ableton</div>
          </div>
        </div>
        <div className="main-skills">
          <p className="main-SW">Main Software</p>
          <div className="desc">
            <p className="main-SK-desc">
              Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, Illustration, ound Design.
            </p>

            <div className="extra-desc">Adobe CC, Figma, Ableton</div>

            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfileDetails;
