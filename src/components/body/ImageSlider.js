import classes from "./ImageSlider.module.css";
import Carousel from "react-bootstrap/Carousel";

export default function ImageSlider() {
  return (
    <div className={classes.sectionContainer}>
      <div className={classes.rounded}>
        <Carousel variant="dark" controls={false} interval={3000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./../../assets/imgCal01.jpg")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./../../assets/imgCal02.jpg")}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./../../assets/imgCal03.jpg")}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
