import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import BenefitCard from "../components/BenefitCard";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import SmoothScrollWrapper from "../components/SmoothScrollWrapper";
import FadeInOut from "../components/TransitionAnimations/FadeInOut";
import TransitionLayout from "../components/TransitionLayout";
import { TransitionContext, TransitionProvider } from "../components/TransitionProvider";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";
import useWindowSize from "../hooks/useWindowSize";
import benefits from "../utils/benefits";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useEffect(() => {
    gsap.to(".about-1-img", {
      scale: "2",
      delay: 1,
      scrollTrigger: {
        trigger: "#aboutWrapper",
        scrub: 1,
        start: "top 80%",
      },
    });
    gsap.to(".about-2-img", {
      scale: "1.5",
      scrollTrigger: {
        trigger: "#aboutSectionFour",
        scrub: 1,
        start: "top 80%",
      },
    });
    gsap.to(".introLine", {
      bottom: "6rem",
      delay: 1,
      duration: 1,
    });
    gsap.fromTo(
      ".benefitCard",
      {
        x: "100vw",
      },
      {
        x: 0,
        ease: "power.inOut",
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: "#aboutSectionTwo",
          start: "top 10%",
        },
      }
    );
  }, []);

  return (
      <Layout>
        <div id="aboutWrapper" className="z-30 overflow-hidden relative">
          <div className="section mainBg p-5 relative overflow-hidden flex flex-col md:space-y-10 space-y-5 items-center justify-center h-full">
            <h1 className="lg:text-9xl md:text-7xl sm:text-6xl text-5xl text-gray-200 text-center">
              Our Company
            </h1>
            <hr className="introLine border-1 origin-bottom w-48 rotate-90 bg-gray-100 absolute -bottom-24" />
          </div>

          <div
            id="aboutSectionOne"
            className="headerTrigger bg-gray-100 grid md:grid-cols-2"
          >
            <div className="overflow-hidden">
              <div className="relative about-1">
                <img
                  src="/aboutimg2.jpg"
                  alt=""
                  className="h-full w-full about-1-img"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-5 justify-center md:p-10 p-6">
              <h1 className="md:text-8xl sm:text-6xl text-4xl text-gray-800">
                Overview
              </h1>
              <p className="md:text-2xl sm:text-lg text-sm font-sans text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                odio, eaque natus officia ipsam dolores repudiandae magni, quas
                odit sequi dicta ullam distinctio laborum hic quidem temporibus
                asperiores, esse ea! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Iste odio, eaque natus officia ipsam dolores
                repudiandae magni, quas odit sequi dicta ullam distinctio
                laborum hic quidem temporibus asperiores, esse ea! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Iste odio, eaque
                natus officia ipsam dolores repudiandae magni, quas odit sequi
                dicta ullam distinctio laborum hic quidem temporibus asperiores,
                esse ea!
              </p>
            </div>
          </div>

          <div
            id="aboutSectionTwo"
            className="section mainBg headerTrigger grid md:grid-cols-2 py-24"
          >
            <div className="flex flex-col space-y-5 justify-center md:p-10 p-6">
              <h1 className="md:text-8xl sm:text-6xl text-4xl text-gray-200 sm:w-auto w-48">
                Benefits we bring
              </h1>
            </div>

            <div className="flex flex-col space-y-5 items-center justify-center md:p-10 p-6">
              {benefits.map((benefit) => (
                <BenefitCard key={benefit.title} {...benefit} />
              ))}
            </div>
          </div>

          <div
            id="aboutSectionThree"
            className="section bg-gray-100 headerTrigger py-32 text-gray-800"
          >
            <div className="w-full text-center md:p-10 p-6">
              <h1 className="md:text-8xl sm:text-6xl text-4xl">Our Leaders</h1>
              <p className="pt-7 font-sans">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore, dolorum pariatur culpa consectetur nesciunt tenetur
                velit labore architecto obcaecati, sunt provident numquam
                tempore maxime at vitae aut fuga qui sint.
              </p>
            </div>

            <div className="flex justify-center px-10">
              <div className="p-10 text-center">
                <img src="/avatar.png" alt="" className="w-80 pb-3" />
                <h3 className="font-bold text-4xl">John Doe</h3>
                <p className="font-sans text-gray-500">Founder & President</p>
              </div>
              <div className="p-10 text-center">
                <img src="/avatar.png" alt="" className="w-80 pb-3" />
                <h3 className="font-bold text-4xl">John Doe</h3>
                <p className="font-sans text-gray-500">CTO</p>
              </div>
            </div>
          </div>

          <div id="aboutSectionFour" className="headerTrigger flex">
            <div className="w-full grid md:grid-cols-2">
              <div className="relative flex justify-center overflow-hidden">
                <img
                  src="/chennai-bw.jpg"
                  alt=""
                  className="w-full h-full about-2-img"
                />
              </div>

              <div className="flex flex-col justify-center p-10 bg-gray-800">
                <h1 className="md:text-8xl text-white sm:text-6xl text-4xl">
                  Our Office
                </h1>
                <p className="font-sans mt-7 md:text-2xl sm:text-lg text-sm text-gray-300">
                  Our office is located in Chennai which is the third largest
                  software exporter in India.
                </p>
                <Link href={"/contact"} scroll={false}>
                  <p className="mt-7 md:text-3xl text-xl text-cyan-500 hover:text-gray-100 hover:no-underline duration-500 underline underline-offset-4 italic before:duration-300 hover:before:opacity-100 before:block before:opacity-0 before:absolute before:-inset-1 before:-skew-y-3 before:bg-cyan-600 relative inline-block">
                    <span className="relative">Get in touch</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div
            id="aboutSectionFive"
            className="headerTrigger bg-gray-100 flex flex-col justify-center section items-center p-10"
          >
            <h1 className="lg:text-9xl md:text-7xl sm:text-6xl text-5xl text-cyan-800 text-center">
              See how we can help
            </h1>
            <Link href={"/works"} scroll={false}>
              <p className="mt-7 md:text-3xl text-xl text-cyan-800 hover:text-gray-100 hover:no-underline duration-500 underline underline-offset-4 italic before:duration-300 hover:before:opacity-100 before:block before:opacity-0 before:absolute before:-inset-1 before:-skew-y-3 before:bg-cyan-800 relative inline-block">
                <span className="relative">Our Solutions</span>
              </p>
            </Link>
          </div>
        </div>
      </Layout>
  );
};

export default About;
