import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BootstrapMulti.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { data, multiData } from "./data";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "white", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "white", fontSize: "30px" }} />
    </div>
  );
};

const BootstrapMultiCarousel = () => {
  return (
    <div
      className="BootstrapMulti"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "80%" }}>
        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          slidesToShow={4}
          slidesToScroll={3}
          dots
        >
          {multiData.map((item) => (
            <Card item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: 20,
        padding: "0 10px",
        width: 220,
        boxShadow: "0 1px 6px 0 rgb(32 33 36 / 28%)",
        borderRadius: 5,
      }}
    >
      <span style={{ float: "right", padding: "5px" }}>
        <FavoriteBorderIcon style={{ color: "gray" }} />
      </span>
      <img
        className="multi__image"
        src={item}
        alt=""
        style={{
          width: "100%",
          height: "120px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />
      <p
        style={{
          fontSize: "18px",
          padding: "5px 0",
          color: "gray",
          fontWeight: 400,
        }}
      >
        Top Trending Tvs
      </p>
      <Rating precision={0.5} size="small" />
      <p>
        <span
          style={{
            textDecoration: "line-through",
            color: "gray",
            marginRight: 7,
            fontWeight: 300,
          }}
        >
          $7170
        </span>
        <span style={{ color: "gray", fontWeight: 700 }}>$7071</span>
      </p>
      <button>Add to cart</button>
    </div>
  );
};

export default BootstrapMultiCarousel;
