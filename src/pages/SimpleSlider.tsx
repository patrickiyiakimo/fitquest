import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../App.css"; // Import App.css

// Define the type for slider settings
interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  arrows: boolean;
}

const SimpleSlider: React.FC = () => {
  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Show navigation arrows
  };

  return (
    <div className="relative w-full md:w-3/4 lg:w-1/2 mx-auto mt-8">
      <Slider {...settings}>
        <div className="flex items-center justify-center h-48 md:h-64 lg:h-80 bg-blue-500 text-white text-2xl font-bold">
          <figure className="w-full h-full">
            <img
              src="/images/hero image.jpeg"
              alt="trainer-one"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
        <div className="flex items-center justify-center h-48 md:h-64 lg:h-80 bg-green-500 text-white text-2xl font-bold">
          <figure className="w-full h-full">
            <img
              src="/images/trainer-two.jfif"
              alt="trainer-two"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
        <div className="flex items-center justify-center h-48 md:h-64 lg:h-80 bg-red-500 text-white text-2xl font-bold">
          <figure className="w-full h-full">
            <img
              src="/images/trainer-three.jfif"
              alt="trainer-three"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
        <div className="flex items-center justify-center h-48 md:h-64 lg:h-80 bg-purple-500 text-white text-2xl font-bold">
          <figure className="w-full h-full">
            <img
              src="/images/trainer-four.jfif"
              alt="trainer-four"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
        <div className="flex items-center justify-center h-48 md:h-64 lg:h-80 bg-yellow-500 text-white text-2xl font-bold">
          <figure className="w-full h-full">
            <img
              src="/images/trainer-five.jfif"
              alt="trainer-five"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
        <div className="flex items-center justify-center h-48 md:h-64 lg:h-80 bg-pink-500 text-white text-2xl font-bold">
          <figure className="w-full h-full">
            <img
              src="/images/trainer-six.jfif"
              alt="trainer-six"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
