import React from 'react';
function Stats() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2'>Build with confidence</h1>
                    <h2 className='fs-4'>​People-first always</h2>
                    <p className='text-muted'> Built around your workflow, offering dedicated support and seamless experiences from day one.</p>
                    <h2 className='fs-4'>No clutter, no noise</h2>
                    <p className='text-muted'>A streamlined, lightning-fast platform designed to give you complete control without unnecessary friction.</p>
                    <h2 className='fs-4'>The Co-Street universe</h2>  
                    <p className='text-muted'> An all-in-one platform integrating flexible spaces, community events, and digital utilities tailored to modern teams.</p>
                    <h2 className='fs-4'>Do better, together</h2>
                    <p className='text-muted'> Smart analytics and collaboration tools built to elevate how you work, network, and grow your brand.</p>

                </div>
                <div className='col-6 p-5'>
                    <img src='media/ecosystem.png' style={{width:"90%"}}/>
                    <div className='text-center'>
                      <a href='' className='mx-5'>Explore our products<i class="fa-solid fa-arrow-right-long"></i></a>   
                      <a href=''>Try kite demo<i class="fa-solid fa-arrow-right-long"></i></a> 
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Stats;