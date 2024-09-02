import { Clock, FileText, Star, Users } from "lucide-react"

const BlogdetailsHeader = () => {
  return (
    <>
     <div className="max-w-[100%] bg-[#041734]">
        <div className="w-[100%] mx-auto grid grid-cols-1 pt-44 pb-28 bg-[#041734]">
          <div className="w-[90%] mx-auto">
          <div className="flex flex-col gap-3 items-start">
            <div>
              <p className="font-[poppins] font-semibold text-[36px] text-white">
              40 Java Interview Questions for Freshers with Clear & Concise Answers              </p>
            </div>
            <div>
              <p className="font-[poppins] text-base text-[#b2bdcd] font-normal">
              Horem ipsum dolor sitter metting Great consectetur adipiscing idealorem ipsum dolor sitter mettingtablis
              </p>
            </div>
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex items-center gap-2">
                
                <div className="flex">
                  <p className="font-[poppins] text-[#b2bdcd] text-base m-0">
                    Suganth PV
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <FileText className="text-white font-[poppins] w-[18px]" />
                </div>
                <div>
                  <p className="font-[poppins] text-[#b2bdcd] text-base m-0">25</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <Clock className="text-white font-[poppins] w-[18px]" />
                </div>
                <div>
                  <p className="font-[poppins] text-[#b2bdcd] text-base m-0">
                    25h 00m
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <Users className="text-white font-[poppins] w-[18px]" />
                </div>
                <div className="font-[poppins] text-[#b2bdcd] text-base">200</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1 items-center">
                  <Star className="fill-[#1176f6] text-[#1176f6] w-[15px] font-[Tutor]" />
                  <Star className="fill-[#1176f6] text-[#1176f6] w-[15px] font-[Tutor]" />
                  <Star className="fill-[#1176f6] text-[#1176f6] w-[15px] font-[Tutor]" />
                  <Star className="fill-[#1176f6] text-[#1176f6] w-[15px] font-[Tutor]" />
                  <Star className=" text-[#1176f6] w-[15px] font-[Tutor]" />
                </div>
                <div>
                  <p className="text-[#b2bdcd] font-[poppins] m-0">(4.29)</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </div> 
    </>
  )
}

export default BlogdetailsHeader
