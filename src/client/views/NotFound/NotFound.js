import React from 'react';

const NotFound = () => (
  <div
    className="w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-light"
  >
    <section
      className="container bg-white"
    >
      <div className="p-5">
        <h1 className="display-1 text-error">404</h1>
        <h2 className="display-3">Not found.</h2>
        <p className="lead">We couldn&apos;t find the page you were looking for.</p>
        <a className="btn btn-primary" href="/" role="button">Go Home</a>
      </div>
    </section>
  </div>
);

export default NotFound;
