import React from "react";

const Hard = () => {
  return (
    <div className=" max-w-[100%] mx-auto py-[40px]">
      <div className=" w-[90%] mx-auto">
        <div className=" mb-10 space-y-4">
          <div className="flex">
            <h1 className="text-[14px] lg:text-[16px]  text-[#1176F0] text-center py-1 px-3 bg-[#E7EFFC] rounded-lg">
              WORK PROCESS
            </h1>
          </div>
          <h2 className="text-[22px] lg:text-[30px]  font-[poppins] font-bold">
            Working Process For{" "}
            <span className="text-[#1176F0] underline">Technology</span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-10">
          <div className="flex flex-col items-center text-center">
            <div className=" border-gray-200 rounded-full p-5 border-2 hover:border-[#1176F0] hover:border-dashed">
              <img
                src="https://ik.imagekit.io/sri05/process-icon-1.png?updatedAt=1721740548295"
                alt="2"
                className="hover:animate-flip-vertical-right"
              />
            </div>
            <h1 className="text-[23px] font-semibold mt-3">Select A Project</h1>
            <p className="text-gray-600 text-[16px]">
              We have the technology and IT expertise to develop.
            </p>
          </div>

          <img
            src="https://ik.imagekit.io/sri05/Vector%205.png?updatedAt=1721744341189"
            alt=""
            className="hidden lg:block w-24"
          />

          <div className="flex flex-col items-center text-center">
            <div className=" border-gray-200 rounded-full p-5 border-2 hover:border-blue-500 hover:border-dashed">
              <img
                src="https://ik.imagekit.io/sri05/process-icon-1.png?updatedAt=1721740548295"
                alt="2"
                className="hover:animate-flip-vertical-right"
              />
            </div>
            <h1 className="text-[23px] font-semibold mt-3">Project Analysis</h1>
            <p className="text-gray-600 text-[16px]">
              We have the technology and IT expertise to develop.
            </p>
          </div>

          <img
            src="https://ik.imagekit.io/sri05/Vector%206.png?updatedAt=1721744341299"
            alt=""
            className="hidden lg:block w-24"
          />

          <div className="flex flex-col items-center text-center">
            <div className=" border-gray-200 rounded-full p-5 border-2 hover:border-blue-500 hover:border-dashed">
              <img
                src="https://ik.imagekit.io/sri05/process-icon-1.png?updatedAt=1721740548295"
                alt="2"
                className="hover:animate-flip-vertical-right"
              />
            </div>
            <h1 className="text-[23px] font-semibold mt-3">Start Process</h1>
            <p className="text-gray-600 text-[16px]">
              We have the technology and IT expertise to develop.
            </p>
          </div>

          <img
            src="https://ik.imagekit.io/sri05/Vector%205.png?updatedAt=1721744341189"
            alt=""
            className="hidden lg:block w-24"
          />

          <div className="flex flex-col items-center text-center">
            <div className=" border-gray-200 rounded-full p-5 border-2 hover:border-blue-500 hover:border-dashed">
              <img
                src="https://ik.imagekit.io/sri05/process-icon-1.png?updatedAt=1721740548295"
                alt="2"
                className="hover:animate-flip-vertical-right"
              />
            </div>
            <h1 className="text-[23px] font-semibold mt-3">Deliver Result</h1>
            <p className="text-gray-600 text-[16px]">
              We have the technology and IT expertise to develop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hard;
