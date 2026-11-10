import React from 'react';
function Hero() {
    return ( 
    <div className="container ">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className='text-muted mt-3 fs-5'>Free equity investments and flat &#8377;20 trade and F&O trades</h3>
        <div className="row p-5 mt-5 text-center">

            <div className='col-4 p-4'>
                <img src="media/pricingEquity.svg"/>
                <h1 className='fs-3'>Free eqity delivery</h1>
                <p className='text-muted'>All equity delivery investments (NSE,BSE),are absolutely free- &#8377;0 brokerage</p>
            </div>
            <div className='col-4 p-4'>
                <img src="media/intradayTrades.svg"/>
                <h1 className='fs-3'>Intraday and F&O Trades</h1>
                <p className='text-muted'>Flat RS. 20 or 0.03% (whichever is lower)  per executed order on intraday trades across equity, currency, and commodity trades</p>
            </div>
            <div className='col-4 p-4'>
                <img src="media/pricingEquity.svg"/>
                <h1 className='fs-3'>Free firect MF</h1>
                <p className='text-muted'>All direct mutual fund investments are absolutely free - ₹ 0
  commissions & DP charges.</p>
            </div>

        </div>
      </div>
    </div>
     );
}

export default Hero;