import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import useInput from "../hooks/useInput";
import { login } from "../services";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    value: username,
    hasError: usernameInvalid,
    valid: usernameValid,
    changeHandler: usernameChangeHandler,
    blurHandler: usernameBlurHandler,
    reset: usernameReset,
  } = useInput((username) => username.trim().length !== "");

  const {
    value: password,
    hasError: passwordInvalid,
    valid: passwordValid,
    changeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput((password) => password.trim().length > 5);

  const formValid = usernameValid && passwordValid;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formValid) return alert("Invalid Credentials");
    login(username, password, setIsAuth);
    if (!localStorage.userData) return;
    navigate("/");
  };

  return (
    <div className="justify-center min-h-screen items-center gradient-bg-transactions flex flex-col">
      <h1 className="text-white py-12 text-3xl">Login</h1>
      <form onSubmit={submitHandler}>
        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
          <label htmlFor="username ">Username</label>
          <input
            type="username"
            id="username"
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
            value={username}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
          />
          {usernameInvalid && (
            <p className="text-red-900">Please enter valid email</p>
          )}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={password}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
          />
          {passwordInvalid && (
            <p className="text-red-900">Please enter valid password</p>
          )}
          <button
            type="submit"
            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
