import gsap from "gsap";
import React, { useEffect } from "react";
import City from "../components/City";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import SmoothScrollWrapper from "../components/SmoothScrollWrapper";

const contact = () => {
  useEffect(() => {
    gsap.to(".introLine", {
      bottom: "6rem",
      delay: 0.5,
      duration: 1,
    });
  }, []);

  return (
    <Layout>
      <SmoothScrollWrapper>
        <div id="contactWrapper" className="z-30 overflow-hidden relative">
          <div className="section p-5 relative overflow-hidden flex flex-col md:space-y-10 space-y-5 items-center justify-center h-full">
            <h1 className="lg:text-9xl md:text-7xl sm:text-6xl text-5xl text-gray-200 text-center">
              Contact Us
            </h1>
            <hr className="introLine border-1 origin-bottom w-48 rotate-90 bg-gray-100 absolute -bottom-24" />
          </div>

          <div className="section bg-gray-100 pb-10">
            <div className="flex justify-center items-center relative">
              <div className="w-full absolute z-50 grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:px-20 px-5">
                <div>
                  <p className="text-3xl text-cyan-800 font-semibold">01</p>
                  <h3 className="ld:text-5xl md:text-4xl sm:text-3xl text-xl text-gray-800 font-bold">
                    Location
                  </h3>
                  <p className="font-sans md:text-xl sm:text-lg text-base text-gray-700 mt-3 pt-3 border-t border-cyan-800">
                    236, 7th Cross Street, Heritage Jayendra Nagar, Senbakkam,
                    Chennai, Tamilnadu, 600044, India
                  </p>
                </div>
                <div>
                  <p className="text-3xl text-cyan-800 font-semibold">02</p>
                  <h3 className="ld:text-5xl md:text-4xl sm:text-3xl text-xl text-gray-800 font-bold">
                    Reach Us
                  </h3>
                  <div className="grid grid-cols-3 items-center font-sans border-t border-cyan-800 mt-3 pt-3">
                    <h3 className="col-span-1 text-xl text-cyan-800 font-bold">
                      General
                    </h3>
                    <a href="mailto:hello@allume.com" className="col-span-2">
                      <p className="md:text-xl sm:text-lg text-base whitespace-nowrap text-gray-800 hover:text-gray-100 duration-500 before:duration-300 hover:before:opacity-100 before:block before:opacity-0 before:absolute before:-inset-1 before:-skew-y-3 before:bg-cyan-800 relative inline-block">
                        <span className="relative">hello@allume.com</span>
                      </p>
                    </a>
                    <h3 className="col-span-1 text-xl text-cyan-800 font-bold">
                      Jobs
                    </h3>
                    <a href="mailto:careers@allume.com" className="col-span-2">
                      <p className="md:text-xl sm:text-lg text-base whitespace-nowrap text-gray-800 hover:text-gray-100 duration-500 before:duration-300 hover:before:opacity-100 before:block before:opacity-0 before:absolute before:-inset-1 before:-skew-y-3 before:bg-cyan-800 relative inline-block">
                        <span className="relative">careers@allume.com</span>
                      </p>
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-3xl text-cyan-800 font-semibold">03</p>
                  <h3 className="ld:text-5xl md:text-4xl sm:text-3xl text-xl text-gray-800 font-bold">
                    Follow Us
                  </h3>
                  <div className="flex space-x-3 border-t border-cyan-800 mt-3 pt-3">
                    <img src="/icons/facebook.png" className="w-8" alt="" />
                    <img src="/icons/linkedin.png" className="w-8" alt="" />
                    <img src="/icons/twitter.png" className="w-8" alt="" />
                  </div>
                </div>
              </div>
              <City />
            </div>
            <div className="grid grid-cols-7 w-full relative border-black lg:p-10 md:p-7 p-5">
              <div className="md:col-span-3 col-span-7 py-5 text-cyan-800 md:text-7xl sm:text-5xl text-4xl flex items-center">
                Send us a message
              </div>
              <div className="grid grid-cols-2 gap-3 p-5 bg-gray-800 rounded-3xl md:col-span-4 col-span-7 md:text-lg text-sm font-sans">
                <div className="md:col-span-1 col-span-2">
                  <input type="text" name="name" placeholder="Name" id="name" className="p-3 block h-full w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" />
                </div>
                <div className="md:col-span-1 col-span-2">
                  <input type="text" name="company" placeholder="Company" id="company" className="p-3 block h-full w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" />
                </div>
                <div className="md:col-span-1 col-span-2">
                  <input type="email" name="email-address" placeholder="Email" id="email-address" autoComplete="email" className="p-3 block h-full w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" />
                </div>
                <div className="md:col-span-1 col-span-2">
                  <input type="text" name="phone-no" placeholder="Phone" id="phone-no" className="p-3 block h-full w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" />
                </div>
                <div className="col-span-2">
                  <textarea id="message" name="message" rows={6} className="p-3 block w-full resize-none rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" placeholder="How can we help you?"></textarea>
                </div>
                <div className="col-span-2">
                  <button type="submit" className="p-2 w-32 border hover:bg-cyan-600 duration-500 border-cyan-600 text-gray-200 font-bold rounded-full">
                    Send
                  </button>
                </div>
              </div>              
            </div>
          </div>

          <Footer />
        </div>
      </SmoothScrollWrapper>
    </Layout>
  );
};

export default contact;
