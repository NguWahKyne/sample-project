import React , { useState }from 'react'
import { newsData, Categories, Posts, Tags } from '../data';

const ITEMS_PER_PAGE = 6;

const Blog= () => {
  const [active, setActive] = useState("blog");
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // slice-get/current page
  const currentNewsData = newsData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleChange = () => {
    setActive('blog-detail');
  };

  return (
    <>
      <div className="bg-center bg-no-repeat h-full w-full space-lr">
        {active === 'blog' &&
        <h1 className="text-3xl text-center text-primaryTitle font-bold px-4 py-6 md:px-10 md:py-10">
          Latest News
        </h1>
        }
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-3 gap-3">


          {/* blog posts */}
          {active === 'blog' &&
            <div className= 'col-span-2'>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-3 md:px-6">
                {currentNewsData.map((newsItem, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="mx-auto min-w-320">
                      <div className="bg-white rounded-xl max-w-md mx-auto  shadow-lg overflow-hidden mt-4">
                        <div className=" bg-white  "></div>
                        <img src={newsItem.imageSrc} alt="Image" className="w-full h-auto" />
                        <div className="grid grid-cols-2 gap-4 px-4 py-3 md:px-8 md:py-6 ">

                          <div>
                            <span>
                              <img src="../src/assets/people.png" className="rounded-xl inline-block" /> {newsItem.author}
                            </span>
                          </div>
                          <div className="float-right">
                            <span className="float-right">
                              <img src="../src/assets/date.png" className="inline-block" /> {newsItem.date}
                            </span>
                          </div>
                        </div>
                        <div className="gap-4 px-4 pb-8 md:px-8">
                          <h1 className='text-2xl font-bold py-3 text-primaryTitle'> {newsItem.title}</h1>
                          <p>{newsItem.info}</p>
                          <br />
                          <button type="submit" className="text-primaryTitle font-semibold py-4 md:py-6 rounded-full items-center justify-center text-center min-w-lg text-base " onClick={handleChange}>
                            Read More  <span><img src='../src/assets/grayArrow.png' className='inline-block' /> </span>
                          </button>

                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              </div>
          }
               {/* <button onClick={()=> handlePageChange(currentPage -1)} disabled={currentPage === 1}> Prev</button>
              <button onClick={()=> handlePageChange(currentPage +1)} disabled={endIndex >= newsData.length}> Learn More</button> */}
           
          {active === 'blog-detail' &&
            <div className="col-span-2 mt-6">
              <div className="grid grid-cols-1 gap-4 px-3 md:px-6">
                <h1 className='text-2xl text-primaryTitle font-extrabold pl-3'> FinCEN Issues a Geographic Targeting Order</h1>
                <div className='px-6'>
                  <span><img src="../src/assets/people.png" className="rounded-xl inline-block" /> Wade Warren</span>
                  <span className="float-right"> <img src="../src/assets/date.png" className="inline-block" /> 08 August 2022</span>
                </div>
                <div className='p-4'>
                  <img src="../src/assets/mask4.png" alt="Image" className="min-w-full h-auto rounded" />
                </div>
                <div className='text-secondaryTitle p-4'>
                  <p>
                    There are many variations of passengers Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
                  </p>
                  <p>There are many variations of passengers Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                  <h1 className='font-extrabold text-2xl py-6 text-primaryTitle'> Benefit </h1>
                  <p>There are many variations of passengers Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                  <p>
                    There are many variations of passengers Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>
            </div>
          }
          {/* Search */}
          <div className="mt-4">
            <div className="relative text-gray-600 items-center text-2xl">
              <input type="text" className='border-2 border-gray-300 bg-white h-14 px-5 pl-10 rounded-lg text-sm focus:outline-none w-full' placeholder='Search here' />
              <button type="submit" className="absolute left-0 top-0 mt-4 ml-4">
                <img src='../src/assets/search.png' />
              </button>
            </div>
            {/* category */}
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-4">
              <div className='bg-lightGray'>
                <h2 className="text-xl font-bold text-gray-800 p-4">Categories</h2>
              </div>

              {Categories.map((category, index) => (
                <div key={index} className="grid grid-cols-2 gap-6 m-4 relative">
                  <div className="left-0 relative"><p>{category.item}</p></div>
                  <div className="right-0 absolute">{category.num}</div>
                </div>
              ))}
            </div>

            {/* post */}
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-4">
              <div className='bg-lightGray'>
                <h2 className="text-xl font-bold text-gray-800 p-4">Related Posts</h2>
              </div>

              {Posts.map((post, index) => (
                <div key={index} className="grid grid-cols-2 gap-1 m-4 relative">
                  <img src={post.imageSrc} alt="Image" className="left-1 relative my-2 w-24" />
                  <p className="my-2 pt-4">{post.title}</p>
                </div>
              ))}
            </div>

            {/* tag */}
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-4">
              <div className='bg-lightGray mb-6'>
                <h2 className="text-xl font-bold text-gray-800 p-4">Tags</h2>
              </div>

              {Tags.map((tag, index) => (
                <div key={index} className='p-2 rounded-lg shadow m-2 inline-block'> {tag.info}</div>

              ))}
            </div>
            {/* mail */}
            <div className="max-w-md mx-auto bg-primaryColor shadow-lg rounded-lg overflow-hidden mt-4">
              <h1 className='text-white font-extrabold text-3xl items-center text-center mx-10 my-12'> Subscribe to KBZ <br /> Money Alerts</h1>
              <div className="text-gray-600 items-center text-2xl">
                <div className='ml-5 mr-5'>
                  <input type="text" className='border-2 border-slate-100 bg-white h-14 px-5 rounded-lg text-base focus:outline-none w-full justify-center items-center text-center' placeholder='Email Address' />
                </div>
                <div className='mx-10 p-3 items-center justify-center mb-6'>
                  <button type="submit" className="mt-4 bg-sky-400 text-white rounded-lg items-center justify-center text-center w-full text-base py-3">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='relative left-1/3 mt-6'>
       {active === 'blog' && <button type="submit" className="text-white font-bold px-5 py-3 bg-red-600 mt-4 rounded-full  min-w-lg text-base" onClick={()=> handlePageChange(currentPage +1)} disabled={endIndex >= newsData.length}>
            Learn more {""} <span><img src='../src/assets/whiteArrow.png' className='inline-block'/> </span>
            </button> 
         } 
        </div>
        
      </div>


      {/* Have Question */}
      <div className="p-4 bg-sky-50 mt-6">
        <div className='text-center items-center px-10 py-20'>
          <h1 className='text-primaryTitle text-4xl font-extrabold mb-6'> Have Question & Need to <br />Book a Consultation?</h1 >
          <button type="submit" className="text-white font-bold px-5 py-3 bg-red-600 mt-4 rounded-full items-center justify-center text-center min-w-lg text-base ">
            Contact Us Now <span><img src='../src/assets/whiteArrow.png' className='inline-block' /> </span>
          </button>
        </div>

      </div>

    </>
  )
}

export default Blog