import { ArrowRight, ChevronRight } from 'lucide-react'
import React from 'react'
import { blogcard1, blogcard2, blogcard3, blogcard4 } from '../../assets/image'

const Blogsection = () => {
  return (
    <>
        <div className='2xl:container mx-auto py-11'>
            <div className='w-[90%] grid grid-cols-1 lg:grid-cols-2 mx-auto'>
                <div className='flex flex-col gap-4'>
                  <div className='flex justify-start'>
                    <p className='px-3 py-1 bg-[#f5e7f1] rounded-full font-[poppins] font-medium text-[14px] text-[#db7093]'>BLOG POST</p>
                  </div>
                  <div>
                    <p className='font-[poppins] text-[44px] font-bold text-[#192335]'>Most Popular Post.</p>
                  </div>
                </div>
                <div className='flex justify-end items-center'>
                  <button className='bg-blue-600 px-8 py-4 flex gap-2 text-white rounded-lg font-[poppins] text-[18px]'>See All Articles <ArrowRight></ArrowRight></button>
                </div>
            </div>
            <div className='w-[90%] grid grid-cols-1 gap-5 lg:grid-cols-2 mx-auto my-5'>
              <div className='flex flex-col shadow-lg hover:scale-105 transition'>
                <div className=''>
                  <img src={blogcard1} alt="blog card1 " className='rounded-t-lg'/>
                </div>
                <div className='bg-white px-5 py-5 flex flex-col gap-3 rounded-b-lg'>
                  <div>
                    <p className='font-[poppins] font-bold text-[32px] text-[#192335] hover:text-[#2f57ef]'>Difficult Things About Education.</p>
                  </div>
                  <div>
                    <p className='text-[18px] font-[poppins] text-[#6b7385] '>There are many variations of passages of Lorem Ipsum available,</p>
                  </div>
                  <div>
                    <button className='flex gap-1 font-[poppins] text-[14px] text-[#192335] items-center'>Learn More <ArrowRight size={14}></ArrowRight></button>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-10'>
                  <div className='flex gap-3 bg-white shadow-2xl hover:scale-105 transition'>
                    <div>
                    <img src={blogcard2} alt="blog card 2" className='rounded-l-lg'/>

                    </div>
                    <div className='flex flex-col gap-5 py-5 px-4 justify-center rounded-r-lg'>
                    <div>
                      <p className='font-[poppins] font-bold text-[26px] text-[#192335] hover:text-[#2f57ef]'>React</p>
                    </div>
                    <div>
                      <button className='flex gap-1 font-[poppins] text-[14px] font-medium items-center'>Learn more <ArrowRight size={14}></ArrowRight></button>
                    </div>

                    </div>
                  </div>
                  <div className='flex gap-3 bg-white shadow-2xl hover:scale-105 transition'>
                    <div>
                    <img src={blogcard4} alt="blog card 2" className='rounded-l-lg'/>

                    </div>
                    <div className='flex flex-col gap-5 py-5 px-4 justify-center rounded-r-lg'>
                    <div>
                      <p className='font-[poppins] font-bold text-[26px] text-[#192335] hover:text-[#2f57ef]'>Why Is Education So Famous?</p>
                    </div>
                    <div>
                      <button className='flex gap-1 font-[poppins] text-[14px] font-medium items-center'>Learn more <ArrowRight size={14}></ArrowRight></button>
                    </div>

                    </div>
                  </div>
                  <div className='flex gap-3 bg-white shadow-2xl hover:scale-105 transition'>
                    <div>
                    <img src={blogcard3} alt="blog card 2" className='rounded-l-lg'/>

                    </div>
                    <div className='flex flex-col gap-5 py-5 px-4 justify-center rounded-r-lg'>
                    <div>
                      <p className='font-[poppins] font-bold text-[26px] text-[#192335] hover:text-[#2f57ef]'>Education Is So Famous, But Why?</p>
                    </div>
                    <div>
                      <button className='flex gap-1 font-[poppins] text-[14px] font-medium items-center'>Learn more <ArrowRight size={14}></ArrowRight></button>
                    </div>

                    </div>
                  </div>
              </div>
            </div>
            
        </div> 
    </>
  )
}

export default Blogsection
