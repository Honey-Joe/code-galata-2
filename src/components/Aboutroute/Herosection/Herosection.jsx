import { ArrowRight } from "lucide-react"

const Herosection = () => {
  return (
    <>
     <div className="max-w-[100%] mx-auto">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 py-[40px] gap-10">
                <div className="flex flex-col gap-4">
                    <div className="flex">
                        <button className="font-[poppins] text-white bg-[#1176F0] px-11 rounded-lg py-2">WHAT WE ARE</button>
                    </div>
                    <div>
                        <h1 className="font-[poppins] lg:text-[30px] text-[22px] font-bold ">Moulding Young Minds in Enhancing their <span className="text-[#1176f0] underline">Skills</span> </h1>
                    </div>
                    <div>
                        <p className="font-[poppins] text-[17px] ">Code Galatta is dedicated to affordable excellence, impacting over 1200 students with courses at low priced. Our industry-aligned syllabus and 24/7 support ensure equal access for all, empowering individuals on a journey of success. Express interest, unlock potential, and join Revamp Academy for a brighter future.</p>
                    </div>
                    <div className="flex gap-7 group relative">
                        <div className="bg-[#1176F0] px-3 py-3 rounded-full group-hover:pr-56 transition-all">
                            <ArrowRight color="white"></ArrowRight>
                        </div>
                        <button className="absolute top-3 left-20 font-[poppins] text-[16px] text-[#1176F0] group-hover:text-white font-semibold">EXPLORE ALL COURSES</button>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center">
                        <div className="shadow-lg px-3 py-3 rounded-lg flex justify-center w-[100%]">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/gsG7uj9-4Jo?si=iGyYHzopyGcagdUJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="rounded-md"></iframe>

                        </div>
                    
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Herosection
