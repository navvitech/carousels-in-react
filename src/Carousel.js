import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./assets/carouselImage1.jpg";
import image2 from "./assets/carouselImage2.jpg";
import image3 from "./assets/carouselImage3.jpg";
import image4 from "./assets/carouselImage4.jpg";
import image5 from "./assets/carouselImage5.jpg";
import image6 from "./assets/carouselImage6.jpg";
import "./carousel.css";

const Carousel = () => {
  return (
    <div style={{ margin: "30px" }}>
      <h1>Basic carousel</h1>
      <Slider>
        <div>
          <img src={image1} alt="" style={{ width: "100%", height: "50vh" }} />
        </div>
        <div>
          <img src={image2} alt="" style={{ width: "100%", height: "50vh" }} />
        </div>
        <div>
          <img src={image3} alt="" style={{ width: "100%", height: "50vh" }} />
        </div>
        <div>
          <img src={image4} alt="" style={{ width: "100%", height: "50vh" }} />
        </div>
        <div>
          <img src={image5} alt="" style={{ width: "100%", height: "50vh" }} />
        </div>
        <div>
          <img src={image6} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
