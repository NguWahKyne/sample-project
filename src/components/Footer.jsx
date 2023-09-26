import React from 'react';


const Footer = () => {
  return (
    <> 
   
    <div className='bg-darkBlue h-full py-16 px-12'>
        <div className='md:px-12 md:container md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 h-200px mx-12'>
            <div className='grid grid-cols-1 md:grid-cols-1 auto-cols-max gap-4'>
                <div>
                    <img src='../src/assets/logoWhite.png' className='min-w-min min-h-min'/>
                </div>
                <div className='text-white text-md'> 
                    <li className='p-2'><span><img src='../src/assets/map.png' className='inline-block'/>1250 Capital of Texas Hwy,Building 3,Suite200 Austin </span>  </li>
                <li className='p-2'><span><img src='../src/assets/contact.png' className='inline-block'/>support: admin@kbzmoney.com </span>  </li>
                <li className='p-2'><span><img src='../src/assets/mobile.png' className='inline-block'/>+959 798065880 </span>  </li></div>
            </div>
            

            <div className=" text-white items-center">
            <div className='grid grid-cols-1 md:grid-cols-3 auto-cols-max gap-6 justify-center items-center '>
                <div >
                    <h1 className='text-2xl font-semibold py-4'> Quick Links</h1>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">AML Technology</a></li>
                    <li><a href="#">Crypto Currencies</a></li>
                    <li><a href="#">Resources</a></li>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold py-4'>Contact</h1>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Client Support</a></li>
                    <li><a href="#">Alerts</a></li>
                    <li><a href="#">Crypto Currencies</a></li>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold py-4'> About Us</h1>
                        <li><a href="#">Disclaimer</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Term of Service</a></li>
                        <li><a href="#">Carrier</a></li>
                        <li><a href="#">Crypto Currencies</a></li>
                </div>
                
            </div>
           
        </div>
        </div>
    </div>
    </>
  )
}

export default Footer


