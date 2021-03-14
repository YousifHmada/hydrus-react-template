import React from "react";
import { IReactParentPropTypes } from "../redux/modules/helpers/types";
import "./AuthCard.scss";

interface AuthCardPropTypes extends IReactParentPropTypes {}

function AuthCard({ children }: AuthCardPropTypes) {
  return (
    <div className="card auth-card p-t-4 p-b-3 p-l-3-sm p-r-3-sm p-l-4-lg p-r-4-lg">
      <span>
        <img
          src="https://www.kidsloop.net/wp-content/uploads/2020/09/Asset-1.svg"
          alt="kidsloop logo"
        />
      </span>
      {children}
    </div>
  );
}

export default AuthCard;
