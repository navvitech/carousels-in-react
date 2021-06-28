import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { data, multiData } from "./data";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const MultiItemCarousel = () => {
  return (
    <div style={{ margin: "30px" }} className="carousel">
      <h1>Basic carousel</h1>
      <Slider
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        slidesToShow={5}
        infinite={false}
        slidesToScroll={3}
      >
        {multiData.map((item) => (
          <Card item={item} />
        ))}
      </Slider>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        className="multi__image"
        src={item}
        alt=""
        style={{
          width: "100%",
          height: "170px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />
      <p style={{ fontSize: "14px", padding: "5px 0" }}>TOP TRNDING TVs</p>
      <p style={{ fontSize: "16px", padding: "5px 0", color: "green" }}>
        From ₹ 7,000
      </p>
      <p style={{ fontSize: "14px", padding: "5px 0", color: "gray" }}>
        Up To ₹ 5,000 Off on HDFC
      </p>
    </div>
  );
};

export default MultiItemCarousel;
