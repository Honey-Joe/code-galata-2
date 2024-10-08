import { profile3, shaped, shaper } from "../../../assets/image"
import FaqAccodion from "../Accodion/FaqAccodion"
import { Phone } from "lucide-react"
import { useState } from "react"
const Faq = () => {
    const [open, setOpen] = useState(false)
    const toggle = (index) =>{
        if(open === index){
            return setOpen(null)
        }
        setOpen(index)
    }
    const accordionData = [
        {
            title:"1. What services does CodeGalatta offer?",
            desc:"At CodeGalatta, we provide courses in four core programming languages: C, C++, Java, and Python (including Python with AI). We focus on building practical coding and problem-solving skills, tailored to help students excel in the tech world."
        },
        {
            title:"2. Who can enroll in CodeGalatta's courses?",
            desc:"Our courses are designed for all students, whether you are a complete beginner or looking to enhance your tech skills. We have successfully trained over 7,000 students, including those from top institutions like CEG Anna University and PSG Tech."
        },
        {
            title:"3. What makes CodeGalatta different from other coding platforms?",
            desc:"We don't just teach programming; we prepare students for real-world challenges by focusing on practical skills and digital portfolio building. We also provide support in creating and optimizing LinkedIn profiles to boost career prospects."
        },
        {
            title:"4. How can I enroll in a course at CodeGalatta?",
            desc:" Enrollment is simple! You can register for our upcoming batches directly through our website. If you have any questions, our support contact number is available to assist you."
        },
        {
            title:"5. Do CodeGalatta courses offer any certifications",
            desc:" Yes! Upon successful completion of our courses, students receive a certification that adds value to their professional profiles and resumes. This can help increase their job prospects in the tech industry."
        },
    ]
  return (
    <>
        <div className="max-w-[100%] mx-auto bg-white pb-20 py-[40px]">
            <div className="lg:w-[90%] xl:w-[90%] mx-auto py-20 w-[90%]">
                <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
                    <div className=" relative">
                        <div className="">
                            <img src={profile3} alt="Profile" className=" relative z-20"/>
                        </div> 
                        <div className=" absolute xl:absolute md:absolute xl:-right-3 xl:top-[524px] bg-[#002935] lg:absolute lg:top-[400px] lg:right-0 md:right-3 md:top-[604px] py-5 px-7 rounded-lg z-30">
                            <h1 className=" font-[poppins] text-[22px] font-bold text-wrap text-white">Contact Us For a <span className=" text-[#1176F0]">Free Learning</span>  <br className=" lg:hidden xl:block"/> Consulting Evaluation</h1>
                            <div className="flex items-center gap-1 py-3 px-3 bg-[#1176F0] mt-4 rounded-lg w-fit">
                                <Phone className=" stroke-white "/>
                            </div>
                        </div>
                    </div>
                    {/* FaqAccodion section  */}
                    <div className="mt-72 md:mt-40 lg:mt-0">
                        <div>
                            <div className=" flex items-center  gap-1">
                                <div className=" p-2 bg-[#6daaf590] rounded-full">
                                    <div className=" h-3 w-3 bg-[#1176F0] rounded-full shadow-yellow-300"></div>
                                </div>
                                <p className=" text-[#1176F0] font-bold font-[poppins] text-[18px]">FAQ</p>
                            </div>
                            <p className="text-[30px] lg:text-[48px] font-[poppins] leading-[57px] pt-4 font-bold">Frequently Asked <br /> Questions</p>
                            <p className=" pt-5 font-[poppins] text-[#6c6f70] text-[16px] pb-5" >Architect client-centered total linkage for intuitive benefits. Dynamically restore convergence before real-time restore.</p>
                            {
                                accordionData.map((data, index) =>{
                                    return(
                                        <>
                                            <FaqAccodion key={index} open={index===open} title={data.title} desc={data.desc} toggle={()=>toggle(index)}/>
                                        </>
                                    )
                                })
                            }
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Faq