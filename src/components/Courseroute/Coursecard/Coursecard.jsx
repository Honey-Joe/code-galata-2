import { Facebook, Instagram, Linkedin, Star, Twitter } from "lucide-react";
import { author_image } from "../../../assets/image";

const Card_intro = () => {
  return (
    <>
      <div className="2xl:container py-10">
        <div className=" grid grid-cols-1 mx-auto items-center justify-center">
          <div className="grid grid-cols-1 justify-center px-8 py-5 rounded-xl" id="certi">
            <div className="flex justify-start py-2">
              <p className="font-[poppins] font-bold">Instructor</p>
            </div>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-1 items-center justify-center ">
              <div className="flex justify-center py-3">
                <img
                  src={author_image}
                  alt=""
                  className="lg:h-[200px] lg:w-[200px] w-[100px] h-[100px] rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center py-3 gap-3">
                <p className="font-[poppins] text-[20px] font-bold hover:text-[#1176F0]">
                Suganth PV
                </p>
                <p className="font-[poppins] text-base text-[#6b7385]">
                UIUX DESIGNER
                </p>
                
                <div>
                  <p className="font-[poppins] text-[14px] text-[#212327]">
                  The trainer is a seasoned professional with over 5 years of experience in UI/UX design, having worked on a variety of projects ranging from mobile apps to web platforms. 
                  </p>
                </div>
                <div className="flex gap-4">
                  <Facebook className="cursor-pointer lg:w-[15%] hover:text-[#1176F0]" />
                  <Twitter className="cursor-pointer lg:w-[15%] hover:text-[#1176F0]"></Twitter>
                  <Instagram className="cursor-pointer lg:w-[15%] hover:text-[#1176F0]"></Instagram>
                  <Linkedin className="cursor-pointer lg:w-[15%] hover:text-[#1176F0]"></Linkedin>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card_intro;
