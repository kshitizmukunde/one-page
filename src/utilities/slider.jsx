import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import profile1 from "../assets/profile1.png";
import quoteimg from "../assets/quote-img.png";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="next-arrow" onClick={onClick}>
      <HiArrowLongRight size={24} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="prev-arrow" onClick={onClick}>
      <HiArrowLongLeft size={24} />
    </div>
  );
};

const SlideContent = [
    {
        name: "Floyd Miles",
        company: "eBay",
        quote: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
        profile_img: profile1,
    },
    {
        name: "Faizan Sheikh",
        company: "Google",
        quote: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
        profile_img: profile1,
    },
    {
        name: "Radhe Shyam",
        company: "Jafar Sharbats",
        quote: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
        profile_img: profile1,
    }
]

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
        {SlideContent.map((slide, index) => (
            <div key={index} className="slide lg:pb-22 md:pb-22 sm:pb-20 pb-20 gap-8 flex-wrap items-start justify-center sm:justify-center md:justify-start">
                <div className="testi-profile lg:mt-14 flex items-center gap-4 lg:w-[calc(44%-16px)]">
                    <div className="profile-img ">
                        <img src={profile1} alt="Profile Image"/>
                    </div>
                    <div className="name-company">
                        <h3 className="name text-center sm:text-center md:text-center lg:text-left xl:text-left text-white mb-1.5">{slide.name}</h3>
                        <p className="company text-center sm:text-center md:text-left lg:text-left xl:text-left">{slide.company}</p>
                    </div>
                </div>
                <div className="testimonial-content pt-11 relative flex lg:w-[calc(56%-16px)]">
                    <h4 className="quote-grp lg:text-start md:text-start sm:text-center text-center">
                        {slide.quote}
                    </h4>
                    <img src={quoteimg} alt="quote-img"/>
                </div>
            </div>
        ))}
    </Slider>
  );
}