// import { ArrowRight } from "lucide-react";
import down from "../../../public/images/down-arrow.png";
import Image from "next/image";
import right from "../../../public/images/right-arrow.png";
import rightBlack from "../../../public/images/right-black.png";

const Work = () => {
  // Process cards data
  const processCards = [
    {
      id: 1,
      title: "Discovery",
      description:
        "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
      isHighlighted: false,
    },
    {
      id: 2,
      title: "Strategy",
      description:
        "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.",
      isHighlighted: true,
    },
    {
      id: 3,
      title: "Design",
      description:
        "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
      isHighlighted: false,
    },
    {
      id: 4,
      title: "Build",
      description:
        "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
      isHighlighted: false,
    },
  ];

  return (
    <div className="bg-[#141414] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-18">
          <div className="flex items-center gap-2">
            <Image src={down} alt="down nav" />
            <span className="text-sm font-medium border-2 border-white text-white px-[20px] py-[10px] rounded-[40px]">
              Work Process
            </span>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[58px] font-bold ml-24">
              My Work Process
            </h2>
          </div>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {processCards.map((card) => (
            <div
              key={card.id}
              className={`${
                card.isHighlighted
                  ? "bg-[#C5FF41] text-black rotate-4"
                  : "bg-black text-white"
              } rounded-[30px] p-6 relative`}
            >
              <div className={`flex items-center justify-between mb-11`}>
                <span
                  className={`${
                    card.isHighlighted
                      ? "bg-black text-white text-[20px] px-8 py-2 rounded-[20px]"
                      : "bg-[#C5FFEE] text-black text-[20px] px-8 py-2 rounded-[20px]"
                  }`}
                >
                  {card.title}
                </span>
                <div
                  className={`flex items-center gap-2 ${
                    card.isHighlighted
                      ? "text-gray-700 hover:text-black"
                      : "text-gray-400 hover:text-white"
                  } cursor-pointer transition-colors`}
                >
                  {card.isHighlighted ? (
                    <Image src={rightBlack} alt="nav" />
                  ) : (
                    <Image src={right} alt="nav" />
                  )}

                  <span
                    className={`${
                      card.isHighlighted ? "text-black" : "text-white"
                    } text-base  underline`}
                  >
                    Read More
                  </span>
                </div>
              </div>
              <p
                className={`${
                  card.isHighlighted
                    ? "text-black text-sm"
                    : "text-white text-lg"
                } leading-relaxed`}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
