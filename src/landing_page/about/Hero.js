import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mb-5 mt-5">
        <h1 className="fs-3 text-center">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div className="row p-5 mt-5 border-top text-muted s-4">
        <div className="col-6">
          <p>
            We launched KoshTrade with a clear vision: to empower modern traders
            and investors with seamless, transparent, and technology-driven
            access to global markets. The name "Kosh" draws from the traditional
            treasury, symbolizing wealth, safety, and security, paired with
            "Trade" to reflect our active commitment to dynamic financial
            markets.
          </p>
          <p>
            {" "}
            Today, our innovative investment solutions, transparent pricing, and
            robust infrastructure provide retail investors with world-class
            tools.
          </p>
          <p>
            {" "}
            Thousands of clients place their trust in KoshTrade every day,
            trading intelligently across diverse global assets and shaping the
            future of retail investing.
          </p>
        </div>
        <div className="col-6 ">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p>
            <a href="" style={{textDecoration:"None"}}>KoshPulse</a>, our fintech fund and incubator, has
            invested in several fintech startups with the goal of growing the
            global capital markets.
          </p>

          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
