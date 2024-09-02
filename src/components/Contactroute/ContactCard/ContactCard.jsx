import { Headphones, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { WhatsApp, insta, linkedin, youtube } from "../../../assets/image"

const ContactCard = () => {
  return (
    <>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 pb-32 gap-7">
      <div className=" p-10 bg-white hover:border hover:border-[#1176f0] rounded-lg pb-10 justify-center flex flex-col hover:shadow-xl shadow-lg items-center">
        <Headphones className="  h-16 w-[45px] stroke-[#1176f0]"/>
        <p className=" font-bold font-[poppins] text-[20px] text-[#192335] pt-4 ">Contact Phone Number</p>
        <p className=" text-[18px] font-[poppins] text-[#6b7385] pt-4"><a href="tel:+91 80729 48266">+91 80729 48266</a></p>
        <p className=" text-[18px] font-[poppins] text-[#6b7385]"><a href="tel:+91 80729 48266">+91 80729 48266</a></p>
      </div>
      <div className=" p-10 bg-white hover:border hover:border-[#1176f0] rounded-lg pb-10 flex flex-col items-center justify-center hover:shadow-xl shadow-lg">
        <Mail className="  h-16 w-[45px] stroke-[#1176f0]"/>
        <p className=" font-bold font-[poppins] text-[20px] text-[#192335] pt-4 ">Our Email Address</p>
        <p className=" text-[18px] font-[poppins] text-[#6b7385] pt-4">admin@gmail.com</p>
        <p className=" text-[18px] font-[poppins] text-[#6b7385]">example@gmail.com</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5">
        <div className="">
          <img src={insta} alt="" className="shadow-lg p-5 h-[70%] rounded-lg border hover:border-[#1176f0]"/>
        </div>
        <div className="">
        <img src={youtube} alt="" className="shadow-lg p-5 h-[70%] rounded-lg border hover:border-[#1176f0]"/>
        </div>
        <div className=" ">
        <img src={WhatsApp} alt="" className="shadow-lg p-5 h-[70%] rounded-lg border hover:border-[#1176f0]"/>

        </div>
        <div className="">
        <img src={linkedin} alt="" className="shadow-lg p-5 h-[70%] rounded-lg border hover:border-[#1176f0]"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactCard