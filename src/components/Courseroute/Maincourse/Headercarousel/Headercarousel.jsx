import Slider from "react-slick";
import { bloghead1440 } from "../../../../assets/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Headercarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "ease-in"
      };
      return (
        <div className="slider-container py-[40px] mt-10">
          <Slider {...settings}>
            <div>
              <img src={bloghead1440} alt="" />
            </div>
            <div>
            <img src={bloghead1440} alt="" />
            </div>
            <div>
            <img src={bloghead1440} alt="" />
            </div>
            
          </Slider>
        </div>
      );
    }


export default Headercarousel
