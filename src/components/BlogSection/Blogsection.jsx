import { ArrowRight } from "lucide-react";
import { blogcard1, blogcard2, blogcard3, blogcard4 } from "../../assets/image";
import { Link } from "react-router-dom";

const Blogsection = () => {
  return (
    <>
      <div className="max-w-[100%] mx-auto lg:py-[40px] py-[20px]">
        <div className="w-[90%] grid grid-cols-1 lg:grid-cols-2 mx-auto">
          <div className="flex flex-col gap-4">
            <div className="flex justify-start">
              <p className="px-3 py-1 bg-[#CBD4FB] rounded-full font-[poppins] font-medium text-[14px] text-[#1176f0]">
                BLOG POST
              </p>
            </div>
            <div className="py-5">
              <p className="font-[poppins] text-[24px] md:text-[44px] font-bold text-[#192335]">
                Most Popular Post.
              </p>
            </div>
          </div>
          <div className="flex items-center lg:justify-end">
            <Link to={"/Blog"}>
              <button className="bg-blue-600 py-2 px-4 md:px-8 md:py-4 flex gap-2 items-center text-white rounded-lg font-[poppins] text-[14px] lg:text-[18px]">
                See All Articles <ArrowRight></ArrowRight>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[90%] grid grid-cols-1 gap-10 lg:grid-cols-2 mx-auto my-5">
          <div>
          <Link to={"/Blog"}>
            <div
              className="flex flex-col  hover:scale-[1.01] transition"
              id="certi"
            >
              <div className="rounded-t-lg">
                <img
                  src={blogcard1}
                  alt="blog card1 "
                  className="rounded-t-lg"
                />
              </div>
              <div className="bg-white px-5 py-5 flex flex-col gap-3 rounded-xl">
                <div>
                  <p className="font-[poppins] font-bold text-[20px] md:text-[30px] text-[#192335] hover:text-[#2f57ef]">
                    Difficult Things About Education.
                  </p>
                </div>
                <div>
                  <p className="text-[18px] font-[poppins] text-[#6b7385] ">
                    There are many variations of passages of Lorem Ipsum
                    available,
                  </p>
                </div>
                <div>
                  <button className="flex gap-1 font-[poppins] text-[14px] text-[#192335] items-center">
                    Learn More <ArrowRight size={14}></ArrowRight>
                  </button>
                </div>
              </div>
            </div>
          </Link>
          </div>
          <div className="flex flex-col justify-between gap-2">
            <div>
              <Link to={"/Blog"}>
                <div
                  className="grid grid-cols-1 md:grid-cols-4 bg-white hover:scale-[1.01] transition rounded-lg"
                  id="certi"
                >
                  <div className="col-span-1">
                    <img
                      src={blogcard2}
                      alt="blog card 2"
                      className="rounded-l-lg w-full md:w-fit"
                    />
                  </div>
                  <div className="flex flex-col gap-5 py-5 px-4 justify-center rounded-r-lg col-span-3">
                    <div>
                      <p className="font-[poppins] font-bold text-[20px] md:text-[26px] text-[#192335] hover:text-[#2f57ef]">
                        React
                      </p>
                    </div>
                    <div>
                      <button className="flex gap-1 font-[poppins] text-[14px] font-medium items-center">
                        Learn more <ArrowRight size={14}></ArrowRight>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to={"/Blog"}>
                <div
                  className="grid grid-cols-1 md:grid-cols-4 bg-white hover:scale-[1.01] transition"
                  id="certi"
                >
                  <div className="w-full col-span-1">
                    <img
                      src={blogcard4}
                      alt="blog card 2"
                      className="rounded-l-lg w-full md:w-fit object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-5 py-5 px-4 rounded-r-lg col-span-3 justify-center">
                    <div>
                      <p className="font-[poppins] font-bold text-[20px] md:text-[26px] text-[#192335] hover:text-[#2f57ef]">
                        Why Is Education So Famous?
                      </p>
                    </div>
                    <div>
                      <button className="flex gap-1 font-[poppins] text-[14px] font-medium items-center">
                        Learn more <ArrowRight size={14}></ArrowRight>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to={"/Blog"}>
                <div
                  className="grid grid-cols-1 md:grid-cols-4 bg-white hover:scale-[1.01] transition"
                  id="certi"
                >
                  <div className="col-span-1">
                    <img
                      src={blogcard3}
                      alt="blog card 2"
                      className="rounded-l-lg w-full md:w-fit"
                    />
                  </div>
                  <div className="flex flex-col gap-5 py-5 px-4 justify-center rounded-r-lg col-span-3">
                    <div>
                      <p className="font-[poppins] font-bold text-[20px] md:text-[26px] text-[#192335] hover:text-[#2f57ef]">
                        Education Is So Famous, But Why?
                      </p>
                    </div>
                    <div>
                      <button className="flex gap-1 font-[poppins] text-[14px] font-medium items-center">
                        Learn more <ArrowRight size={14}></ArrowRight>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogsection;
