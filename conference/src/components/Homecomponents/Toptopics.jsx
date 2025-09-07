import React from "react";
import Slider from "react-slick";
import { FaHeartbeat, FaUserNurse, FaRobot, FaLaptopCode, FaFlask, FaAtom, FaLeaf } from "react-icons/fa";

// Topics data with FA icons
const topics = [
  { title: "Medical", icon: <FaHeartbeat /> },
  { title: "Nursing", icon: <FaUserNurse /> },
  { title: "Artificial Intelligence", icon: <FaRobot /> },
  { title: "Technology", icon: <FaLaptopCode /> },
  { title: "Chemistry", icon: <FaFlask /> },
  { title: "Physics", icon: <FaAtom /> },
  { title: "Biology", icon: <FaLeaf /> },
];

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 rounded-full shadow cursor-pointer z-10"
    onClick={onClick}
  >
    ➡️
  </div>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-0 -translate-y-1/2 bg-white p-2 rounded-full shadow cursor-pointer z-10"
    onClick={onClick}
  >
    ⬅️
  </div>
);

const Toptopics = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-8 px-4 relative">
      <Slider {...settings}>
        {topics.map((topic, index) => (
          <div key={index} className="px-2">
            <div className="flex flex-col items-center justify-center h-40 rounded-lg 
              bg-gradient-to-r from-purple-500 to-purple-800 text-white shadow-lg relative
              hover:scale-105 transition-transform">
              <div className="text-3xl mb-2">{topic.icon}</div>
              <h3 className="font-bold text-center">{topic.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Toptopics;
