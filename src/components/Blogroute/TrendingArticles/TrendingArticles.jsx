import { TrendingCardApi } from "../../../API/TrendingCardApi";
import TrendingCard from "../TrendingCard/TrendingCard";

const TrendingArticles = () => {
  return (
    <>
      <div className="max-w-[100%]">
        <div className="">
          <div>
            <h1 className=" text-[28px] font-[poppins] font-bold">
              Trending Articles
            </h1>
            <hr className=" mb-2 p-[1.2px] bg-[#E3E3E3]" />
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 my-10">
            {TrendingCardApi.map((e, index) => {
              return (
                <>
                  <div key={index}>
                    <TrendingCard
                      timg={e.timg}
                      view={e.view}
                      desc={e.desc}
                      name={e.name}
                      year={e.year}
                      ctn={e.ctn}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingArticles;
