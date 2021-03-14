import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import "./Footer.scss";

function Footer() {
  const [darkModeEnabled, setDarkMode] = useState<boolean>(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  function toggleTheme() {
    setDarkMode(!darkModeEnabled);
    document.documentElement.setAttribute(
      "dark",
      darkModeEnabled ? "false" : "true"
    );
  }
  return (
    <div className="card transparent footer m-t--1">
      <button type="button" onClick={toggleTheme} className="link toggle-theme">
        <FiSettings size="20px" />
      </button>
      <select data-placeholder="Select Language" defaultValue="default">
        <option value="default" disabled>
          Select Language
        </option>
        <option value="English">English</option>
        <option value="Korean">Korean</option>
        <option value="Arabic">Arabic</option>
      </select>
      <a className="m-l-auto" href="https://www.kidsloop.net/contact/">
        Help
      </a>
      <a href="https://www.kidsloop.net/policies/privacy-notice/">Privacy</a>
      <a href="https://www.kidsloop.net/policies/terms/">Terms</a>
    </div>
  );
}

export default Footer;
