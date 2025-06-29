import React from "react";

const Footer = () => {
  return (
    <div className="px-4">
      <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 rounded-[52px]">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16">
            {/* Left Side - Brand */}
            <div className="space-y-8">
              <div className="text-[#C5FF41] font-bw-gradual text-[34px] font-extrabold">
                DEVLOP.ME
              </div>
            </div>

            {/* Right Side - Heading and Contact Info and Links */}
            <div className="space-y-8 w-full">
              <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white">
                As you can
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-42">
                {/* Say Hello Column */}
                <div className="space-y-4 ">
                  <h3 className="text-[#757575] text-base font-bold mb-5 whitespace-nowrap">
                    Say hello
                  </h3>
                  <div className="space-y-2 mb-12">
                    <p className="text-[#E4E4E4] text-base lg:whitespace-nowrap">
                      HELLO@DEVLOP-ME.COM
                    </p>
                    <p className="text-[#E4E4E4] text-base">MAHBUB@ME.COM</p>
                  </div>
                  <div className="space-y-2 pt-4">
                    <h4 className="text-[#757575] text-base font-bold">Call</h4>
                    <p className="text-[#E4E4E4] text-base whitespace-nowrap">
                      +78549 4981 00
                    </p>
                    <p className="text-[#E4E4E4] text-base whitespace-nowrap">
                      +8845 0100 911
                    </p>
                  </div>
                </div>

                {/* Menu Column */}
                <div className="space-y-4">
                  <h3 className="text-[#757575] text-base font-bold mb-5">
                    Menu
                  </h3>
                  <nav className="space-y-3">
                    <a
                      href="#"
                      className="block text-[#E4E4E4] text-base hover:text-[#C5FF41] transition-colors"
                    >
                      HOME
                    </a>
                    <a
                      href="#"
                      className="block text-[#E4E4E4] text-base hover:text-[#C5FF41] transition-colors"
                    >
                      ABOUT
                    </a>
                    <a
                      href="#"
                      className="block text-[#E4E4E4] text-base hover:text-[#C5FF41] transition-colors"
                    >
                      PORTFOLIO
                    </a>
                    <a
                      href="#"
                      className="block text-[#E4E4E4] text-base hover:text-[#C5FF41] transition-colors"
                    >
                      BLOG
                    </a>
                  </nav>
                </div>

                {/* Social Column */}
                <div className="space-y-4">
                  <h3 className="text-[#757575] text-base font-bold mb-5">
                    Social
                  </h3>
                  <nav className="space-y-3">
                    <a
                      href="#"
                      className="block text-[#E4E4E4] text-base hover:text-[#C5FF41] transition-colors"
                    >
                      TWITTER
                    </a>
                    <a
                      href="#"
                      className="block text-[#E4E4E4] text-base hover:text-[#C5FF41] transition-colors"
                    >
                      INSTAGRAM
                    </a>
                    <a
                      href="#"
                      className="block text-[#E4E4E4] text-base hover:text-[#C5FF41] transition-colors"
                    >
                      FACEBOOK
                    </a>
                    <a
                      href="#"
                      className="block text-[#E4E4E4] text-base hover:text-[#C5FF41] transition-colors"
                    >
                      BEHANCE
                    </a>
                    <a
                      href="#"
                      className="block text-[#E4E4E4] text-base hover:text-[#C5FF41] transition-colors"
                    >
                      DRIBBBLE
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 border-t border-gray-800">
            <div className="text-white font-bw-gradual text-[24px] font-extrabold mb-4 sm:mb-0">
              BESNIK
            </div>

            <div>
              <span className="text-white text-base opacity-50">
                © devlop.me 2025
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-white text-sm">
              <div className="flex gap-4">
                <a
                  href="#"
                  className="hover:text-white transition-colors opacity-50"
                >
                  PRIVACY
                </a>
                <span className="opacity-50">–</span>
                <a
                  href="#"
                  className="hover:text-white transition-colors opacity-50"
                >
                  TERMS
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
