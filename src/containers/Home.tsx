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
          className="m-t-1 m-b-2"
          type="text"
          placeholder="Email or Phone"
        />
        <input className="m-b-2" type="password" placeholder="Password" />
        <div>
          <div>
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
          <div>
            <button type="submit" className="primary">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </SigningCard>
  );
}

export default Home;
