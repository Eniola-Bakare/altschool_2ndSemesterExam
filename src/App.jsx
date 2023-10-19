import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import HomeProfilePage from "./components/pages/HomeProfilePage";
import Nav from "./components/UI/Nav";
import RepoPages from "./components/pages/RepoPages";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/eniola-bakare`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <>
      <Nav />
      {/* <HomeProfilePage /> */}
      <RepoPages />
    </>
  );
}

export default App;
