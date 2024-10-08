import YoutubeVid from "../YoutubeVid/YoutubeVid";
import Navtab from "../Navtab/Navtab";
import Righttab from "../Righttab/Righttab";
import Topcourse from "../Topcourse/Topcourse";

const Body = () => {
  return (
    <>
      <div className="max-w-[100%] mx-auto bg-[#FCFCFC]">
        <div className="w-[97%] lg:w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 space-y-5">
          <div>
            <YoutubeVid></YoutubeVid>
            <Navtab></Navtab>
          </div>
          <div className="flex justify-end">
            <Righttab></Righttab>
          </div>
        </div>
        <Topcourse></Topcourse>
      </div>
    </>
  );
};

export default Body;
