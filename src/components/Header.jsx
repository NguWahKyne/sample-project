import React from 'react'

const Header = () => {

  return (
<> 
<div className="Header bg-skyColor text-secondaryTitle justify-around items-center">
    <div className="flex flex-wrap pt-4 px-6">
    
    <div className="w-full sm:w-1/2 md:w-1/3  mb-6 flex items-center justify-center">
    <span >  <img src="../src/assets/phone.png" className="inline-block" /> +959 798737373 </span> 
    </div>

    
    <div className="w-full sm:w-1/2 md:w-1/3  mb-6 flex items-center justify-center">
    <span>Update~Click Here for Money News alert</span>
    </div>

    
    <div className="w-full sm:w-1/2 md:w-1/3  mb-6  flex items-center justify-center">
    <span>admin@kbzmoney.com <img src="../src/assets/mail.png" className="inline-block" /></span>
    </div>
    </div>
</div>
<div className= 'bg-white shadow '>
<div>
    <div className="flex flex-wrap pt-6 px-6 py-6">
        <div className="w-full sm:w-1/2 md:w-1/3 px-4 pb-2 pt-2 flex items-center justify-center pl-10">
            <img src="../src/assets/logo.png" alt="Logo" className='ml-10'/> 
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 px-4  pb-2 pt-2 flex items-center justify-center">
            <a href="/" to="/" className='inline-block text-xl font-semibold transform hover:text-primaryColor focus:text-primaryColor text-secondaryTitle'>Home</a>
            <a href="/blog" to="/blog" className='inline-block text-xl font-semibold transform hover:text-primaryColor focus:text-primaryColor ml-6 text-secondaryTitle'>Blog</a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 px-4  pb-2 pt-2 relative flex items-center justify-center ">
            <span className='relative'>
                <button type="submit" className="absolute left-0 top-0 mt-3 ml-3 ">
                    <img src='../src/assets/search.png' />
                    </button><input type="text" className='bg-white w-48 h-10 px-3 pl-10 rounded-lg text-sm focus:outline-none active:border focus:ring focus:ring-primaryColor' />
            </span>
        </div>
    </div>
</div>
</div>

{/* // <div className='Header'>
    //     <ul>
    //         <li>
    //             <a href="/">Home</a>
    //         </li>
    //         <li>
    //             <a href="blog">Blog</a>
    //         </li>
    //     </ul>
    // </div> */}
</>
  )
}

export default Header