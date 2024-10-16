// import React from "react";

import { NavLink } from "react-router-dom";

// import { useState } from "react";

import "./BottomNav.css";
import { useState } from "react";

const BottomNav = () => {
  const { activeLink, setActiveLink } = useState(null);
  function andleActiveLink(link) {
    setActiveLink(link)
  }

  return (
    <section className="bottom-nav-bar">
      <NavLink
        onClick={() => andleActiveLink(`Link-1`)}
        className={`bold ${activeLink === `Link-1` ? `active` : ``}`}
        to={`/`}
      >
        Home
      </NavLink>
      <NavLink
        onClick={() => andleActiveLink(`Link-2`)}
        className={`bold ${activeLink === `Link-2` ? `active` : ``}`}
        to="/stared"
      >
        Starred Recipes
      </NavLink>
      <NavLink
        onClick={() => andleActiveLink(`Link-3`)}
        className={`bold ${activeLink === `Link-3` ? `active` : ``}`}
        to="/shopping-list"
      >
        Shopping List
      </NavLink>
      <NavLink
        onClick={() => andleActiveNavLink(`Link-4`)}
        className={`bold ${activeLink === `Link-4` ? `active` : ``}`}
        to="/profile"
      >
        Profile
      </NavLink>
    </section>
  );
};

export default BottomNav;
