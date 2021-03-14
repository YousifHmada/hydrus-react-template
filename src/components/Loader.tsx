import React from "react";
import "./Loader.scss";

function Loader() {
  return (
    <span className="lds-ellipsis">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </span>
  );
}

export default Loader;
