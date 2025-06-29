"use client";
import { useState } from "react";
import bg from "../../../public/images/bottom-gradient.png";
import Image from "next/image";
import down from "../../../public/images/down-black.png";
import call from "../../../public/images/call.png";
import send from "../../../public/images/send.png";
import message from "../../../public/images/message.png";
import l2 from "../../../public/images/line2.png";
import fh from "../../../public/images/fb-white.png";
import ig from "../../../public/images/insta-white.png";
import tw from "../../../public/images/tw-white.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="gradient background"
          src={bg}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Badge */}

          {/* Main Content Grid */}
          <div className="lg:flex gap-16 items-start">
            {/* Left Column - Heading and CTA */}
            <div className="space-y-8">
              <div className="flex justify-start mb-10">
                <div className="inline-flex items-center ">
                  <Image
                    alt="down arrow"
                    className="w-[44px] h-[44px]"
                    src={down}
                  />
                  <button className="text-base  text-black px-[20px] py-[10px] border-2 border-black rounded-[40px] hover:bg-gray-50 transition-colors">
                    Contact
                  </button>
                </div>
              </div>
              {/* Main heading */}
              <div className="">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[78px] font-bold text-black leading-tight">
                  Interested in
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[78px] font-bold text-black whitespace-nowrap">
                  <span className="bg-black text-white px-2 py-1 rounded-lg inline-block">
                    work
                  </span>{" "}
                  together?
                </h1>
              </div>

              {/* Description */}
              <div className="max-w-lg">
                <p className="text-base sm:text-lg text-black leading-relaxed">
                  We start every new client interaction with an in-depth
                  discovery call where we get to know each other
                </p>
              </div>

              {/* Schedule Call Button */}
              <div className="">
                <button className="flex items-center space-x-3 bg-transparent border-2 border-black rounded-[39px] px-6 py-3 hover:bg-gray-50 transition-colors">
                  <div className="w-[54px] h-[54px]  border border-black rounded-full flex items-center justify-center -ml-6">
                    <Image src={call} alt="call" />
                  </div>
                  <span className="text-[18px] text-black">
                    Schedule a Call
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:max-w-md lg:ml-auto  mt-5 lg:mt-0">
              <div className="bg-black rounded-3xl p-8 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-gray-600 text-white text-lg placeholder-gray-400 py-3 px-0 focus:outline-none focus:border-lime-400 transition-colors"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b opacity-50 border-white  text-white text-lg placeholder-gray-400 py-3 px-0 focus:outline-none focus:border-lime-400 transition-colors"
                      required
                    />
                  </div>

                  {/* Project Description */}
                  <div>
                    <input
                      type="text"
                      name="project"
                      placeholder="Describe your project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-white opacity-50 text-white placeholder-gray-400 py-3 px-0 focus:outline-none focus:border-lime-400 transition-colors resize-none"
                      required
                    />
                  </div>

                  {/* Form Actions */}
                  <div className="md:flex items-center gap-4 pt-4 w-full">
                    <button
                      type="submit"
                      className="bg-black flex items-center gap-2 text-white px-6 py-2 border border-white rounded-[39px] text-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="-ml-6 w-[36px] h-[36px]  border border-white flex items-center justify-center rounded-full">
                        <Image alt="send" src={send} />
                      </div>
                      Send
                    </button>
                    <span className="text-gray-400 text-sm">or</span>
                    <button
                      type="button"
                      className="text-white whitespace-nowrap flex items-center gap-2 border border-white px-6 py-2  rounded-[39px] text-lg   hover:bg-white hover:text-black transition-colors"
                    >
                      <div className="-ml-6 w-[36px] h-[36px]  border border-white flex items-center justify-center rounded-full">
                        <Image alt="message" src={message} />
                      </div>
                      <span className="inline-flex">Contact me</span>
                    </button>
                  </div>
                </form>

                {/* Footer */}
                <div className="flex items-center justify-between mt-18 pt-6 border-t border-gray-700">
                  <span className="text-white opacity-70 text-lg">
                    @williamroy
                  </span>

                  <div className="flex items-center gap-4">
                    <Image src={l2} alt="line" />
                    {/* Social Icons */}
                    <a
                      href="#"
                      className="text-white hover:text-lime-400 transition-colors"
                    >
                      <Image alt="fb" src={fh} />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-lime-400 transition-colors"
                    >
                      <Image src={ig} alt="ig" />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-lime-400 transition-colors"
                    >
                      <Image alt="twitter" src={tw} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
