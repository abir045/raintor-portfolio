"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import downArrow from "../../../public/images/down-arrow.png";
import left from "../../../public/images/left-arrow.png";
import right from "../../../public/images/right-arrow.png";
import reactLogo from "../../../public/images/react-logo.png";

const SkillsSection = () => {
  const skills = [
    {
      id: 1,
      title: "HTML & CSS",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
      icon: reactLogo,
    },
    {
      id: 2,
      title: "JavaScript",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
      icon: reactLogo,
    },
    {
      id: 3,
      title: "Webflow",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
      icon: reactLogo,
    },
    {
      id: 4,
      title: "React",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
      icon: reactLogo,
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 rounded-3xl mx-4 sm:mx-6 lg:mx-8 md:mt-80 mt-[600px] lg:mt-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16">
          <div className="mb-8 lg:mb-0">
            {/* Badge */}
            <div className="inline-flex items-center  px-4 py-2 mb-10">
              <Image
                src={downArrow}
                className="w-[44px] h-[44px] -ml-4"
                alt="down-arrow"
              />
              <button className="text-base text-white px-[20px] py-[10px]  border-2 rounded-[40px]">
                Why Choose me
              </button>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[58px] font-bold ">
              My Extensive
              <br />
              List of Skills
            </h2>
          </div>

          {/* Right side content */}
          <div className="lg:max-w-md">
            <p className="text-white text-lg leading-relaxed mb-5">
              Building the worlds best marketing Your trusted partner for
              strategy, design, and dev.
            </p>

            <hr className="text-white " />

            {/* Custom Navigation arrows */}
            <div className="flex space-x-4 mt-9">
              <button className="skills-swiper-button-prev w-[60px] h-[60px]  border border-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Image src={left} alt="left-nav" />
              </button>
              <button className="skills-swiper-button-next w-[60px] h-[60px]  border border-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Image src={right} alt="right-nav" />
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: ".skills-swiper-button-next",
              prevEl: ".skills-swiper-button-prev",
            }}
            pagination={{
              el: ".skills-swiper-pagination",
              clickable: true,
              bulletClass:
                "swiper-pagination-bullet bg-gray-600 w-2 h-2 rounded-full mx-1 cursor-pointer transition-colors",
              bulletActiveClass: "swiper-pagination-bullet-active bg-white",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            loop={true}
            className="skills-swiper"
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={skill.id}>
                <div
                  className={`bg-[#141414] rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 h-full ${
                    index === 1 ? "transform rotate-6 hover:rotate-0" : ""
                  }`}
                >
                  {/* Icon */}
                  <Image
                    className="text-white  mb-6"
                    alt="logo"
                    src={skill.icon}
                  />

                  {/* Title */}
                  <h3 className="text-[26px] font-bold mb-5 text-white">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white text-base leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination for Mobile */}
          {/* <div className="skills-swiper-pagination flex justify-center mt-8 lg:hidden"></div> */}
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          .skills-swiper .swiper-slide {
            height: auto;
          }

          .skills-swiper-pagination .swiper-pagination-bullet {
            background-color: #4b5563;
            opacity: 1;
          }

          .skills-swiper-pagination .swiper-pagination-bullet-active {
            background-color: white;
          }
        `}</style>
      </div>
    </div>
  );
};

export default SkillsSection;
