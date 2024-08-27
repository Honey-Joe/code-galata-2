import { dimg } from "../../../assets/image"
import { User,CalendarDays,MessageCircle,Search} from "lucide-react"
import DuringThisProgram from "../DuringThisProgram/DuringThisProgram"
const BlogDetails = () => {
  return (
    <>
        <div className=" max-w-[100%]">
            <div className=" w-[90%] mx-auto">
                <div className=" grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className=" py-10 col-span-2">
                        <div>
                            <img src={dimg} alt="DetailsImage" className=" rounded-lg w-full"/>
                        </div>
                        <div className=" flex gap-5 items-center py-5">
                            <div className="flex items-center gap-2">
                                <User className=" stroke-1 w-5 stroke-[#1390EB]"/>
                                <p className=" font-[poppins] text-sm text-[#39557e]">Code Galatta</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <CalendarDays className=" stroke-1 w-5 stroke-[#1390EB]"/>
                                <p className=" font-[poppins] text-sm text-[#39557e]">June 22, 2023</p>
                            </div>
                            <div className="flex items-center gap-2">
                        <div className=" flex gap-2 md:gap-5 items-center py-5 flex-wrap">
                            <div className=" flex items-center gap-1 md:gap-2 text-nowrap">
                                <User className=" stroke-1 w-5 stroke-[#1390EB]"/>
                                <p className=" font-[poppins] text-sm text-[#39557e]">Code Galatta</p>
                            </div>
                            <div className=" flex items-center gap-1 md:gap-2 text-nowrap">
                                <CalendarDays className=" stroke-1 w-5 stroke-[#1390EB]"/>
                                <p className=" font-[poppins] text-sm text-[#39557e]">June 22, 2023</p>
                            </div>
                            <div className=" flex items-center gap-1 md:gap-2 text-nowrap">
                                <MessageCircle className=" stroke-1 w-5 stroke-[#1390EB]"/>
                                <p className=" font-[poppins] text-sm text-[#39557e]">No Comments</p>
                            </div>
                        </div>
                        <p className=" text-[#39557e] font-[hindu]">Horem ipsum dolor sitter metting Great consectetur adipiscing idealorem ipsum dolor sitter mettingtablished of a page when lookinThe point of using Lorem Ipsu ss normal distribution.est, qui dolor emr ipsum quia dolor sit ame consec tetur. Esse mo lestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et ac cumsan et iusto odio dignissim qui blandit praesent consectetur adipiscing idealorem.</p>
                        <div className=" bg-[#F1F8FF] border-l-[6px] border-[#1363DF] my-10"> 
                            <h1 className=" md:py-12 md:px-12 px-8 py-8 lg:pr-40 text-lg md:text-xl text-[#39557E] font-bold">“ urabitur varius eros rutrum consequat Mauris sollicitudin enim condimentum luctus enim justo non molestie nisl ”</h1>
                        </div>
                        <DuringThisProgram/>
                    </div>

                    <div className=" py-10">
                        <form action="get" className=" w-full">
                            <div className=" relative">
                                <input type="text" className=" shadow-md p-4 w-full rounded-lg outline-none border-2" placeholder=" Search here"/>
                                <Search className=" absolute top-4 right-4 stroke-[#1390EB]"/>
                            </div>
                        </form>
                        {/* Categories card  */}
                        <div className=" p-7 shadow-md border-2 my-10">
                            <h1 className=" font-[poppins] text-lg relative pb-2 text-[#082A5E] font-bold">Categories
                                <div className=" absolute w-7 h-1 bg-[#417fdb] bottom-0 rounded-lg">

                                </div>
                            </h1>
                            <div className=" flex justify-between py-3">
                                <h3 className=" text-[#39557e]">Art & Design</h3>
                                <p className=" text-[#39557e]">1</p>
                            </div>
                            <div className=" flex justify-between">
                                <h3 className=" text-[#39557e]">Business</h3>
                                <p className=" text-[#39557e]">1</p>
                            </div>
                            <div className=" flex justify-between py-3">
                                <h3 className=" text-[#39557e]">Data Science</h3>
                                <p className=" text-[#39557e]">1</p>
                            </div>
                            <div className=" flex justify-between">
                                <h3 className=" text-[#39557e]">Finance</h3>
                                <p className=" text-[#39557e]">1</p>
                            </div>
                        </div>
                        {/* Categories Card  End*/}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogDetails