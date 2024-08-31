import { Headphones, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const ContactCard = () => {
  return (
    <>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 pb-32 gap-7">
      <div className=" p-10 bg-white hover:border hover:border-[#1176f0] rounded-lg pb-10 flex flex-col hover:shadow-xl shadow-lg items-center">
        <Headphones className="  h-16 w-[45px] stroke-[#1176f0]"/>
        <p className=" font-bold font-[poppins] text-[20px] text-[#192335] pt-4 ">Contact Phone Number</p>
        <p className=" text-[18px] font-[poppins] text-[#6b7385] pt-4"><a href="tel:+91 80729 48266">+91 80729 48266</a></p>
        <p className=" text-[18px] font-[poppins] text-[#6b7385]"><a href="tel:+91 80729 48266">+91 80729 48266</a></p>
      </div>
      <div className=" p-10 bg-white hover:border hover:border-[#1176f0] rounded-lg pb-10 flex flex-col items-center hover:shadow-xl shadow-lg">
        <Mail className="  h-16 w-[45px] stroke-[#1176f0]"/>
        <p className=" font-bold font-[poppins] text-[20px] text-[#192335] pt-4 ">Our Email Address</p>
        <p className=" text-[18px] font-[poppins] text-[#6b7385] pt-4">admin@gmail.com</p>
        <p className=" text-[18px] font-[poppins] text-[#6b7385]">example@gmail.com</p>
      </div>
      <div className=" p-10 bg-white hover:border hover:border-[#1176f0] rounded-lg pb-10  items-center hover:shadow-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex justify-center w-full h-full items-center">
          <Instagram className="" size={70} stroke="#1176f0"></Instagram>
        </div>
        <div className="flex justify-center">
          <Linkedin size={70} stroke="#1176f0"></Linkedin>
        </div>
        <div className="flex justify-center">
        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 464 488"
                  className="text-[#1176f0]"
                  
                >
                  <path
                    fill="currentColor"
                    d="M462 228q0 93-66 159t-160 66q-56 0-109-28L2 464l40-120q-32-54-32-116q0-93 66-158.5T236 4t160 65.5T462 228zM236 39q-79 0-134.5 55.5T46 228q0 62 36 111l-24 70l74-23q49 31 104 31q79 0 134.5-55.5T426 228T370.5 94.5T236 39zm114 241q-1-1-10-7q-3-1-19-8.5t-19-8.5q-9-3-13 2q-1 3-4.5 7.5t-7.5 9t-5 5.5q-4 6-12 1q-34-17-45-27q-7-7-13.5-15t-12-15t-5.5-8q-3-7 3-11q4-6 8-10l6-9q2-5-1-10q-4-13-17-41q-3-9-12-9h-11q-9 0-15 7q-19 19-19 45q0 24 22 57l2 3q2 3 4.5 6.5t7 9t9 10.5t10.5 11.5t13 12.5t14.5 11.5t16.5 10t18 8.5q16 6 27.5 10t18 5t9.5 1t7-1t5-1q9-1 21.5-9t15.5-17q8-21 3-26z"
                  />
                </svg>
        </div>
        <div className="flex justify-center">
          <Phone size={70} stroke="#1176f0"></Phone>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactCard