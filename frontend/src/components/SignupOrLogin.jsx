import { useState, React, useEffect } from "react";
import axios from 'axios';
import hoops from "../assets/hoops.png";
import "./SignupOrLogin.css";

function SignupOrLogin() {
  const [entryType, setEntryType] = useState("Signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Button response that changes to Login page
  function ChangeToLogin() {
    setEntryType("Login");
    //Clear inputs
    setEmail("");
    setPassword("");
  }

  //Button response that changes to Signup page
  function ChangeToSignup() {
    setEntryType("Signup");
    //Clear inputs
    setEmail("");
    setPassword("");
  }

  function checkPassword(val) {
    console.log("event", val);
    if (val == password) {
      console.log("Yes!");
    } else {
      console.log("No!");
    }
  }

  function signUpUser(event){
    console.log('SIGN UP!');

    const registered = {
      email: email,
      password: password,
      groups: []
    }

    axios.post("http://localhost:4000/app/signup", registered)
      .then(res => {
        console.log(res.data)
        window.location.href = "/Players"
      })
  }

  function logInUser(event){
    console.log("LOG IN!")
    // fetch("/users").then()
  }

  return (
    <div className="SignupOrLogin">
      <img src={hoops} className="SignupOrLogin__logo" />
      <div className="SignupOrLogin__centermodal">
        <div className="SignupOrLogin__header">Welcome to the team!</div>
        <div className="SignupOrLogin__subtitle">
          Enter your credentials to get access to your account.
        </div>
        <form>
          {entryType === "Signup" ? (
            <div className="SignupOrLogin__fields">
              <input
                type="text"
                className="SignupOrLogin__email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <input
                type="text"
                className="SignupOrLogin__setpass"
                placeholder="Set password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
              />
              <input
                type="text"
                className="SignupOrLogin__setpass"
                placeholder="Confirm password"
                onChange={(event) => {
                  checkPassword(event.target.value);
                }}
                required
              />
            </div>
          ) : (
            <div className="SignupOrLogin__fields">
              <input
                type="text"
                className="SignupOrLogin__email"
                placeholder="Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required
              />
              <input
                type="text"
                className="SignupOrLogin__setpass"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
              />
            </div>
          )}
        </form>
        {entryType === "Signup" ? (
          <div className="SignupOrLogin__btns">
            <button
              className="SignupOrLogin__signupbtn"
              onClick={() => signUpUser(Event)}
            >
              Sign up
            </button>
            <div>
              or {" "}
              <button
                className="SignupOrLogin__loginbtn"
                onClick={() => ChangeToLogin()}
              >
                Log in
              </button>
            </div>
          </div>
        ) : (
            <div className="SignupOrLogin__btns">
            <button
              className="SignupOrLogin__signupbtn"
              onClick={() => logInUser(Event)}
            >
              Log in
            </button>
            <div>
              or {" "}
              <button
                className="SignupOrLogin__loginbtn"
                onClick={() => ChangeToSignup()}
              >
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignupOrLogin;
