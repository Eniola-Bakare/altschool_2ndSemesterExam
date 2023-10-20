import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function RepoDetail() {
  const repository = useParams();
  const repositoryId = repository?.id;
  console.log(repositoryId);

  const [repoDetails, setRepoDetails] = useState({})

  useEffect(() => {
    fetch(`https://api.github.com/repositories/${repositoryId}`).then(
      (response) => response.json()
    ).then(data => setRepoDetails(data));
  }, [repositoryId]);

  console.log(repoDetails)
  return (
    <div className=" bg-pink bg-red-500">
      <p>Reposoooo</p>
    </div>
  );
}

export default RepoDetail;
