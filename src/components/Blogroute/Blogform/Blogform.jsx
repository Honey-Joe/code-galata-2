
const Blogform = () => {
  return (
    <>
     <div className="max-w-[100%]">
        <div className="w-[100%] grid grid-cols-1 my-10 gap-5">
            <div className="flex flex-col gap-3">
                <div>
                    <p className="font-[poppins] text-[26px] font-semibold text-[#082a5e] " >Leave A Reply</p>

                </div>
                <div>
                    <p className="font-[poppins] text-base text-[#39557e]">Your email address will not be published. Required fields are marked *</p>
                </div>
            </div>
            <div>
                <form action="" className=" grid grid-cols-1 gap-3">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div>
                            <input type="text" id="name" placeholder="Enter Name" className="px-3 w-full bg-[#F0F6FC] py-3 border rounded-md"/>
                        </div>
                        <div>
                            <input type="email" name="email" id="email" placeholder="Enter Email" className="px-3 w-full bg-[#F0F6FC] py-3 border rounded-md"/>
                        </div>
                    </div>
                    <div>
                        <input type="text" name="web" id="web" placeholder="Enter website" className="px-3 w-full bg-[#F0F6FC] py-3 border rounded-md" />
                    </div>
                    <div>
                        <textarea name="comment" id="comment" className="px-3 w-full bg-[#F0F6FC] py-3 border rounded-md" placeholder="Enter your comment" rows={5}></textarea>
                    </div>
                    <div>
                        <button className="py-4 px-4 font-[poppins] bg-[#1363DF] text-white font-semibold rounded-lg">POST COMMENT</button>
                    </div>
                </form>
            </div>
        </div>
        </div> 
    </>
  )
}

export default Blogform
