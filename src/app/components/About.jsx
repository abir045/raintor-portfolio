import Image from "next/image";
import dg from "../../../public/images/down-gradient.png";
import down from "../../../public/images/down-black.png";
import companies from "../../../public/images/companies.png";

const About = () => {
  return (
    <div className="relative  bg-gray-100">
      {/* Background gradient image */}
      <div className="absolute inset-0">
        <Image alt="gradient" src={dg} className="" priority />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-end mb-8">
            <div className="inline-flex items-center">
              <Image src={down} alt="down nav" />
              <button className="text-sm font-medium text-black px-[20px] py-[10px] border-2 border-black rounded-[40px]">
                About
              </button>
            </div>
          </div>

          {/* Main heading */}
          <div className="mb-4">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[78px]  font-bold text-black lg:leading-[126px] md:mb-10 lg:mb-2">
              I've been{" "}
              <span className="bg-black text-white px-1 py-0 rounded-lg ">
                Developing
              </span>
            </h1>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[78px]  font-bold text-black lg:leading-[126px] mt-4">
              Websites since{" "}
              <span className="bg-black text-white px-1 py-0 rounded-lg ">
                2013
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-18">
            <p className="text-lg sm:text-xl text-black text-center leading-relaxed">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other and recommend the best course
              of action.
            </p>
          </div>

          {/* Companies section */}
          <div className="relative md:flex  gap-[33px]">
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-8">
              PREVIOUSLY
              <br />
              WORKED ON
            </h3>

            {/* logos */}
            <div>
              <Image src={companies} alt="companies" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
