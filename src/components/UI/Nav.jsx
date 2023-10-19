function Nav() {
  return (
    <div className="flex justify-between items-end mb-44">
      <h1 className="logo font-extrabold text-5xl text-mainBlack">e.</h1>

      <ul className="nav-links flex gap-20">
        <li className="navLinks text-2xl text-mainBlack font-semibold">Profile</li>
        <li className="navLinks text-2xl text-mainBlack font-semibold">Repositories</li>
        <li className="navLinks text-2xl text-mainBlack font-semibold">Contact</li>
      </ul>
    </div>
  )
}

export default Nav
