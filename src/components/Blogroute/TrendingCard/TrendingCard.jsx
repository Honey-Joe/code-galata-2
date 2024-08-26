
import { Eye, View } from "lucide-react"
const TrendingCard = (prop) => {
  return (
    <>
        <div className="  shadow-md hover:shadow-lg border-[1.5px] rounded-lg">
            <div className=" relative">
                <div>
                    <img src={prop.timg} alt="Card"/>
                </div>
                <div className=" flex items-center gap-2 bg-white px-3 py-1 w-fit rounded-2xl absolute top-4 right-3">
                    <Eye className=" w-5"/>
                    <p className=" font-[poppins]">{prop.view}</p>
                </div>
            </div>
            <div className="px-3 py-4">
                <h1 className=" font-[poppins] text-[18px] font-bold ">{prop.desc}</h1>
                <p className=" py-2 text-[#A1A1A1]">{prop.name}</p>
                <div className=" w-full flex justify-between">
                    <p className=" text-[#A1A1A1] text-sm font-[poppins]">{prop.year}</p>
                    <p className=" text-slate-500 text-sm font-[poppins]">{prop.ctn}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default TrendingCard