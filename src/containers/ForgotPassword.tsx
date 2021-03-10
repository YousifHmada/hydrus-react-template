import React from "react";
import { Link } from "react-router-dom";
import SigningCard from "../components/SiginingCard";

function ForgotPassword() {
  return (
    <SigningCard>
      <p className="m-t-3 h4-size">Forgot password</p>
      <form>
        <input
          className="m-t-1 m-b-2"
          type="text"
          placeholder="Email or Phone"
        />
        <div>
          <div>
            <div className="m-b-2">
              <Link className="primary" to="/create-account">
                Create an account
              </Link>
            </div>
          </div>
          <div>
            <button type="submit" className="primary">
              Send
            </button>
          </div>
        </div>
      </form>
    </SigningCard>
  );
}

export default ForgotPassword;
