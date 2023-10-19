import { useEffect, useState } from "react";

import HomeProfilePage from "./components/pages/HomeProfilePage";
import Nav from "./components/UI/Nav";
import RepoPages from "./components/pages/RepoPages";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/eniola-bakare`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <div className="flex flex-col justify-center m-24">
      <Nav />
      <HomeProfilePage />
      <RepoPages />

    </div>
  );
}

export default App;
