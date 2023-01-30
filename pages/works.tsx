import gsap from 'gsap';
import React, { useEffect } from 'react'
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import SmoothScrollWrapper from '../components/SmoothScrollWrapper';

const Works = () => {
  useEffect(() => {
    gsap.to(".introLine", {
      bottom: "6rem",
      delay: 0.5,
      duration: 1,
    });
  }, []);

  return (
    <Layout>
        <div id="solutionsWrapper" className="z-30 overflow-hidden relative">
          <div className="section mainBg p-5 relative overflow-hidden flex flex-col md:space-y-10 space-y-5 items-center justify-center h-full">
            <h1 className="lg:text-9xl md:text-7xl sm:text-6xl text-5xl text-gray-200 text-center">
              Our Solutions
            </h1>
            <hr className="introLine border-1 origin-bottom w-48 rotate-90 bg-gray-100 absolute -bottom-24" />
          </div>

          <div className="section bg-gray-100 p-10 pb-16 relative overflow-hidden grid md:grid-cols-2 grid-cols-1 space-y-5">
            
            <div className="flex flex-col space-y-5 justify-center md:p-10 p-6">
              <h1 className="md:text-8xl sm:text-6xl text-4xl text-gray-800 sm:w-auto w-48">
                Our services
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
              <ul className='list-disc ml-5 text-gray-200 text-xl font-sans'>
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
              Data & Analytics services 
              </h1>
              <ul className='list-disc ml-5 text-gray-200 text-xl font-sans'>
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
                <li>
                Data Maturity Evolution - Descriptive to Prescriptive Analytics
                </li>                
                <li>
                Data Monetisation
                </li>                
                <li>
                Data-as-a-service
                </li>                
                <li>
                Technology Services
                </li>
              </ul>
            </div>

            <div className='w-full h-100 p-10 border bg-cyan-800'>
              <h1 className='text-4xl text-gray-200 mb-2'>
              Product engineering
              </h1>
              <ul className='list-disc ml-5 text-gray-200 text-xl font-sans'>
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
        </div>
    </Layout>
  )
}

export default Works;
