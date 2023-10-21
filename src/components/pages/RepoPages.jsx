import { useEffect, useState } from "react";
import Repo from "../UI/Repo";
import { useRepoContext } from "../context/ReposContext";
import { Link } from "react-router-dom";

function RepoPages() {
  const { repos } = useRepoContext();
  console.log(repos);
  const [reposData, setReposData] = useState(["placeholder"]);
  useEffect(() => {
    setReposData(repos);
  }, [repos]);
  return (
    <div className="mt-36">
      <section className="intro flex w-[100%] items-end mb-36">
        <p className="w-[40%] text-6xl text-mainBlack font-semibold ">
          Hello, I'm EniolaOluwa B.
        </p>
        <p className="details w-[50%] text-3xl ">
          A final-year Law student at the University of Ibadan, and a student at
          AltSchool Africa.
        </p>
      </section>
      <div className="down-icon text-6xl text-mainGray mb-16 cursor-pointer">↓</div>

      <section className="repos flex flex-col">
        {reposData?.map((repo, index) => {
          return (
              <Repo key={repo.id}  repo={repo} index={(index += 1)} />
          );
        })}
      </section>
    </div>
  );
}

export default RepoPages;
