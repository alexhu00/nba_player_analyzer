import { useState, React, button } from "react";
import hoops from "../assets/hoops.png";
import "./SignupOrLogin.css";

function SignupOrLogin() {
  const [entryType, setEntryType] = useState("Signup");

  //Button response that changes to Login page
  function ChangeToLogin() {
    setEntryType("Login");
  }

  //Button response that changes to Signup page
  function ChangeToSignup() {
    setEntryType("Signup");
  }

  //Function that changes HTML output for the fields depending on Login or Signup state
  function Fields(props) {
    console.log("entryType", props.entryType);
    if (props.entryType == "Signup") {
      return (
        <div className="SignupOrLogin__fields">
          <div className="SignupOrLogin__email">Email</div>
          <div className="SignupOrLogin__setpass">Set Password</div>
          <div className="SignupOrLogin__confirmpass">Confirm Password</div>
        </div>
      );
    } else {
      return (
        <div className="SignupOrLogin__fields">
          <div className="SignupOrLogin__email">Email</div>
          <div className="SignupOrLogin__setpass">Password</div>
        </div>
      );
    }
  }

  return (
    <div className="SignupOrLogin">
      <img src={hoops} className="SignupOrLogin__logo" />
      <div className="SignupOrLogin__centermodal">
        <div className="SignupOrLogin__header">Welcome to the team!</div>
        <div className="SignupOrLogin__subtitle">
          Enter your credentials to get access to your account.
        </div>
        <Fields entryType={entryType}></Fields>
        <button
          className="SignupOrLogin__signupbtn"
          onClick={() => ChangeToSignup()}
        >
          Sign up
        </button>
        <div>
          or{" "}
          <button
            className="SignupOrLogin__loginbtn"
            onClick={() => ChangeToLogin()}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupOrLogin;
