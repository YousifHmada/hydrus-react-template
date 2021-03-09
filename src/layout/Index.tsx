import React from "react";
import "./helpers/layout.scss";

function Layout() {
  return (
    <div id="layout">
      <div id="buttons" className="container">
        <div className="container fluid">
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
        <div className="container fluid">
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
        </div>
        <div className="container fluid">
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
        <div className="container fluid">
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
        <div className="container fluid">
          <button type="button" className="primary lg">
            Primary
          </button>
          <button type="button" className="secondary sm">
            Secondary
          </button>
        </div>
      </div>
      <div id="text" className="container">
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
      </div>
      <div id="containers">
        <div className="container">
          <p>
            <code>.container</code>, which sets a max-width at each responsive
            breakpoint
          </p>
        </div>
        <div className="container sm">
          <p>
            <code>.container</code> <code>sm</code>, 100% wide until small
            breakpoint
          </p>
        </div>
        <div className="container md">
          <p>
            <code>.container</code> <code>md</code>, 100% wide until medium
            breakpoint
          </p>
        </div>
        <div className="container lg">
          <p>
            <code>.container</code> <code>lg</code>, 100% wide until large
            breakpoint
          </p>
        </div>
        <div className="container xl">
          <p>
            <code>.container</code> <code>xl</code>, 100% wide until extra large
            breakpoint
          </p>
        </div>
        <div className="container xxl">
          <p>
            <code>.container</code> <code>.xxl</code>, 100% wide until extra
            extra large breakpoint
          </p>
        </div>
        <div className="container fluid">
          <p>
            <code>.container</code> <code>.fluid</code>, which is width: 100% at
            all breakpoints
          </p>
        </div>
      </div>
    </div>
  );
}

export default Layout;
