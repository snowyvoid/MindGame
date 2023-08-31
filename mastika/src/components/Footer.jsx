import React from "react";

const Footer = () => {
  return (
    <div>
      <section className=" relative">
        <div>
          <img src="./images/footer-flowers-large.2f0e5da0.svg" alt="" />
        </div>
        <div className="bg-[#4c7f7f] pt-[28px] pr-[20px]    w-[100%]">
          <div className="justify-between flex">
            <div className="flex flex-col ml-[40px] w-[25%]">
              <img
                src="./images/footerlogo.svg"
                alt=""
                width="130px"
                className="cursor-pointer"
              />
              <p className="text-[16px] leading-[28px] mt-[16px] mb-[26px] text-[#f6efed] font-mulish">
                Self-care for your mental health
              </p>
              <div className="flex gap-x-4">
                <a href="">
                  <img src="./images/instalogo.svg" alt="" />
                </a>
                <a href="">
                  <img src="./images/tiktok.svg" alt="" />
                </a>
                <a href="">
                  <img src="./images/twitter.svg" alt="" />
                </a>
                <a href="">
                  <img src="./images/linkdin.svg" alt="" />
                </a>
              </div>
            </div>

            <div className="flex cursor-pointer flex-col   ">
              <h2
                className="text-[18px] leading-[22px]
text-[#f6efed] font-mulish font-bold"
              >
                MindDoc App
              </h2>
              <img
                src="./images/appstore.png"
                alt=""
                width="170px"
                className="mt-6 mb-3"
              />
              <img src="./images/playstore.png" alt="" width="170px" />
            </div>

            <div className="flex cursor-pointer flex-col gap-y-4">
              <h2 className="text-[18px] leading-[22px] text-[#f6efed] font-bold font-mulish">
                For Organizations
              </h2>
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                For Businesses
              </p>
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                For Universities
              </p>
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                For Insurance Companies
              </p>
            </div>

            <div className="flex flex-col cursor-pointer gap-y-4">
              <h2 className="text-[18px] leading-[22px] text-[#f6efed] font-bold font-mulish">
                MindDoc
              </h2>
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                Science
              </p>
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                Press
              </p>
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                Costs
              </p>
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                Career at MindDoc
              </p>
            </div>

            <div className="flex cursor-pointer flex-col gap-y-4">
              <h2 className="text-[18px] leading-[22px] text-[#f6efed] font-bold font-mulish">
                Information
              </h2>
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                Magazine
              </p>
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                FAQs
              </p>
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                Contact
              </p>
            </div>
          </div>
          <div className="flex mt-28 mx-[40px] items-center   justify-between ">
            <div className="flex gap-x-4 mb-[16px] w-[22%]">
              <img src="./images/tuv-logo.0a5b1cd6.svg" alt="" />
              <div className="flex flex-col ">
                <p className="text-[14px] leading-[21px] font-bold text-[#f6efed] font-mulish ">
                  TÜV-certified according to
                </p>
                <p className="text-[14px] leading-[21px] font-bold text-[#f6efed] font-mulish ">
                  ISO/IEC 27001
                </p>
                <a
                  href=""
                  className="text-[14px] leading-[21px] text-[#f6efed] font-mulish "
                >
                  www.tuvsud.com/ms-zert
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-[18px] leading-[22px] text-[#f6efed] font-extrabold font-mulish">
                Legal
              </h2>
            </div>
            <div className="cursor-pointer">
              <h2 className="text-[18px] leading-[22px] text-[#f6efed]  font-mulish">
                Imprint
              </h2>
            </div>
            <div className="cursor-pointer">
              <h2 className="text-[18px] leading-[22px] text-[#f6efed]  font-mulish">
                Privacy Policy
              </h2>
            </div>
            <div className="cursor-pointer">
              <h2 className="text-[18px] leading-[22px] text-[#f6efed]  font-mulish">
                Terms and Conditions
              </h2>
            </div>
            <div className="cursor-pointer">
              <h2 className="text-[18px] leading-[22px] text-[#f6efed]  font-mulish">
                Medical Device
              </h2>
            </div>
            <div>
              <h2 className="text-[18px] leading-[22px]  text-[#f6efed]  font-mulish">
                © 2023 MindDoc Health GmbH
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
