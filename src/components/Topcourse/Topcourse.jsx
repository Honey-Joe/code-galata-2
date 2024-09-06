import Coursecarddata from "../../API/Coursecarddata";
import Topcoursecard from "../Topcoursecard/Topcoursecard";

const Topcourse = () => {
  return (
    <>
      <div classname="max-w-[100%] mx-auto py-[20px] lg:py-[40px]">
        <div className="w-[90%] grid grid-cols-1 lg:grid-cols-2 mx-auto my-11">
          <div className="flex items-start flex-col gap-3">
            <div className="bg-[#2f55ef40] px-4 rounded-full py-2 flex items-start">
              <p className="font-[poppins] text-[14px] font-medium text-[#1176F0]">
                Top Courses
              </p>
            </div>
            <div>
              <p className="font-[poppins] font-bold  text-[24px]  md:text-[34px] text-[#192335]">
                More Course By{" "}
                <span className="text-[#1176F0] underline">Code Gallata</span>
              </p>
            </div>
          </div>
          <div className="flex py-5 lg:pt-10">
            <div>
              <a
                href="#_"
                class="relative inline-flex items-center justify-center p-4 px-10 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#e6e3f1] rounded-lg group"
              >
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#1176F0] group-hover:translate-x-0 ease">
                  View all Course
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-[#192335] transition-all duration-300 transform group-hover:translate-x-full ease">
                  View all Course
                </span>
                <span class="relative invisible">Button Text</span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-[90%] grid grid-cols-1 lg:grid-cols-3 mx-auto gap-8">
              {
                Coursecarddata.map((e)=>{
                  return(
                    <>
                    <Topcoursecard
                       imgurl = {e.imgurl}
                       review = {e.review}
                       coursetitle = {e.coursetitle}                       
                       lesson = {e.lesson}
                       description = {e.description}
                       stud = {e.stud}
                       price = {e.price}
                    ></Topcoursecard>
                    </>
                  )
                })
              }
            
        </div>
      </div>
    </>
  );
};

export default Topcourse;
