import {ArrowRight} from "lucide-react"

const SubscribeBtn = () => {
  return (
    <>
        <div className=" bg-[#1176F0] hover:from-white hover:to-white rounded-lg">
            <div className=" group  flex items-center justify-center px-5 py-3 text-white rounded-lg hover:translate-x-3 transition ">
                <div className=" flex items-center justify-center">
                    <ArrowRight className=" h-5 mx-1 hidden group-hover:block"/> 
                    <button className=" flex items-center font-[poppins] space-x-1 text-[18px] ">Subscribe</button>
                    <ArrowRight className=" h-5 group-hover:hidden"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default SubscribeBtn