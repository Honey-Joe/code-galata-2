
const PopularTag = () => {
  return (
    <>
        <div>
            <div className=" p-7 shadow-md border-2 my-10">
                <h1 className=" font-[poppins] text-lg relative pb-2 text-[#082A5E] font-bold">Popular Tags
                    <div className=" absolute w-7 h-1 bg-[#417fdb] bottom-0 rounded-lg">

                    </div>
                </h1>
                <div className=" flex flex-wrap gap-5 pt-6">
                    <p className=" text-[#1363DF] bg-[#1365df38] px-3 py-2 text-[15px] rounded-md hover:text-white hover:bg-[#1363DF] transition-colors">Apps</p>
                    <p className=" text-[#1363DF] bg-[#1365df38] px-3 py-2 text-[15px] rounded-md hover:text-white hover:bg-[#1363DF] transition-colors">Art & Design</p>
                    <p className=" text-[#1363DF] bg-[#1365df38] px-3 py-2 text-[15px] rounded-md hover:text-white hover:bg-[#1363DF] transition-colors">Courses</p>
                    <p className=" text-[#1363DF] bg-[#1365df38] px-3 py-2 text-[15px] rounded-md hover:text-white hover:bg-[#1363DF] transition-colors">Education</p>
                    <p className=" text-[#1363DF] bg-[#1365df38] px-3 py-2 text-[15px] rounded-md hover:text-white hover:bg-[#1363DF] transition-colors">Learning</p>
                    <p className=" text-[#1363DF] bg-[#1365df38] px-3 py-2 text-[15px] rounded-md hover:text-white hover:bg-[#1363DF] transition-colors">Programming</p>
                    <p className=" text-[#1363DF] bg-[#1365df38] px-3 py-2 text-[15px] rounded-md hover:text-white hover:bg-[#1363DF] transition-colors">UI/UX</p>
                    <p className=" text-[#1363DF] bg-[#1365df38] px-3 py-2 text-[15px] rounded-md hover:text-white hover:bg-[#1363DF] transition-colors">Video</p>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default PopularTag