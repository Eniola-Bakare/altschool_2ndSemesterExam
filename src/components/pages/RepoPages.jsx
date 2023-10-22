import { useEffect, useState } from "react";
import Repo from "../UI/Repo";
import { useRepoContext } from "../context/ReposContext";

function RepoPages() {
  const { repos } = useRepoContext();
  const [showRepo, setShowRepo] = useState(6);
  const [pageNumber, setPageNumber] = useState(1);
  const [start, setStart] = useState(0);
  const [showEnd, setShowEnd] = useState(6);
  const [displayRepo, setDisplayRepo] = useState([]);

  function handleNextPage() {
    console.log(repos.length);
    console.log(showRepo);
    if (repos.length > showRepo) {
      setStart((prev) => (prev += 6));
      setShowEnd((prev) => (prev += 6));
      setShowRepo((prev) => (prev += 6));
      setPageNumber((prev) => (prev += 1));
    }
  }

  function handlePrevPage() {
    if (showRepo === 6) return;
    setStart((prev) => (prev -= 6));
    setShowEnd((prev) => (prev -= 6));
    setShowRepo((prev) => (prev -= 6));
    setPageNumber((prev) => (prev -= 1));
  }

  useEffect(() => {
    setDisplayRepo(repos.slice(start, showEnd));
  }, [repos, start, showEnd]);
 
  return (
    <div className="mt-36 w-[100%] flex flex-col items-start">
      <section className="intro flex flex-col xl:flex-row items-start xl:items-end mb-36">
        <p className="sm:w-[60%] lg:w-[70%] xl:w-[40%] text-5xl xl:text-6xl text-mainBlack font-semibold mb-5 xl:mb-0 ">
          Hello, I'm EniolaOluwa
        </p>
        <p className="details sm:w-[60%] xl:w-[50%] text-lg xl:text-3xl ">
          A final-year Law student at the University of Ibadan, and a student at
          AltSchool Africa.
        </p>
      </section>
      <div className="down-icon text-6xl text-mainGray mb-36 cursor-pointer">
        ↓
      </div>

      <section className="repos flex flex-wrap w-[100%] gap-6 justify-center mb-10 pt-10">
        {displayRepo?.map((repo, index) => {
          return <Repo key={repo.id} repo={repo} index={(index += 1)} />;
        })}
      </section>

      <div className="pagination flex gap-5 mb-10 self-center items-center">
        <button
          className="bg-mainBlack w-8 h-8 rounded-2xl flex items-center justify-center font-bold text-2xl text-[#ccc] cursor-pointer"
          onClick={() => handlePrevPage()}
        >
          &lt;
        </button>
        <span>{pageNumber}</span>
        <button
          className="bg-mainBlack w-8 h-8 rounded-2xl flex items-center justify-center font-bold text-2xl text-[#ccc] cursor-pointer"
          onClick={() => handleNextPage()}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default RepoPages;
