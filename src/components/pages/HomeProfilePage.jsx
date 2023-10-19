import Footer from "../UI/Footer";

function HomeProfilePage() {
  return (
    <div>
      <div>
        <section className="hero flex mb-16 justify-between items-end">
          <div className="hero-text w-[50%]">
            <p className="text-6xl font-extrabold mb-16">
              Hi I'm EniolaOluwa Bakare, Front-end Engineer
            </p>
            <p className="hero-text text-mainGray text-3xl mb-10 ">
              My work is mainly focused on third-dimension modeling, texturing
              and rendering. I like exploring the creatures with a touch of dark
              surrealism for characters and production.
            </p>
            <span className="hero-text text-mainGray text-3xl ">
              Now I’m an interactive media design student in Istanbul ⏤
              currently freelancing and seeking internship opportunities.
            </span>
          </div>

          <div className="hero-img w-[43%]">
            <img src="../src/assets\heroImg.JPG" alt="user's profile picture" />
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
                Organic and Polygonal Modeling, UV Layout, Texturing,
                Retopology, Illustration, ound Design.
              </p>

              <div className="extra-desc">Adobe CC, Figma, Ableton</div>

              <Footer />
            </div>
          </div>
        </section>
      </div>{" "}
    </div>
  );
}

export default HomeProfilePage;
