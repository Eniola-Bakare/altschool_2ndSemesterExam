import { Link } from "react-router-dom";
import Footer from "./Footer";

function Repo({ repo, index }) {
  const id = repo?.id;
  console.log(id);

  function dateFormat(dateInput = "2023-03-02T14:07:21Z") {
    const date = new Date(dateInput);

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    return formattedDate;
  }
  return (
    <div className="flex w-[100%] justify-between border-b border-mainBlack pb-28 mb-28  relative">
      <section className="repoTexts flex flex-col w-[40%] ">
        <p className="project-title text-lg text-mainBlack font-semibold mb-5">
          {index || "01"} /{" "}
          {repo?.name?.split("-").join(" ").toUpperCase() || "PROJECT NAME"}
        </p>
        <p className="project-desc text-lg text-mainBlack font-medium mb-7">
          {repo?.description ||
            "A short description of what the project is about"}
        </p>
        <p className="extra-desc font-medium text-mainGray">
          <span className="font-semibold text-lg"> Created:</span> <br />
          <span className="">{dateFormat(repo?.created_at)}</span>
        </p>
        <p className="repo-link font-semibold absolute bottom-24 underline underline-offset-4">
          More details &gt;
        </p>
      </section>

      <section className="repo-img w-[50%] ">
        <img
          src="../src/assets/repoImg.jpg"
          alt="snapshots of repository's published site"
        />
      </section>
    </div>
  );
}

export default Repo;
