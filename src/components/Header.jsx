import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  return (
    <nav>
      <h1> Get-a-pet</h1>
      <main>
      <Link to={"/Find"}>Get pets</Link>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#links"}>Links</HashLink>
      </main>
    </nav>
  );
};

export default Header;
