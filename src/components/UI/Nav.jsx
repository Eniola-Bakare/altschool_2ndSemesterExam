import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="flex justify-between items-end mb-44 ">
      <h1 className="logo font-black text-5xl text-mainBlack cursor-pointer">
        <Link to="/"> e.dev</Link>
      </h1>

      <ul className="nav-links flex gap-20">
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#919191cc" } : { color: "#000" }
          }
          to="/"
          className="navLinks text-2xl text-mainBlack font-semibold cursor-pointer"
        >
          Profile
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#919191cc" } : { color: "#000" }
          }
          to="/repositories"
          className="navLinks text-2xl text-mainBlack font-semibold cursor-pointer"
        >
          Repositories
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#919191cc" } : { color: "#000" }
          }
          to="/contact"
          className="navLinks text-2xl text-mainBlack font-semibold cursor-pointer"
        >
          Contact
        </NavLink>
      </ul>
    </div>
  );
}

export default Nav;
