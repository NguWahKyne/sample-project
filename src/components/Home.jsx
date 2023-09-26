import React from 'react'
import homeLogo from '../assets/section1.png';
import { newsData, Countries} from '../data';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const imageSources = [
    '../src/assets/consult.png',
    '../src/assets/license.png',
    '../src/assets/train.png',
    '../src/assets/account.png',
    '../src/assets/review.png',
    '../src/assets/feedback.png',
  ];

const Home = () => {
    const chunkSize = 3; // Number of cards per slide
  
    // Split card data into chunks
    const chunkedData = Array.from(
      { length: Math.ceil(newsData.length / chunkSize) },
      (_, index) => newsData.slice(index * chunkSize, (index + 1) * chunkSize)
    );

  return (
    <>
    {/* Hero section */}
    <div className="img-container items-center h-full max-h-max justify-center">
        <div className=" relative px-6 md:px-10 py-12 md:container md:mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-center mb-20 pb-20">
            <div className="mx-auto px-6 sm:px-10">
                <h1 className="text-3xl md:text-3xl text-primaryTitle font-extrabold tracking-wide">
                    <span className="text-4xl md:text-4xl text-primaryColor">
                    KBZ Money </span>{" "}
                    compass anti-money laundering technology and services redefined
                </h1>
                <p className="text-secondaryTitle py-8">
                    KBZ Money Compass Group is a consulting, services, and technology firm
                    with a long-established legacy of leadership.
                </p>
                <button type="submit" className="text-white font-bold px-5 py-3 bg-red-600 mt-4 rounded-full items-center justify-center text-center min-w-lg text-base ">
            Get Started {""} <span><img src='../src/assets/whiteArrow.png' className='inline-block'/> </span>
             </button>
                
            </div>
            <div className="mx-auto px-6 sm:px-10 flex items-center justify-center">
                <img src={homeLogo} alt="home" />
            </div>
        </div>  
    </div>
    {/* card section  */}
    <div className='mx-auto w-full md:flex mt-[-125px] gap-6 px-6 justify-center items-center'>
    <div className='relative shadow-md bg-white hover:bg-primaryColor rounded-xl shadow-[0 4px 6px -1px rgb(0 0 0 / 22%), 0 2px 4px -2px rgb(0 0 0 / 0.1)] p-6 w-[360px] h-[270px]' >
        <div><img src="../src/assets/tech.png" className='relative mb-4'/> </div>
            <div className='text-primaryTitle transform hover:text-white'>
                <h3 className=' font-bold text-xl'> Crypto Currencies</h3>
                <p className='py-4'> The Crypto currency market is one of the most exciting  and rapidly developing around the world ...  </p>
                <span > Get Started <button className='ml-3' > <img src='../src/assets/arrow.png' /></button></span>
            </div>   
        </div>
        <div className='relative shadow-md bg-white hover:bg-primaryColor rounded-xl  shadow-[0px 20px 40px 0px rgba(106, 100, 100, 0.05)] p-6 w-[360px] h-[270px]' >
            <div><img src="../src/assets/world.png" className='relative mb-4'/> </div>
            <div className='text-primaryTitle transform hover:text-white'>
                <h3 className='font-bold  text-xl'> Crypto Currencies</h3>
                <p className='py-4'> The Crypto currency market is one of the most exciting  and rapidly developing around the world ...  </p>
                <span > Get Started <button className='ml-3' > <img src='../src/assets/arrow.png' /></button></span>
            </div>   
        </div>
        <div className='relative shadow-md bg-white hover:bg-primaryColor rounded-xl  shadow-[0px 20px 40px 0px rgba(106, 100, 100, 0.05)] p-6 w-[360px] h-[270px]' >
            <div><img src="../src/assets/money.png" className='relative mb-4'/> </div>
            <div className='text-primaryTitle transform hover:text-white'>
                <h3 className=' font-bold text-xl'> Crypto Currencies</h3>
                <p className='py-4'> The Crypto currency market is one of the most exciting  and rapidly developing around the world ...  </p>
                <span > Get Started <button className='ml-3' > <img src='../src/assets/arrow.png' /></button></span>
            </div>   
        </div>
    </div>
    {/* current challenge */}
     <div>
         <div className="px-12 py-12 md:container md:mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-center mb-10">
            <div className='mx-auto px-10 justify-around'>
                <img src='../src/assets/section2.png' alt='section' />
            </div>
                <div className='mx-auto px-10 '>
                    <h1 className='text-3xl font-extrabold text-primaryTitle py-6'>The Current Challenges</h1>
                    <p className='text-secondaryTitle py-1'> Legal requirements and recent developments compel Financial Institutions to adopt comprehensive and effective.</p>
                    <p className='text-secondaryTitle py-1'> Anti Money Laundering, Terrorism Financing, Fraud, and related regulations continue to increase compliance operating costs.</p>
                    <p className='text-secondaryTitle py-1'> Untested, rubber stamp solutions adopted to appease regulators will not do in today’s environment.</p>    
                </div>
            </div>  
    </div>
    {/* service */}
         <div className='bg-primaryColor'>
            <div className="md:px-12 py-12 md:container md:mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-center ">
                <div className='mx-auto px-10 text-white'>
                    <h1 className='text-3xl font-extrabold py-6'>Our Solutions</h1>
                    <p className='text-white py-1'> KBZ Money leverages technology and our extensive experience to create solutions that are forward thinking, anticipatory, holistic, and most importantly, effective.</p>
                    <p className='text-white py-1'> KBZ Money offers a proven skill and delivers best-in-class AML/BSA consulting and automated AML/BSA and OFAC compliance solutions to financial institutions the world over.</p>   
                </div>
                <div className='mx-auto px-10 justify-around mb-10'>
                    <img src='../src/assets/section3.png' alt='section' className='min-w-full min-h-full' />
                </div>
            </div>  
        </div>    

        <div className='bg-white'>
            <div className="md:px-12 py-12 md:container md:mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-center">
            <div className ='box-border relative w-full min-w-full text-center bg-no-repeat bg-contain border-solid'>
                <img src='../src/assets/section4.png' alt='section' />
            </div>
            {/* <div className='mx-auto px-10 justify-around'>
                    <img src='../src/assets/img/section4.png' alt='section' />
                </div> */}
                <div className='mx-auto px-8 py-8'>
                    <h1 className='text-3xl text-primaryTitle py-6 font-extrabold'>Why we stand Out in Industry</h1>
                    <p className='text-secondaryTitle py-1'> KBZ Money Compass Group is a consulting, services and technology firm with a long established legacy of leadership, innovation, and trust in the anti-money laundering compliance field in the United States, Latin America, Europe, Africa, the Middle East and the Far East.  Since its inception we have focused on innovative ways to deliver cutting edge Compliance solutions to our clients in a dynamic and fast-changing regulatory landscape.</p> 
                    <button type="submit" className="text-white font-bold px-5 py-3 bg-red-600 mt-4 rounded-full items-center justify-center text-center min-w-lg text-base ">
            Learn more {""} <span><img src='../src/assets/whiteArrow.png' className='inline-block'/> </span>
             </button>   
                </div> 
            </div>  
        </div>

        <div className=' bg-skyLight pb-10'> 
            <div className='md:px-10 py-12 md:container md:mx-auto '>
                <div className='justify-center items-center'> 
                    <h1 className='text-center font-extrabold text-3xl text-primaryTitle py-4'>Our Service </h1>
                    <p className='text-secondaryTitle py-6'>KBZ Money leverages technology and our extensive experience to create solutions that are forward thinking, anticipatory, holistic, and most importantly, effective.</p>
                </div>
           
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-3">
                    {imageSources.map((src, index) => (
                        <div key={index} className="border-white border px-4 py-6 flex justify-center items-center bg-white rounded-lg shadow-white  transform hover:border-primaryColor">
                        <img src={src} alt={`Section ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        
        </div>

         
         <div className='px-12 py-12 md:container md:mx-auto mb-10'>
                <div className='justify-center items-center '> 
                    <h1 className='text-center font-extrabold text-3xl text-primaryTitle py-4'>Our Clients and Footprint </h1>
                    <p className='text-secondaryTitle py-6'>Clients include Banks, Non-Banking Financial Institutions, Non-Financial Institutions, Insurance Companies, Broker Dealers, Payment Processors, Check Cashers, Digital Payments Companies, Money Transmitters, and Crypto Currency Solution Companies including Exchanges and Market Places.</p>
                </div>
           
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-3">
                    {Countries.map((country, index) => (
                        <div key={index} className='shadow-md rounded-xl'>
                            <div  className='{country.backgroundColor} bg-sky-50'>
                                <img src={country.imageSrc} className='p-6 '/>
                            </div>
                            <div className='py-4 divide-y divide-gray-700 px-4 border-b-2 mx-6'>
                                <h2 className='text-xl text-primaryTitle font-extrabold'>{country.Nation}</h2>
                            </div>
                            <ul className='mt-4 px-4 mb-4'>
                                {country.City.map((City, cityIndex) => (
                                <li key={cityIndex} className='text-secondaryTitle p-1 px-4'>{City}</li>
                                ))}
                            </ul>
                        </div>
                    ) )}
                 </div>
        </div>
        
        <div className='img-section bg-center bg-no-repeat bg-cover items-center max-w-full h-[390px]' >
        <div className="md:px-12 py-12 md:container md:mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-center pt-20">
            <div className='mx-auto px-10'>
                <h1 className='text-3xl font-extrabold text-white'> AML compass Technology Platforms </h1>
                <p className='text-white py-8'> KBZ Money Compass Group is a consulting, services and technology firm with a long established legacy of leadership.</p>
                <button className='ml-1 bg-white px-8 py-3 rounded-3xl text-primaryColor'><span > Learn more  <img src='../src/assets/img/blueArrow.png' className='ml-4 inline-block'/></span>
                </button>
            </div>
            <div className='mx-auto px-10 justify-around'>
                    
            </div>
            </div>  
        </div>

    <div className='md:px-12 py-12 md:container md:mx-auto'> 
        <div className='items-center mb-10 py-4'> 
             <h1 className='text-center font-extrabold text-3xl text-primaryTitle'>KBZ Money Alerts</h1>
        </div>
        <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
            {chunkedData.map((slide, index) => (
                <div key={index} className="carousel-slide grid grid-cols-3 p-2 gap-6">
                {slide.map((card, cardIndex) => (
                <div key={cardIndex} className=" bg-white rounded-xl max-w-md mx-auto shadow-md  mt-4">
                  {/* <div className="absolute inset-0 bg-white opacity-10 z-10 "></div> */}
                  <img src={card.imageSrc} className="w-full h-auto" />
                  
                  <div className="gap-4 px-4 pb-8 md:px-8 text-left">
                      <h1 className='text-2xl font-bold py-3 text-primaryTitle'> 
                      {card.title}</h1>
                    <p>{card.info}</p>
                    <br />
                  </div>
                </div>
                 ))}
                 </div>
               ))}
        </Carousel>
        <div className='relative left-1/2 mt-10'>
        <button type="submit" className="text-white font-bold px-5 py-3 bg-red-600 mt-4 rounded-full items-center justify-center text-center min-w-lg text-base ">
            Learn more {""} <span><img src='../src/assets/img/whiteArrow.png' className='inline-block'/> </span>
             </button>  
        </div>
    </div>

    <div className= 'bg-primaryColor py-12 px-12'>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-6 px-6 py-6">
            <div className="w-full  px-4 pb-2 pt-2 flex items-center justify-center pl-10">
            <p className='text-3xl text-white font-extrabold '> Subscribe Newsletters & get <br/> get KBZ Money Alerts
                </p>
            </div>
            <div className="w-full px-4 pb-2 pt-2 relative flex items-center">
                <div className='grid grid-cols-1 md:grid-cols-2 '> 
                    <div className='items-end justify-items-end'>
                        <input type="text" placeholder="Email Address" className=' bg-primaryColor border border-white rounded-md p-3 w-56 h-10 justify-center items-center' /> 
                    </div>
                    <div className='items-end justify-items-end'>
                        <button className='items-end justify-items-end ml-4 w-36 h-10 bg-white rounded-md text-darkBlue font-extrabold'> Subscribe</button>
                    </div>
                 </div>

            </div>       
        </div>     
  </div>
    </>
  )
}

export default Home