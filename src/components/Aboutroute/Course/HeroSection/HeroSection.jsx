import CompanyCard from "../CompanyCard/CompanyCard"

const HeroSection = () => {
  return (
    <>
    {/* bg-[#7bb4fa] */}
      <div className=" max-w-[100%] mx-auto ">
        <div className=" lg:w-[90%] mx-auto w-[90%] py-[40px]">
          <div className=" flex flex-col py-10">
            <div className=" relative">
              <h1 className=" text-[#1176F0] font-[poppins] text-[16px] font-bold bg-[#cbd4fbdf] w-fit py-3 px-7 rounded-full mb-5 ">CODE GALLATA</h1>
              <div className=" absolute top-6 -left-5 h-[6px] w-8 rounded-full bg-[#1176F0]">

              </div>
            </div>
            <h1 className=" font-[poppins] text-[30px] font-black text-wrap">How Professional IT Services
            Can Drive <span className=" text-[#1176F0] underline"> Success.</span></h1>
          </div>
          <div className=" pt-10">
            <CompanyCard/>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection