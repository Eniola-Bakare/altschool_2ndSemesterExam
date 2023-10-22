import { Link } from "react-router-dom";
import Footer from "./Footer";

function Repo({ repo, index }) {
  const id = repo?.id;

  function dateFormat(dateInput = "2023-03-02T14:07:21Z") {
    const date = new Date(dateInput);

    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      // hour: "numeric",
      // minute: "numeric",
      // second: "numeric",
      // timeZoneName: "short",
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    return formattedDate;
  }
  return (
    // <div className="flex w-[100%] justify-between border-b border-mainBlack pb-28 mb-28  ">
    //   {/* <section className="repoTexts flex flex-col w-[40%] ">
    //     <p className="project-title text-lg text-mainBlack font-semibold mb-5">
    //       {index < 10 ? `0${index}` : index || "01"} /{" "}
    //       {repo?.name?.split("-").join(" ").toUpperCase() || "PROJECT NAME"}
    //     </p>
    //     <p className="project-desc text-lg text-mainBlack font-medium mb-7">
    //       {repo?.description ||
    //         "A short description of what the project is about"}
    //     </p>
    //     <p className="extra-desc font-medium text-mainGray">
    //       <span className="font-semibold text-lg"> Created:</span> <br />
    //       <span className="">{dateFormat(repo?.created_at)}</span>
    //     </p>
    //     <Link to={`${repo.id}`}>
    //       <p className="repo-link font-semibold absolute bottom-24 underline underline-offset-4">
    //         More details &gt;
    //       </p>
    //     </Link>
    //   </section> */}

   

    //   {/* <section className="repo-img w-[50%] ">
    //     <img
    //       src="../src/assets/repoImg.jpg"
    //       alt="snapshots of repository's published site"
    //     />
    //   </section> */}
    // </div>  
    
    <div className="lg:max-w-sm w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow flex-auto ">
        <svg
          className="w-7 h-7 text-gray-500  mb-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
        </svg>
          <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900">
            {index < 10 ? `0${index}` : index || "01"} /{" "}
            {repo?.name?.split("-").join(" ").toUpperCase() || "PROJECT NAME"}{" "}
          </h5>
        <p className="mb-3 font-normal text-gray-500 ">
          {repo?.description ||
            "A short description of what the project is about"}
        </p>
        <p className="extra-desc font-medium text-mainGray">
          <span className="font-bold text-lg"> Created: </span>
          <span className="">{dateFormat(repo?.created_at)}</span>
        </p>

        <Link
          to={`${repo.id}`}
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          More details
          <svg
            className="w-3 h-3 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </Link>
      </div>
  );
}

export default Repo;
