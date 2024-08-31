import {
  acheivmentcard,
  acheivmentcard2,
  acheivmentcard3,
  acheivmentcard4,
} from "../../assets/image";
import CountUp from "react-countup";

const Achievment = () => {
  return (
    <>
      <div className="max-w-[100%] mx-auto py-[40px] my-11 bg-[url(https://ik.imagekit.io/HoneyJoe/Eduvault/Eduvault/fact_bg.jpg?updatedAt=1724603723440)]">
        <div className="w-[90%] mx-auto grid grid-cols-1">
          <div>
            <div className="flex py-2">
              <p className="py-1 px-3 bg-[#E7EFFC] text-[#1176F0] rounded-lg font-[poppins] font-medium">
                Worldwide Our Achievment
              </p>
            </div>
            <div className="flex pt-2 pb-7">
              <p className="font-[poppins] font-semibold text-[30px] text-black">
                Grow You Skills To
                Advance Your <span className="text-[#1176F0] underline"> Career Path</span> 
              </p>
            </div>
            <div className=" grid xl:grid-cols-4 gap-5 md:grid-cols-2 lg:grid-cols-2 grid-cols-1">
              <div className="bg-white flex flex-col items-center justify-center px-16 lg:px-20 py-12 gap-4 rounded-lg " id="certi">
                <div className="flex flex-col items-center w-full gap-3">
                  <div>
                    <img src={acheivmentcard} alt="" />
                  </div>
                  <div className="flex flex-col gap-0 items-center">
                    <CountUp
                      end={325200}
                      decimal=","
                      duration={3}
                      className="font-[poppins] font-semibold text-[#082a5e] text-[30px]"
                    ></CountUp>
                    <div>
                      <p className="font-[poppins] text-base text-[#39557e]">
                        Students Enrolled
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white flex flex-col items-center justify-center px-16 lg:px-20 py-12 gap-4 rounded-lg " id="certi">
                <div className="flex flex-col justify-center items-center w-full gap-3">
                  <div>
                    <img src={acheivmentcard2} alt="" />
                  </div>
                  <div className="flex flex-col gap-0 items-center">
                    <CountUp
                      end={11399}
                      decimal=","
                      duration={3}
                      className="font-[poppins] font-semibold text-[#082a5e] text-[30px]"
                    ></CountUp>
                    <div>
                      <p className="font-[poppins] text-base text-[#39557e]">
                        Top Class Courses
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white flex flex-col items-center justify-center px-16 lg:px-20 py-12 gap-4 rounded-lg " id="certi">
                <div className="flex flex-col items-center w-full gap-3">
                  <div>
                    <img src={acheivmentcard3} alt="" />
                  </div>
                  <div className="flex flex-col gap-0 items-center">
                    <CountUp
                      end={312}
                      decimal=","
                      duration={3}
                      className="font-[poppins] font-semibold text-[#082a5e] text-[30px]"
                    ></CountUp>
                    <div>
                      <p className="font-[poppins] text-base text-[#39557e]">
                        World Countries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white flex flex-col items-center justify-center px-16 lg:px-20 py-12 gap-4 rounded-lg " id="certi">
                <div className="flex flex-col items-center w-full gap-3">
                  <div>
                    <img src={acheivmentcard4} alt="" />
                  </div>
                  <div className="flex flex-col gap-0 items-center">
                    <CountUp
                      end={590}
                      decimal=","
                      duration={3}
                      className="font-[poppins] font-semibold text-[#082a5e] text-[30px]"
                    ></CountUp>
                    <div className="flex flex-nowrap">
                      <p className="font-[poppins] text-base text-[#39557e]">
                        Award We Received
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievment;
