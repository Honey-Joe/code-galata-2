import { TrendingCardApi } from "../../../API/TrendingCardApi";
import TrendingCard from "../TrendingCard/TrendingCard";

const TrendingArticles = () => {
  return (
    <>
<<<<<<< HEAD
        <div className=" 2xl:container mx-auto">
            <div className=" w-[90%] mx-auto">
                <div className=" grid grid-cols-1 md:grid-cols-3">
                    <div>
                        
                    </div>
                    <div className=" col-span-2">
                        <div>
                            <h1 className=" text-[28px] font-[poppins] font-bold py-2">Trending Articles</h1>
                            <hr className=" mb-2 p-[1.2px] bg-[#E3E3E3]"/>
                        </div>
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                            {
                                TrendingCardApi.map((e,index)=>{
                                    return(
                                        <> 
                                            <div key={index}>
                                                <TrendingCard timg={e.timg}
                                                    view={e.view}
                                                    desc={e.desc}
                                                    name={e.name}
                                                    year={e.year}
                                                    ctn={e.ctn}
                                                />
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
=======
      <div className="">
        <div className=" w-[100%] mx-auto">
          <div>
            <h1 className=" text-[28px] font-[poppins] font-bold">
              Trending Articles
            </h1>
            <hr className=" mb-2 p-[1.2px] bg-[#E3E3E3]" />
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
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
>>>>>>> 34ad3f4ebb5c3ca17b5fba5e9c0c9d181f6c9d57
        </div>
      </div>
    </>
  );
};

export default TrendingArticles;
