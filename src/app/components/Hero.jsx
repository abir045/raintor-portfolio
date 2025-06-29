import Image from "next/image";
import React from "react";
import gradient from "../../../public/images/gradient.png";
import fb from "../../../public/images/fb.png";
import ig from "../../../public/images/ig.png";
import tw from "../../../public/images/tw.png";
import line from "../../../public/images/Line.png";
import call from "../../../public/images/call.png";

const Hero = () => {
  return (
    <div className="px-[50px] md:-mt-24 -mt-10">
      <div className="relative">
        <Image src={gradient} alt="gradient" className="w-full h-auto" />

        <div className="absolute lg:top-[15%] top-[65%] md:top-[30%]">
          <h1 className="lg:text-[78px] text-2xl sm:text-4xl md:text-4xl  font-bold  lg:leading-[126px]">
            Trusted{" "}
            <span className="bg-black  text-white rounded-[11px]">Partner</span>{" "}
            for
          </h1>
        </div>

        <div className="absolute md:top-[50%] lg:top-[32%] top-[85%]">
          <h1 className="lg:text-[78px] text-2xl sm:text-4xl md:text-4xl font-bold lg:leading-[126px]">
            {" "}
            Your Website{" "}
            <span className="bg-black text-white rounded-[11px]">Develop.</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-between absolute lg:top-[55%] mt-[100px] md:mt-0">
          {/*left  */}
          <div className="flex items-end">
            <div className="h-[33px] text-orientation-mixed -rotate-90 text-sm text-gray-600 mr-[22px]">
              @williamrey
            </div>

            {/* Social icons */}
            <div className="flex flex-col items-center  mr-[250px]">
              <div className="w-6 h-6 mb-4">
                <Image src={tw} alt="twitter" />
              </div>
              <div className="w-6 h-6 mb-4">
                <Image src={ig} alt="instagram" />
              </div>
              <div className="w-6 h-6 mb-4">
                <Image src={fb} alt="facebook" />
              </div>
              <div className="flex flex-col items-center w-6 h-4 ">
                <Image src={line} alt="line" />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="mt-24 md:mt-0">
            <p className="text-[18px] text-gray-700 mb-[42px] leading-relaxed">
              Building the world's best marketing websites for over a decade.
              <br />
              Your trusted partner for strategy, design, and dev.
            </p>

            <button className="flex items-center space-x-3 bg-white border-2 border-black rounded-full px-6 py-3 hover:bg-gray-50 transition-colors">
              <div className="w-[54px] h-[54px]  border border-black rounded-full flex items-center justify-center -ml-6">
                <Image src={call} alt="call" className="" />
              </div>
              <span className="text-[18px] text-black">Schedule a Call</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
