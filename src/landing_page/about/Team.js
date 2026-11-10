import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mb-5 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div className="row p-5 text-muted fs-4">
        <div className="col-6 p-5 text-center">
          <img
            src="media/cartoon.jpeg"
            style={{ borderRadius: "100%", height: "400px" }}
            alt="Kartik Chandore"
          />
          <h4 className="mt-5 text-center">Kartik Chandore</h4>
          <h5 className="text-center">Founder, CEO</h5>
        </div>
        <div className="col-6">
          <p className="mb-4">
            Kartik bootstrapped and founded koshTrade to overcome the hurdles he
            faced during his journey as a trader. Today, koshTrade is on a
            mission to transform the landscape of modern trading for investors
            and retail traders.
          </p>

          <p className="mb-4">
            He actively contributes to market analysis, trading algorithms, and
            building transparent financial tools for the community.
          </p>

          <p className="mb-4">
            Building innovative fintech solutions is his passion.
          </p>

          <p className="mt-2">
            Connect on{" "}
            <a href="/" className="text-decoration-none">
              Homepage
            </a>{" "}
            /{" "}
            <a href="https://www.linkedin.com/in/kartik-chandore/" className="text-decoration-none">
              Linkedin
            </a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
