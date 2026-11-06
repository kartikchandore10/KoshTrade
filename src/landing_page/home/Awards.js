import React from 'react';

function Awards() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/largestBroker.svg'/>
                </div>
                <div className='col-6 mt-4'>
                        <h1>Empowering the Next Generation of Indian Investor</h1>
                        <p className='mb-5'>Thousands of active traders trust KoshTrade daily to seamlessly exectue trades, manage portfolios, build wealth across diverse financial markets:</p>
                        
                            <h3>Key Offerings</h3>
                            <div className='row'>
                                <div className='col-6'>
                                    <ul>
                                        <li><p>Futures & Options Trading</p></li>
                                        <li><p>Equity Stocks & Upcomings IPOs</p></li>
                                        <li><p>Commodity Derivatives</p></li>
                                    </ul>
                                </div>
                                <div className='col-6'>
                                    <ul>
                                        <li><p>Direct Mutual Funds (0% Commission)</p></li>
                                        <li><p>Currency Derivatives</p></li>
                                        <li><p>Government Bonds & Debt Instruments</p></li>
                                    </ul>
                                </div>
                            </div>
                        <img src='media/pressLogos.png' style={{width:"90%"}}/>    
                </div>
            </div>

        </div>
     );
}

export default Awards;