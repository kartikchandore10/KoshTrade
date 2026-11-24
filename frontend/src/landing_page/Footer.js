import React from 'react';
function Footer() {
   
    return ( 
        <footer style={{backgroundColor:"rgb(250,250,250)"}}>
            <div className='container border-top mt-5' >
                <div className='row mt-5'>
                    <div className='col'>
                        <img src='media/KoshTrade2.png' style={{ width : "50%"}}/>
                        <p>&copy; KoshTrade Broking Ltd. All rights reserved.</p>
                    </div>
                    <div className='col' >
                        <p>Company</p>
                        <a href='' className='text-decoration-none'>About</a>
                        <br/>
                        <a href='' className='text-decoration-none'>Product</a>
                        <br/>
                        <a href='' className='text-decoration-none'>Pricing</a>
                        <br/>
                        <a href='' className='text-decoration-none'>Referral programme</a>
                        <br/>
                        <a href='' className='text-decoration-none'>KoshTrade tech</a>
                        <br/>
                        <a href='' className='text-decoration-none'>Press & Media</a>
                        <br/>
                        <a href='' className='text-decoration-none'> KoshTrade cares</a>
                    </div>
                    <div className='col'>
                        <p>Support</p>
                        <a href='' className='text-decoration-none'>contact</a>
                        <br/>
                        <a href='' className='text-decoration-none'>support portal</a><br/>
                        <a href='' className='text-decoration-none'>Z-Connect blog</a><br/>
                        <a href='' className='text-decoration-none'>List of Charges</a><br/>
                        <a href='' className='text-decoration-none'>Downloads & resources</a><br/>
                    </div>
                    <div className='col'>
                        <p>Account</p>
                        <a href='' className='text-decoration-none'>Open an account</a><br/>
                        <a href='' className='text-decoration-none'>Fund transfer</a><br/>
                        <a href='' className='text-decoration-none'>60 day challenge</a><br/>
                    </div>

                </div>
                <div className='mt-5 text-small text-muted'>
                    <p>
                        <strong>Kosh Trade Technologies Pvt. Ltd.:</strong> Member of NSE & BSE – SEBI Registration no.: <strong>[INZ000XXXXXX]</strong> | 
                        CDSL/NSDL: Depository services through Kosh Trade Securities Pvt. Ltd. – SEBI Registration no.: <strong>[IN-DP-XXXXXX]</strong> | 
                        Commodity Trading through Kosh Trade Commodities Pvt. Ltd. MCX: <strong>[XXXXX]</strong> – SEBI Registration no.: <strong>[INZ000XXXXXX]</strong> | 
                        Registered Address: Kosh Trade Technologies Pvt. Ltd., [Your Registered Office Address, City, Pin Code, State, India]. 
                        For any complaints pertaining to securities broking, please write to <a href="mailto:complaints@koshtrade.com">complaints@koshtrade.com</a>. 
                        Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
                    </p>
                    <p>
                        <strong>Procedure to file a complaint on SEBI SCORES:</strong> Register on the SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, and Email ID. Benefits: Effective communication, Speedy redressal of the grievances.
                    </p>

                    <p >
                    Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>
                </div>
            </div>
        </footer>
    );
    
}

export default Footer;