import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  let content = (
    <>
      <li className="mx-4 cursor-pointer">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Welcome
        </NavLink>
      </li>
      <li className="mx-4 cursor-pointer">
        <NavLink
          to="/market"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Market
        </NavLink>
      </li>
      <li className="mx-4 cursor-pointer">
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Services
        </NavLink>
      </li>
    </>
  );

  return <>{content}</>;
};

export default Links;
