import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import "./helpers/Widgets.scss";

function Layout() {
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
    <div id="widgets">
      <button type="button" onClick={toggleTheme} className="link toggle-theme">
        <FiSettings size="50px" />
      </button>
      <section id="buttons" className="container transparent">
        <div>
          <button type="button">Default</button>
          <button type="button" className="primary">
            Primary
          </button>
          <button type="button" className="secondary">
            Secondary
          </button>
          <button type="button" className="success">
            Success
          </button>
          <button type="button" className="danger">
            Danger
          </button>
          <button type="button" className="warning">
            Warning
          </button>
          <button type="button" className="link">
            Link
          </button>
        </div>
        <div>
          <button type="button" className="outline">
            Default
          </button>
          <button type="button" className="primary outline">
            Primary
          </button>
          <button type="button" className="secondary outline">
            Secondary
          </button>
          <button type="button" className="success outline">
            Success
          </button>
          <button type="button" className="danger outline">
            Danger
          </button>
          <button type="button" className="warning outline">
            Warning
          </button>
          <a href="https://google.com" className="link">
            Link
          </a>
        </div>
        <div>
          <button type="button" className="active">
            Default
          </button>
          <button type="button" className="primary active">
            Primary
          </button>
          <button type="button" className="secondary active">
            Secondary
          </button>
          <button type="button" className="success active">
            Success
          </button>
          <button type="button" className="danger active">
            Danger
          </button>
          <button type="button" className="warning active">
            Warning
          </button>
          <button type="button" className="link active">
            Link
          </button>
        </div>
        <div>
          <button type="button" disabled>
            Default
          </button>
          <button type="button" className="primary" disabled>
            Primary
          </button>
          <button type="button" className="secondary" disabled>
            Secondary
          </button>
          <button type="button" className="success" disabled>
            Success
          </button>
          <button type="button" className="danger" disabled>
            Danger
          </button>
          <button type="button" className="warning" disabled>
            Warning
          </button>
          <button type="button" className="link" disabled>
            Link
          </button>
        </div>
        <div>
          <button type="button" className="primary lg">
            Primary
          </button>
          <button type="button" className="secondary sm">
            Secondary
          </button>
        </div>
      </section>

      <section id="text" className="container transparent no-border">
        <h1>A Visual Type Scale</h1>
        <p>
          <strong>Lorem Ipsum</strong> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <h2>A Visual Type Scale</h2>
        <p>
          <strong>Lorem Ipsum</strong> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <h3>A Visual Type Scale</h3>
        <p>
          <strong>Lorem Ipsum</strong> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <h4>A Visual Type Scale</h4>
        <p>
          <strong>Lorem Ipsum</strong> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <h5>A Visual Type Scale</h5>
        <p>
          <strong>Lorem Ipsum</strong> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p>A Visual Type Scale</p>
        <small>A Visual Type Scale</small>
      </section>
      <section id="inputs" className="card m-t-5">
        <input type="text" placeholder="Email or Phone" />
        <input type="text" placeholder="Disabled..." disabled />
        <input type="text" className="valid" placeholder="Valid..." />
        <input type="text" className="invalid" placeholder="Invalid..." />
        <input type="text" className="block" placeholder="Block..." />
        <input type="text" className="lg" placeholder="Large..." required />
        <input type="text" className="sm" placeholder="Small..." required />
        <div className="m-t-2">
          <a href="https://www.google.com/">Forgot Password?</a>
        </div>
        <div>
          <a href="https://www.google.com/">Create an account</a>
        </div>
      </section>
      <section className="card transparent m-t--1 m-b-5">
        <a href="https://www.google.com">Help</a>
        <a href="https://www.google.com">About</a>
        <a href="https://www.google.com">Privacy</a>
      </section>

      <section id="containers" className="m-b-2">
        <div className="container">
          <span>
            <code>.container</code>, which sets a max-width at each responsive
            breakpoint
          </span>
        </div>
        <div className="container sm">
          <span>
            <code>.container</code> <code>sm</code>, 100% wide until small
            breakpoint
          </span>
        </div>
        <div className="container md">
          <span>
            <code>.container</code> <code>md</code>, 100% wide until medium
            breakpoint
          </span>
        </div>
        <div className="container lg">
          <span>
            <code>.container</code> <code>lg</code>, 100% wide until large
            breakpoint
          </span>
        </div>
        <div className="container xl">
          <span>
            <code>.container</code> <code>xl</code>, 100% wide until extra large
            breakpoint
          </span>
        </div>
        <div className="container xxl">
          <span>
            <code>.container</code> <code>.xxl</code>, 100% wide until extra
            extra large breakpoint
          </span>
        </div>
        <div className="container fluid">
          <span>
            <code>.container</code> <code>.fluid</code>, which is width: 100% at
            all breakpoints
          </span>
        </div>
      </section>
    </div>
  );
}

export default Layout;
