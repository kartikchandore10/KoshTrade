import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid text-white my-5"
      id="supportHero"
      style={{ backgroundColor: "#387ed1" }}
    >
      <div className="container py-5">
        {/* Top Bar */}
        <div
          className="d-flex justify-content-between align-items-center mb-5"
          id="supportWrapper"
        >
          <h4 className="fw-normal mb-0">Support Portal</h4>
          <a href="#" className="text-white fs-5 text-decoration-underline">
            Track Ticket
          </a>
        </div>

        {/* Hero Main Content */}
        <div className="row py-4">
          {/* Left Column: Search & Links */}
          <div className="col-md-7 pe-md-5">
            <h2 className="fs-3 fw-normal mb-4">
              Search for an answer or browse help topics to create a ticket
            </h2>

            <input
              type="text"
              className="form-control form-control-lg border-0 rounded-1 py-3 px-4 mb-4"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
            />

            <div className="d-flex flex-wrap gap-3 align-items-center fs-6">
              <a href="#" className="text-white text-decoration-underline">
                Track account opening
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Track segment activation
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Intraday margins
              </a>
              <a href="#" className="text-white text-decoration-underline">
                KoshTrade user manual
              </a>
            </div>
          </div>

          {/* Right Column: Featured Section */}
          <div className="col-md-5 ps-md-4 mt-4 mt-md-0">
            <h3 className="fs-3 fw-normal mb-3">Featured</h3>
            <ol className="lh-lg ps-3 fs-6">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-underline">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-underline">
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
