import Footer from "./Footer";

function Repo() {
  return (
    <>
      <div className="flex w-[100%] justify-between border-b border-mainBlack pb-28 mb-28  relative">
        <section className="repoTexts flex flex-col w-[40%] ">
          <p className="project-title text-lg text-mainBlack font-semibold mb-8">
            01 / PROJECT NAME
          </p>
          <p className="project-desc text-lg text-mainBlack font-medium mb-7">
            Goblin concept digital sculpture with human-like skin. Learned a lot
            of quick tips and look development
          </p>
          <p className="extra-desc text-sm font-medium text-mainGray">
            Sculpted in ZBrush, Retopologized UVs done in Maya, Textured in
            Mari, Rendered uing Arnold.
          </p>
          <p className="repo-link font-semibold absolute bottom-24 underline underline-offset-4">
            Go to repo &gt;
          </p>
        </section>

        <section className="repo-img w-[50%] ">
          <img
            src="../src/assets/repoImg.jpg"
            alt="snapshots of repository's published site"
          />
        </section>
      </div>
    </>
  );
}

export default Repo;
