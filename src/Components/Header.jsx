import { Carousel } from "@material-tailwind/react";
import sliderOne from "../../public/images/diagram-home-page/slider1.jpg";
import sliderTow from "../../public/images/diagram-home-page/slider2.jpg";
import sliderTheree from "../../public/images/diagram-home-page/slider4.png";
import sliderFour from "../../public/images/diagram-home-page/slider3.jpg";
const Header = () => {
  return (
    <div className="md:h-[800px]  pb-8 pt-14">
      <Carousel className="rounded-xl">
        <img
          src={sliderOne}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={sliderTow}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src={sliderTheree}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src={sliderFour}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default Header;
