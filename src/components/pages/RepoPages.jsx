import { useState } from "react";
import Repo from "../UI/Repo";

function RepoPages() {
  const [repos] = useState([3, 4, 5, 3, 5]);
  return (
    <div>
      <section className="intro">
        <h1>Hello, I am EniolaOluwa Bakare</h1>
        <p className="details">
          A final-year Law student at the University of Ibadan, and a student at
          AltSchool Africa.
        </p>
      </section>
      <div className="down-icon">&downarr;</div>

      {repos.map((repo) => (
        <Repo key={repo} />
      ))}
    </div>
  );
}

export default RepoPages;
