import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewSectionCard from "./ReviewSectionCard";

function ReviewSection() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    autoplay: false,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-[100%] mx-auto py-[20px] lg:py-[40px]">
        <div className= "w-[95%] md:w-[90%] mx-auto grid grid-cols-1 my-11 gap-4 px-5 py-2">
          <div className="flex items-center">
            <div className='px-5 py-[5px] rounded-3xl bg-[#1176F0] relative left-3'>

                </div>
            <div className="px-4 py-2 border-[1px] border-[#1176F0] rounded-3xl">
                <p className="font-[poppins] font-bold text-base text-center">Testimonial</p>
            </div>
          </div>
          <div>
            <p className="font-[poppins] font-bold text-[24px] md:text-[34px]">WHAT OUR <span className="text-[#1176F0] underline">CUSTOMER SAYS</span></p>
          </div>
          <div className="slider-container ">
            <Slider {...settings}>
              <div>
                <h3>
                  <ReviewSectionCard></ReviewSectionCard>
                </h3>
              </div>
              <div>
                <h3>
                  <ReviewSectionCard></ReviewSectionCard>
                </h3>
              </div>
              <div>
                <h3>
                  <ReviewSectionCard></ReviewSectionCard>
                </h3>
              </div>
              <div>
                <h3>
                  <ReviewSectionCard></ReviewSectionCard>
                </h3>
              </div>
              <div>
                <h3>
                  <ReviewSectionCard></ReviewSectionCard>
                </h3>
              </div>
              <div>
                <h3>
                  <ReviewSectionCard></ReviewSectionCard>
                </h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewSection;
