import { arrow, line, sideblub } from "../../../API/ImageApi"
import { suganth } from "../../../assets/image"
import { Star,BookOpenText } from "lucide-react"
import HeaderCard from "../HeaderCard/HeaderCard"
const HomeSection = () => {
  return (
    <>
        <div className="max-w-[100%]"> 
            <div className=" w-[90%] lg:w-[90%] mx-auto my-20 relative">
                <div className=" grid grid-cols-1 xl:grid-cols-2 w-full items-center">
                    <div className=" md:order-1 flex flex-col lg:pt-0">
                        <div className=" md:pt-10 pt-5">
                            <div className=" flex items-center gap-2">
                                <h1 className=" text-[26px] font-[poppins] lg:text-[60px] font-bold text-black md:leading-tight lg:leading-none md:text-[54px] text-nowrap">Embark On A</h1>
                                <div className="">
                                    <img src={line} alt="LIne" className=" h-[90px]"/>
                                </div>
                            </div>
                            <h1 className=" md:-mt-5 -mt-8 text-[26px] font-[poppins] lg:text-[60px] font-bold text-[#00000] leading-tight md:leading-tight lg:leading-[68px] md:text-[54px]">Transformative Learning <br className=" hidden xl:block"/>Journey At<span className="text-[#1176f0]"> Studyhub</span></h1>
                            <p className=" font-[poppins] text-[#7F7F7F] pt-3">Discover a world of knowledge and opportunities with our online <br className="xl:block hidden"/> education platform pursue a new career.</p>
                        </div>
                        <div className=" pt-5">
                            <div className=" grid grid-cols-1 md:grid-cols-3 ">
                                <div>
                                    <p className=" font-[poppins] font-medium text-[17px]"><span className=" text-black text-[32px] font-bold pr-1">4.5</span>Instructor Rating</p>
                                    <div className=" flex items-center">
                                        <Star className=" stroke-[#1176F0] w-5"/>
                                        <Star className=" stroke-[#1176F0] w-5"/>
                                        <Star className=" stroke-[#1176F0] w-5"/>
                                        <Star className=" stroke-[#1176F0] w-5"/>
                                        <Star className=" stroke-[#D8DFE8] w-5"/>
                                    </div>
                                </div>
                                <div className=" flex gap-16 items-center justify-start md:-ml-4 col-span-2 pt-2 md:pt-0">
                                    <div className=" flex items-center relative">
                                        <img src={suganth} className=" md:w-14 w-14 rounded-full bg-white p-1 hover:scale-105 transition" alt="student" />
                                        <img src={suganth} className=" md:w-14 w-14 rounded-full bg-white p-1 absolute top-0 -right-10 md:-right-10 hover:scale-105 transition" alt="student" />
                                        <img src={suganth} className=" md:w-14 w-14 rounded-full absolute top-0 md:-right-16 bg-white p-1  hover:scale-105 transition left-[80px]" alt="student" />
                                    </div>
                                    <div className=" pl-8">
                                        <p className=" text-[24px] font-[poppins] text-[#1176F0] font-bold leading-6">2k students</p>
                                        <p className=" text-[#7F7F7F] font-[poppins]">Joint our online Class</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" pt-5 flex items-center gap-10">
                            <button className=" flex items-center gap-2 py-4 bg-[#1176F0] px-8 text-white font-medium font-[poppins] rounded-md hover:bg-white   hover:text-[#1176F0] border border-[#1176F0] transition">My Course </button>
                            <div>
                                <img src={arrow} alt="arrow" />
                            </div>
                        </div>
                    </div>
                    <div className=" md:order-2 lg:flex lg:justify-end flex justify-center ">
                        <HeaderCard />
                    </div>
                </div>
                <div className=" w-10 absolute top-[12%] right-[50%] xl:block hidden">
                    <img src={sideblub} alt="blub" className=""/>
                </div>
                <div className="animate-pulse duration-700 absolute top-[12%] right-[5%] border border-[#1176F0] rounded-md xl:block hidden">
                    <div className=" flex gap-3 items-start p-1 px-2">
                        <div>
                            <BookOpenText className=" w-12 h-12 stroke-white stroke-1 p-1 rounded-md bg-[#1176F0]"/>
                        </div>
                        <div className=" flex items-start flex-col">
                            <h1 className=" font-bold text-2xl">100+</h1>
                            <p className=" text-[#1176F0] leading-[4px]">Online Course</p>
                        </div>
                    </div>
                </div>
                <div className="animate-pulse duration-700 absolute bottom-[2%] left-[45%] border border-[#1176F0] rounded-md xl:block hidden">
                    <div className=" flex gap-3 items-start p-1 px-2">
                        <div>
                            <Star className=" w-12 h-12 stroke-white stroke-1 p-1 rounded-md bg-[#1176F0]"/>
                        </div>
                        <div className=" flex items-start flex-col">
                            <h1 className=" font-bold text-2xl">4.5</h1>
                            <p className=" text-[#1176F0] leading-[4px]">(2.4k Reviews)</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default HomeSection