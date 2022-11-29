import Link from "next/link";
import React from "react";
import menuLinks from "../../utils/menuLinks";

const Footer = () => {
  return (
    <div id="footer" className="bg-gray-800">
      <div className="grid lg:grid-cols-3 text-gray-100 md:px-32 px-5 py-10">

      <div className="flex pt-10 ">
        <h3 className="text-5xl w-60">Allume Consultancy</h3>
      </div>
      <div className="pt-10 font-sans">
        <ul>
          {menuLinks.map((link, i) => (
            <li key={i} className="text-xl">
              <Link href={link.link} scroll={false} onClick={() => window.location.pathname === link.link && window.location.reload()}>
                <p className="md:text-2xl mb-3 text-xl text-gray-100 duration-500 before:duration-300 hover:before:opacity-100 before:block before:opacity-0 before:absolute before:-inset-1 before:-skew-y-3 before:bg-cyan-600 relative inline-block">
                  <span className="relative">{link.title}</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-10 font-sans">
        <div className="border bg-gray-100 rounded-3xl h-full w-full text-gray-800 flex flex-col md:p-5 p-3 md:space-y-5 space-y-3">
          <div className="flex items-start space-x-3">
            <img src="/icons/location.png" className="w-5 h-5 mt-1" alt="" />
            <p className="w-auto md:text-xl text-base">
              236, 7th Cross Street, Heritage Jayendra Nagar, Senbakkam,
              Chennai, Tamilnadu, 600044, India
            </p>
          </div>
          <hr className="w-full" />
          <div className="flex items-start space-x-3">
            <img src="/icons/phone.png" className="w-5 h-5 mt-1" alt="" />
            <p className="w-auto md:text-xl text-base">+91 98800 36363</p>
          </div>
          <hr className="w-full" />
          <div className="flex space-x-3 md:w-72 sm:w-64 w-40">
            <img src="/icons/facebook.png" className="w-8" alt="" />
            <img src="/icons/linkedin.png" className="w-8" alt="" />
            <img src="/icons/twitter.png" className="w-8" alt="" />
          </div>
        </div>
      </div>
      </div>
      <div className="col-span-12 md:px-32 px-5 text-gray-100">
        <div className="flex justify-between border-t py-3">
          <p>
          © 2022 Allume Consulting.
          </p>
          <p>
          Privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
