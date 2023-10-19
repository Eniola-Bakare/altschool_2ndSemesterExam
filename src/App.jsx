import { useEffect, useState } from "react";

import HomeProfilePage from "./components/pages/HomeProfilePage";
import Nav from "./components/UI/Nav";
import RepoPages from "./components/pages/RepoPages";
import Footer from "./components/UI/Footer";
import { useUserContext } from "./components/context/userContext";

function App() {
  const { data } = useUserContext();
  console.log(data);

  if (!data) return console.log('cooking');
  return (
    <div className="flex flex-col justify-center m-24 mb-12">
      <Nav />
      <HomeProfilePage />
      {/* <RepoPages /> */}

      <Footer />
    </div>
  );
}

export default App;
