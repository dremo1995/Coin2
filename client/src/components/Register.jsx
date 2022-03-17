import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { register } from "../services";

const Register = () => {
  const passwordRef = useRef();
  const navigate = useNavigate();

  const {
    value: username,
    hasError: usernameInvalid,
    valid: usernameValid,
    changeHandler: usernameHandler,
    blurHandler: usernameBlurHandler,
    reset: usernameReset,
  } = useInput(
    (username) => username.trim().length != "" && username.length >= 5
  );

  const {
    value: password,
    hasError: passwordInvalid,
    valid: passwordValid,
    changeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput((password) => password.trim().length > 5);

  const {
    value: password2,
    hasError: password2Invalid,
    valid: password2Valid,
    changeHandler: password2ChangeHandler,
    blurHandler: password2BlurHandler,
    reset: password2Reset,
  } = useInput((p) => p === passwordRef?.current?.value);

  const formValid = usernameValid & passwordValid && password2Valid;

  const submitHandler = async (e) => {
    e.preventDefault();
    // if (!formValid) {
    //   return alert("Missing information");
    // }
    register(username, password);
    navigate("/login");
  };

  return (
    <div className="justify-center min-h-screen items-center gradient-bg-transactions flex flex-col">
      <h1 className="text-white py-12 text-3xl">Registration Form</h1>
      <form onSubmit={submitHandler} noValidate>
        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={usernameHandler}
            id="username"
            value={username}
            autoComplete="off"
            onBlur={usernameBlurHandler}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
          />
          {usernameInvalid && <p className="text-red-900">Invalid username</p>}
          <label htmlFor="passwrod">Password</label>
          <input
            type="password"
            name="password"
            onChange={passwordChangeHandler}
            id="password"
            value={password}
            autoComplete="off"
            onBlur={passwordBlurHandler}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
          />
          {passwordInvalid && <p className="text-red-900">Invalid password</p>}
          <label htmlFor="username">Repeat Password</label>
          <input
            type="password"
            name="password2"
            id="password2"
            onChange={password2ChangeHandler}
            value={password2}
            autoComplete="off"
            onBlur={password2BlurHandler}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
          />
          {password2Invalid && (
            <p className="text-red-900">Invalid Repeat password</p>
          )}

          <button
            type="submit"
            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
