import Homecard from "./Homecard";

const homes = [
  {
    image:
      "https://ik.imagekit.io/HoneyJoe/Eduvault/Eduvault/service-icon-1.png?updatedAt=1724606035073",
    name: "3D Animation Design",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
  {
    image: "https://ik.imagekit.io/HoneyJoe/Eduvault/Eduvault/service-icon-2.png?updatedAt=1724606035246",
    name: "Web Development",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
  {
    image: "https://ik.imagekit.io/HoneyJoe/Eduvault/Eduvault/service-icon-3.png?updatedAt=1724606035083",
    name: "Digital Marketing",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
  {
    image: "https://ik.imagekit.io/HoneyJoe/Eduvault/Eduvault/service-icon-4.png?updatedAt=1724606035083",
    name: "VFX And Video Editing",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
  {
    image: "https://ik.imagekit.io/HoneyJoe/Eduvault/Eduvault/service-icon-5.png?updatedAt=1724606035083",
    name: "Video Editing",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
  {
    image: "https://ik.imagekit.io/HoneyJoe/Eduvault/Eduvault/service-icon-6.png?updatedAt=1724606035083",
    name: "Google Top Ranking",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
];

const Homebody = () => {
  return (
    <div className="max-w-[100%] py-[40px]">
      <div className="w-[90%] mx-auto grid grid-cols-1">
        <div className="">
          <div className=" flex">
          <h1 className="text-[16px] text-[#1176F0] text-center py-1 px-3 bg-[#E7EFFC] rounded-lg font-[poppins]">
            What we Provides?
          </h1>
          </div>
          
          <h2 className="text-[24px] md:text-[34px]  font-semibold py-3 font-[poppins]">
            Provide Interective IT Solution <span className="text-[#1176f0] underline">Business Services</span> 
          </h2>
          <div className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
              {homes.map((home, index) => (
                <Homecard
                  key={index}
                  home={home}
                  className=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homebody;
