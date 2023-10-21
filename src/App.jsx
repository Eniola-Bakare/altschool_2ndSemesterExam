import { useEffect, useState } from "react";

import HomeProfilePage from "./components/pages/HomeProfilePage";
import Nav from "./components/UI/Nav";
import RepoPages from "./components/pages/RepoPages";
import Footer from "./components/UI/Footer";
import { useUserContext } from "./components/context/userContext";
import { RepoContextProvider } from "./components/context/ReposContext";
import { Outlet, Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";
import RepoDetail from "./components/pages/RepoDetail";
import Error404 from "./components/pages/Error404";

function App() {
  const { data } = useUserContext();
  // console.log(data);

  if (!data) return console.log("cooking");
  return (
    <div className="w-[1440px] max-w-[1440px] flex flex-col p-10 h-[100dvh]">
      <Nav />
      <Routes>
        <Route path="/" element={<HomeProfilePage />} />
        <Route path="repositories" element={<RepoPages />}/>
        <Route path="repositories/:id" element={<RepoDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
