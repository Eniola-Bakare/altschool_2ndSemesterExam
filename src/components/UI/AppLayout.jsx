import { Outlet } from "react-router-dom";
import RepoPages from "../pages/RepoPages";
import Footer from "./Footer";
import Nav from "./Nav";

function PageDisplayOutlet() {
  return (
    <div className="max-w-[1440px] flex flex-col p-24 mb-12">
      <Nav />
      {/* <HomeProfilePage /> */}
      {/* <RepoPages /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default PageDisplayOutlet;
