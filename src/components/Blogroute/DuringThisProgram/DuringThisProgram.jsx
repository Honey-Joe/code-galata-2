import { Check, Facebook, Linkedin, Twitter } from "lucide-react";
const DuringThisProgram = () => {
  return (
    <>
      <div>
        <h1 className=" font-bold font-[poppins] text-2xl text-[#082A5E]">
          During This Program{" "}
        </h1>
        <p className=" py-5 font-[hindu] text-[#39557e] leading-6">
          Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
          consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum
          that dolocons rsus mal suada and fadolorit.
        </p>
        <ul className=" md:flex gap-28 items-start">
          <div>
            <li className=" flex gap-2 items-center ">
              <Check className=" bg-[#1363DF] rounded-full p-[2px] stroke-2 stroke-white w-5 h-5" />
              <p className=" text-lg text-[#375583]">Become a UX designer.</p>
            </li>
            <li className=" flex gap-2 items-center py-3">
              <Check className=" bg-[#1363DF] rounded-full p-[2px] stroke-2 stroke-white w-5 h-5" />
              <p className=" text-lg text-[#375583]">
                You will be able to add UX designe
              </p>
            </li>
            <li className=" flex gap-2 items-center">
              <Check className=" bg-[#1363DF] rounded-full p-[2px] stroke-2 stroke-white w-5 h-5" />
              <p className=" text-lg text-[#375583]">Become a UI designer.</p>
            </li>
          </div>
          <div>
            <li className=" flex gap-2 items-center py-3">
              <Check className=" bg-[#1363DF] rounded-full p-[2px] stroke-2 stroke-white w-5 h-5" />
              <p className=" text-lg text-[#375583]">
                Create quick wireframes.
              </p>
            </li>
            <li className=" flex gap-2 items-center">
              <Check className=" bg-[#1363DF] rounded-full p-[2px] stroke-2 stroke-white w-5 h-5" />
              <p className=" text-lg text-[#375583]">
                Downloadable exercise files
              </p>
            </li>
          </div>
        </ul>
        <p className=" text-base text-[#375583] py-5 font-[hindu]">
          Horem ipsum dolor sitter metting Great consectetur adipiscing
          idealorem ipsum dolor sitter mettingtablished of a page when lookinThe
          point of using Lorem Ipsu ss normal distribution.est, qui dolor emr
          ipsum quia dolor sit ame consec tetur. Esse mo lestie consequat, vel
          illum dolore eu feugiat nulla facilisis at vero eros et ac cumsan et
          iusto odio dignissim qui blandit praesent consectetur adipiscing
          idealorem.
        </p>
        <hr />
        <div className="flex justify-between gap-5 py-8 items-center">
          <div className="flex gap-5 items-center">
            <div>
              <p className="font-[poppins] font-semibold text-base text-[#082a5e]">
                Tags:
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-3 py-1 bg-[#e6f2ff] font-[poppins] text-base text-[#39557e] hover:text-white hover:bg-[#39557e] rounded-lg">
                Apps
              </button>
              <button className="px-3 py-1 bg-[#e6f2ff] font-[poppins] text-base text-[#39557e] hover:text-white hover:bg-[#39557e] rounded-lg">
                UX/UI
              </button>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
                <p className="font-[poppins] font-semibold text-base text-[#082a5e]">Social Share:</p>
            </div>
            <div className="flex gap-3 items-center">
                <Facebook size={20} color="#082a5e"></Facebook>
                <Twitter size={20} color="#082a5e"></Twitter>
                <Linkedin size={20} color="#082a5e"></Linkedin>
            </div>
          </div>
        </div>

        <hr />
      </div>
    </>
  );
};

export default DuringThisProgram;
