import SubscribeBtn from "../SubscribeBtn/SubscribeBtn"

const NewsLetter = () => {

  return (
    <>
        <div className="max-w-[100%] mx-auto">
            <div>
                <div className=" text-center bg-[#1176F0] w-full h-full md:p-[100px] py-[70px] px-5">
                    <div className=" flex justify-center flex-col items-center">
                        <span> 
                            <h1 className=" font-[poppins] font-medium text-[#ffffff] bg-[#a6afc349] p-2 px-5 rounded-full text-nowrap">GET LATEST HISTUDY UPDATES</h1>
                        </span>
                        <h1 className="text-[34px] md:text-[44px] font-bold text-white py-[15px] font-[poppins]">Subscribe Our Newsletter</h1>
                        <p className=" xl:px-[285px] font-[poppins] text-[18px] text-white text-lg pb-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, delectus. Accusamus ea dicta culpa soluta nostrum magnam perferendis!</p>
                        <div className="">
                            <div>
                                <div className=" w-fit h-fit md:relative">
                                    <input className=" md:py-5 py-4 md:pr-[420px] rounded-lg pl-5 pr-[110px] mb-3 md:mb-0"  type="text"     placeholder=" Enter Your E-Email"/>
                                    <div className=" md:absolute right-2 md:right-3 md:top-[7px] top-[2.5px] ">
                                        <SubscribeBtn/>
                                    </div>
                                </div>
                            </div>
                            
                            <p className=" text-white font-medium text-[14px] py-5">No ads, No trails, No commitments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewsLetter