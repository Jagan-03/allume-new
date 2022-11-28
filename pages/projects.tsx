import gsap from 'gsap';
import React, { useEffect } from 'react'
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import SmoothScrollWrapper from '../components/SmoothScrollWrapper';

const Projects = () => {
  useEffect(() => {
    gsap.to(".introLine", {
      bottom: "6rem",
      delay: 0.5,
      duration: 1,
    });
  }, []);

  return (
    <Layout>
      {/* <SmoothScrollWrapper> */}
        <div id="solutionsWrapper" className="z-30 overflow-hidden relative">
          <div className="section p-5 relative overflow-hidden flex flex-col md:space-y-10 space-y-5 items-center justify-center h-full">
            <h1 className="lg:text-9xl md:text-7xl sm:text-6xl text-5xl text-gray-200 text-center">
              Our Works
            </h1>
            <hr className="introLine border-1 origin-bottom w-48 rotate-90 bg-gray-100 absolute -bottom-24" />
          </div>

          <Footer />
        </div>
      {/* </SmoothScrollWrapper> */}
    </Layout>
  )
}

export default Projects;
