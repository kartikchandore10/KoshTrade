import React from "react";
function Universe() {
  return (
    <div className="container mt-3">
      <div className="row">
        <h1 className="mt-5" style={{ textAlign: "center" }}>
          The KoshTrade Universe
        </h1>
        <p style={{ textAlign: "center" }}>
          Extend your trading and investment experience even further with our
          partner platform
        </p>
        <div className="col-4 p-3 text-center mt-5">
          <img src="media/KoshInvesting.png" style={{ width: "50%" }} />
        </div>
        <div className="col-4 p-3 text-center mt-5">
          <img src="media/KoshTrading.png" style={{ width: "50%" }} />
        </div>
        <div className="col-4 p-3 text-center mt-5">
          <img src="media/KoshCapital.png" style={{ width: "50%" }} />
        </div>
        <div className="col-4 p-3 text-center mt-5">
          <img src="media/KoshCrypto.png" style={{ width: "50%" }} />
        </div>
        <div className="col-4 p-3 text-center mt-5">
          <img src="media/KoshAlgo.png" style={{ width: "50%" }} />
        </div>
        <div className="col-4 p-3 text-center mt-5">
          <img src="media/KoshElite.png" style={{ width: "50%" }} />
        </div>
         <button className='p-2 btn btn-primary fs-5 mt-3 mb-5' style={{width:'20%' , margin:'0 auto'}}>Sign up now</button>
      </div>
    </div>
  );
}

export default Universe;
