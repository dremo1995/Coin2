import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { logout } from "../services";

const Links = () => {
  const navigate = useNavigate();
  const { setIsAuth, isAuth } = useContext(AuthContext);
  const logoutHandler = async () => {
    const res = await logout();
    console.log(res);
    setIsAuth(false);
    navigate("/");
  };

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
