import React from "react";
import apple from "../Hero-section/image/Apple logo.png";
import google from "../Hero-section/image/Google Play logo.svg";

function Footer() {
  return (
    <div className="footer-setion  bg-black  w-full min-w-[400px]">
      <div className="footer bg-black max-w-[1600px] mx-auto w-full custom-range:w-full">
        <div className=" sm:px-36 sm:py-28 flex flex-col gap-8 items-center justify-between lg:flex-row cusom-range:px-12 custom-range:py-14 ">
          <div className="footer-heading">
            <p className="text-5xl mb-24">🍕</p>
            <div className="hero-btns custom-range:my-1  my-3 flex gap-2 flex-wrap">
              <div className="apple-btn flex w-[186px] gap-x-3 bg-cardsBg p-4 rounded-lg">
                <div className="img">
                  <img src={apple} alt="" className="" />
                </div>
                <div className="data flex flex-col ">
                  <p className="text-xs">Download on the</p>
                  <p className="font-bold">App Store</p>
                </div>
              </div>
              <div className="apple-btn flex w-[186px] gap-x-3 bg-cardsBg p-4 rounded-lg">
                <div className="img">
                  <img src={google} alt="" className="" />
                </div>
                <div className="data flex flex-col ">
                  <p className="text-xs">Get it on</p>
                  <p className="font-bold">Google Play</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-links text-gray-400">
            <div className="link-heading flex gap-12 font-extralight flex-wrap custom-range:p-5 custom-range:gap-5 ">
              <ul className="flex flex-col gap-y-4 text-[17.7px]">
                <li className="text-white my-3 font-bold ">Quick links</li>
                <li>Feetures</li>
                <li>Food Menu</li>
                <li>Offer</li>
                <li>Review</li>
                <li>Rider</li>
              </ul>
              <ul className="flex flex-col gap-y-4">
                <li className="text-white my-3 font-bold">Get to Know us</li>
                <li>Gift Cards</li>
                <li>DashDoor Stories</li>
                <li>Linkedin </li>
                <li>Glassdoor</li>
                <li>Accessibility</li>
              </ul>
              <ul className="flex flex-col gap-y-4 text-sm">
                <li className="text-white my-3 font-bold">News</li>
                <li>Blog</li>
                <li>FAQ</li>
                <li>Little media</li>
                <li>Press</li>
                <li>Presse kit</li>
              </ul>
              <ul className="flex flex-col gap-y-4">
                <li className="text-white my-3  font-bold">Contact</li>
                <li>Whatsapp</li>
                <li>Support 24</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lower-footer-section flex justify-between px-4  md:px-36 text-gray-400 py-10">
          <div className="footer-left">
            <p>© 2023 pizza.All right reserved</p>
          </div>
          <div className="footer-right">
            <ul className="flex gap-6 flex-wrap">
              <li>Privacy</li>
              <li>Policy</li>
              <li>Term</li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
