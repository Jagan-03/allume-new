import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import BenefitCard from "../components/BenefitCard";
import Layout from "../components/Layout";
import benefits from "../utils/benefits";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useEffect(() => {
    playPageAnimations();
  }, []);

  const playPageAnimations = () => {
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
          start: "top 50%",
        },
      }
    );
  }

  return (
      <Layout>
        <div id="aboutWrapper" className="z-30 overflow-hidden relative">
          <div className="section mainBg p-5 relative overflow-hidden flex flex-col md:space-y-10 space-y-5 items-center justify-center h-full">
          <h1 className="md:text-9xl sm:text-7xl text-6xl text-white text-center lg:w-2/3 md:w-full">
                Allume Consulting
              </h1>
              <p className="md:text-2xl text-xl text-gray-200 text-center lg:w-2/3 md:w-full">
              Impactful solutions Transformative insights
              </p>  
          </div>

          <div
            id="aboutSectionOne"
            className="headerTrigger bg-gray-100 grid md:grid-cols-2"
          >
            <div className="overflow-hidden">
              <div className="relative about-1">
                <Image 
                  src="/aboutimg2.jpg"
                  alt=""
                  className="h-full w-full about-1-img"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            <div className="flex flex-col space-y-5 justify-center md:p-10 p-6">
              <h1 className="md:text-8xl sm:text-6xl text-4xl text-gray-800">
                Who We Are
              </h1>
              <p className="md:text-2xl sm:text-lg text-sm font-sans text-gray-600">
              We are passionate about data and realise the powerful impact data can have on business decisions.
We help organisations  realise value from data  through data platforms and digital technologies.
Our specialized teams with rich business and technology expertise will help you 
craft innovative strategies, 
build scalable solutions and 
achieve program outcomes with improved productivity

              </p>
            </div>
          </div>

          <div className="section bg-gray-100 p-10 pb-16 relative overflow-hidden grid md:grid-cols-2 grid-cols-1 space-y-5">
            
            <div className="flex flex-col space-y-5 justify-center md:p-10 p-6">
              <h1 className="md:text-8xl sm:text-6xl text-4xl text-gray-800 sm:w-auto w-48">
                Our Offerings
              </h1>
              <p className="md:text-2xl sm:text-lg text-sm font-sans text-gray-600">
              We have a wide range of capabilities in data & analytics, multi-cloud and digital applications. 
                Our offerings include 
              </p>
            </div>

            <div className='flex flex-col space-y-5'>

            <div className='w-full h-100 p-10 border bg-cyan-800'>
              <h1 className='text-4xl text-gray-200 mb-2'>
                Consulting
              </h1>
              <ul className='list-disc ml-5 text-gray-200 text-lg font-sans'>
                <li>
                Assessment
                </li>
                <li>
                Architecture and Design
                </li>
                <li>
                Accelerators
                </li>
                <li>
                Strategy & Roadmap
                </li>
              </ul>
            </div>
            
            <div className='w-full h-100 p-10 border bg-cyan-800'>
              <h1 className='text-4xl text-gray-200 mb-2'>
              Data & Analytics 
              </h1>
              <div className="flex items-start justify-between space-x-10">

              <ul className='list-disc ml-5 w-96 text-gray-200 text-lg font-sans'>
                <li>
                AI, ML
                </li>
                <li>
                Analytics on Hybrid Cloud
                </li>
                <li>
                Big Data Analytics & Data Lakes
                </li>
                <li>
                Data & Master Data Management
                </li>           
              </ul>
              <ul className="list-disc text-gray-200 text-lg font-sans">
                <li>
                  Data Maturity Evolution - Descriptive to Prescriptive Analytics
                  </li>                
                  <li>
                  Data Monetisation
                  </li>               
                  <li>
                  Data Governance
                  </li>                 
                  <li>
                  Data-as-a-service
                  </li>                
                  <li>
                  Technology Services
                  </li>
              </ul>
              </div>
            </div>

            <div className='w-full h-100 p-10 border bg-cyan-800'>
              <h1 className='text-4xl text-gray-200 mb-2'>
              Product Engineering
              </h1>
              <ul className='list-disc ml-5 text-gray-200 text-lg font-sans'>
                <li>
                Automation/RPA
                </li>
                <li>
                Application Modernisation
                </li>
                <li>
                Mobile Apps
                </li>
              </ul>
            </div>

            </div>
          </div>
          
          <div className="bg-gray-100 py-20">
          <div className="flex flex-col space-y-5 justify-center md:p-10 p-6 mx-10">
              <h1 className="md:text-8xl sm:text-6xl text-4xl text-gray-800 sm:w-auto w-48">
                Why Allume Consulting
              </h1>
              <p className="md:text-2xl sm:text-lg text-sm font-sans text-gray-600">
              Our strategy, process and technology implementation services are powered by more than two decades of experience in outcome driven delivery.
We take data security seriously and make understanding your program needs a high priority. Our triple point expertise of technology, business and governance in global delivery model allows us to design best solution so you can realise your goals with high performance, improved productivity and optimised cost.
              </p>
            </div>
          </div>

        </div>
      </Layout>
  );
};

export default About;
