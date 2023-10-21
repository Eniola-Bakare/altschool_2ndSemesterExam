import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function RepoDetail() {
  const repository = useParams();
  const navigate = useNavigate();
  const repositoryId = repository?.id;
  console.log(repositoryId);

  const [repoDetails, setRepoDetails] = useState({});
  const [repoLanguages, setRepoLanguages] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/repositories/${repositoryId}`)
      .then((response) => response.json())
      .then((data) => setRepoDetails(data));
  }, [repositoryId]);

  useEffect(() => {
    fetch(`${repoDetails.languages_url}`)
      .then((response) => response.json())
      .then((data) => setRepoLanguages(Object?.keys(data)));
  }, [repoDetails]);

  function dateFormat(dateInput = "2023-03-02T14:07:21Z") {
    const date = new Date(dateInput);

    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZoneName: "short",
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    return formattedDate;
  }
  console.log(repoDetails);
  console.log(repoLanguages);
  // console.log(repoLanguages.map(lang=>console.log(lang)));
  return (
    // <div className=" bg-pink bg-red-500">
    //   <p>{repoDetails?.name?.split("-")?.join(" ").toUpperCase()}</p>
    //   <p>{repoDetails?.created_at}</p>
    //   <p>{repoDetails?.html_url}</p>
    //   {Array.isArray(repoLanguages) &&
    //     repoLanguages.map((eachLang) => <p key={eachLang}>{eachLang}</p>)}
    //   <button onClick={() => navigate(-1)}>&lt; Back</button>
    // </div>

    <div className="flex w-[100%] justify-between border-b border-mainBlack pb-28 mb-28  relative">
      <section className="repoTexts flex flex-col w-[40%]">
        <p className="project-title text-lg text-mainBlack font-bold mb-4">
          {/* {index || "01"} /{" "} */}
          {repoDetails?.name?.split("-")?.join(" ").toUpperCase()}
        </p>
        <p className="project-desc text-lg text-mainBlack font-medium mb-7">
          {repoDetails?.description ||
            "A short description of what the project is about"}
        </p>
        <div className="extra-desc-container flex flex-col gap-2 mt-5">
          <p className="extra-desc text-mainGray">
            <span className="font-semibold text-lg"> Created: </span>
            <span className="pl-2 font-medium">
              {dateFormat(repoDetails?.created_at)}
            </span>
          </p>
          <p className="extra-desc text-mainGray">
            <span className="font-semibold text-lg"> GitHub URL: </span>
            <span className="pl-2 font-medium">{repoDetails?.html_url}</span>
          </p>
          <p className="languages text-mainGray">
            <span className="font-semibold text-lg">Languages: </span>
            {Array.isArray(repoLanguages) &&
              repoLanguages.map((eachLang) => (
                <span className="pl-2 font-medium" key={eachLang}>
                  • {eachLang}
                </span>
              ))}
          </p>
          <button onClick={() => navigate(-1)} className="flex mt-9 bg-secondary w-fit text-white text-lg font-semibold px-6 py-2 rounded-3xl">
            &lt; Back
          </button>
        </div>

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

export default RepoDetail;
