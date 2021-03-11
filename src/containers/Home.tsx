import React from "react";
import { Link } from "react-router-dom";
import SigningCard from "../components/SiginingCard";
import "./Home.scss";

function Home() {
  return (
    <SigningCard>
      <p className="m-t-3 h4-size">Sign in</p>
      <form>
        <input
          className="block m-t-1 m-b-2"
          type="text"
          placeholder="Email or Phone"
        />
        <input className="block m-b-2" type="password" placeholder="Password" />
        <div className="container transparent no-border no-padding fluid">
          <div className="f-50">
            <div className="m-b-2">
              <Link className="primary" to="/forgot-password">
                Forgot Password?
              </Link>
            </div>
            <div>
              <Link className="primary" to="/create-account">
                Create an account
              </Link>
            </div>
          </div>
          <div className="f-50">
            <button type="submit" className="primary float-right">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </SigningCard>
  );
}

export default Home;
