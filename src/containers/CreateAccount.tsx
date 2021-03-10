import React from "react";
import { Link } from "react-router-dom";
import SigningCard from "../components/SiginingCard";

function CreateAccount() {
  return (
    <SigningCard>
      <p className="m-t-3 h4-size">Create your account</p>
      <form>
        <input
          className="m-t-1 m-b-2"
          type="text"
          placeholder="Email or Phone"
        />
        <input className="m-b-2" type="password" placeholder="Password" />
        <input
          className="m-b-2"
          type="password"
          placeholder="Confirm Password"
        />
        <div>
          <div className="m-b-2">
            <div>
              <Link className="primary" to="/">
                Have an account?
              </Link>
            </div>
          </div>
          <div>
            <button type="submit" className="primary">
              Create account
            </button>
          </div>
        </div>
      </form>
    </SigningCard>
  );
}

export default CreateAccount;
