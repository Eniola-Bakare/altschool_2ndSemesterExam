import { useState } from "react";
import Repo from "../UI/Repo";

function RepoPages() {
  const [repos] = useState([3, 4, 2, 5, 7, 8, 9, 23]);
  return (
    <div>
      <section className="intro flex w-[100%] items-end mb-24">
        <p className="w-[40%] text-6xl text-mainBlack font-semibold ">
          Hello, I'm EniolaOluwa B.
        </p>
        <p className="details w-[50%] text-3xl ">
          A final-year Law student at the University of Ibadan, and a student at
          AltSchool Africa.
        </p>
      </section>
      <div className="down-icon text-6xl text-mainGray mb-16">↓</div>

      <section className="repos flex flex-col">
        {repos.map((repo) => (
          <Repo key={repo} />
        ))}
        {/* <Repo /> */}
      </section>
    </div>
  );
}

export default RepoPages;
