import {
  Headphones,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { WhatsApp, insta, linkedin, youtube } from "../../../assets/image";

const ContactCard = () => {
  return (
    <>
      <div className="max-w-[100%]">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 pb-32 gap-12 w-[100%] mx-auto">
          <div
            className=" p-10 bg-white hover:border hover:border-[#1176f0] text-center rounded-lg pb-10 justify-center flex flex-col hover:shadow-xl items-center hover:scale-[1.01]"
            id="certi"
          >
            <Headphones className="  h-16 w-[45px] stroke-[#1176f0]" />
            <p className=" font-bold font-[poppins] text-[20px] text-[#192335] pt-4 ">
              Contact Phone Number
            </p>
          </div>
          <div
            className=" p-10 bg-white hover:border hover:border-[#1176f0] rounded-lg pb-10 flex flex-col items-center justify-center hover:shadow-xl shadow-lg hover:scale-[1.01]"
            id="certi"
          >
            <Mail className="  h-16 w-[45px] stroke-[#1176f0]" />
            <p className=" font-bold font-[poppins] text-[20px] text-[#192335] pt-4 ">
              Our Email Address
            </p>
          </div>
          <div className=" flex gap-5 md:justify-start flex-wrap justify-center">
            <div className="flex gap-5 flex-wrap justify-center">
              <div className="w-[164px] bg-white shadow-lg flex justify-center h-[166px] items-center  hover:border hover:border-[#1176f0] hover:scale-[1.01] rounded-lg">
                <img src={insta} alt="" className="w-[80px]" />
              </div>
              <div className="w-[164px] bg-white shadow-lg flex justify-center h-[166px] items-center  hover:border hover:border-[#1176f0] hover:scale-[1.01] rounded-lg">
                <img src={youtube} alt="" className="w-[80px]" />
              </div>
            </div>
            <div className="flex gap-5 flex-wrap justify-center">
              <div className="w-[164px] bg-white shadow-lg flex justify-center h-[166px] items-center  hover:border hover:border-[#1176f0] hover:scale-[1.01] rounded-lg">
                <img src={WhatsApp} alt="" className="w-[80px]" />
              </div>
              <div className="w-[164px] bg-white shadow-lg flex justify-center h-[166px] items-center  hover:border hover:border-[#1176f0] hover:scale-[1.01] rounded-lg">
                <img src={linkedin} alt="" className="w-[80px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
