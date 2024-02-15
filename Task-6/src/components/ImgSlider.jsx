import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
  var settings = {
    centerMode: true,
    cencenterPadding: "60px",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
  };
  return (
    <div className="mx-44 overflow-hidden">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div
            key={index}
            className="flex items-center px-2 justify-center h-[60vh]"
          >
            <img
              src={item}
              alt="image"
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImgSlider;

const images = [
  "https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Appliances-TVs/DesktopEN.gif",
  "https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Home/DesktopEN.png",
  "https://eg.jumia.is/cms/Week7-8-2024/CAT-UN/Fashion/Defacto/DesktopEN.png",
];
