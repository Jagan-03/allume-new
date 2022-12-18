import gsap from "gsap";
import Observer from "gsap/dist/Observer";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { createRef, RefObject, useEffect, useRef, useState } from "react";
import Head from "../components/Head";
import Layout from "../components/Layout";
import Stepper from "../components/Stepper";
import homeSections from "../utils/homeSections";
import { Canvas } from "@react-three/fiber";
import Experience from "../components/Experience/Experience";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(Observer);

export default function Home() {
  const sectionsRef = useRef(
    [...Array(5)].map((section) => createRef() as RefObject<HTMLDivElement>)
    );
    const steps = useRef<any>([]);
    let animating = false;
    let scrollToIndex = 0;
    const [currentIndex, setCurrentIndex] = useState(0);
    const cnavasCoverTl = gsap.timeline();

  const goTosection = (scrollUp: boolean) => {
    if (scrollUp && scrollToIndex < 3) scrollToIndex++;
    else if (!scrollUp && scrollToIndex > 0) scrollToIndex--;

    animating = true;

    changeSlide();
  };

  useEffect(() => {
    steps.current = document.querySelectorAll(".step");
    playStepsAnimation();

    Observer.create({
      target: "#mainContainer",
      type: "wheel,touch,pointer",
      wheelSpeed: -2,
      onDown: () => !animating && goTosection(false),
      onUp: () => !animating && goTosection(true),
      tolerance: 10,
      preventDefault: false,
    });
  }, []);

  const playStepsAnimation = () => {
    if (!steps) return;
    gsap.to(steps.current[0], {
      background: "#e5e7eb",
      scale: 1.5,
      duration: 0.5,
    });

    if (window.innerWidth < 768) {
      gsap.fromTo(
        steps.current,
        { y: 100 },
        {
          y: 0,
          stagger: 0.1,
          ease: "back.out",
          duration: 1,
        }
      );
    } else {
      gsap.fromTo(
        steps.current,
        { x: 100 },
        {
          x: 0,
          stagger: 0.1,
          ease: "back.out",
          duration: 1,
        }
      );
    }
  };

  const updateCurrentIndex = (index: number) => {
    if (animating) return;
    animating = true;

    scrollToIndex = index;
    changeSlide();
  };

  const changeSlide = () => {
    setCurrentIndex(scrollToIndex);
    if (!steps) return;
    steps.current.forEach((step: gsap.TweenTarget, i: number) => {
      gsap.to(step, {
        background: i === scrollToIndex ? "#e5e7eb" : "none",
        scale: i === scrollToIndex ? 1.5 : 1,
        duration: 0.5,
      });
    });
    gsap.to("#mainWrapper", {
      scrollTo: sectionsRef.current[scrollToIndex].current as Element,
      duration: 1.25,
      ease: "power1.inOut",
      onComplete: () => {
        animating = false;
      },
    });
    cnavasCoverTl.to(".canvasCover", {width: '100%', duration: 0.5});
    cnavasCoverTl.to(".canvasCover", {width: '50%', duration: 0.5});
  };

  

  return (
    <div>
      <Head title="Allume Consultancy" />

      <Layout main>
        <main className="relative">
          <div className="w-screen h-screen fixed top-0 bg-white">
            <div className="w-2/3 h-full absolute right-0 canvas">
                <Canvas
                  id="canvas"
                  camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [5, -2, 5],
                  }}
                  >
                  <Experience currentIndex={currentIndex} />
                </Canvas>
                  </div>
            <div className="bg-white canvasCover z-40 absolute top-0 h-full md:w-1/2 w-3/5 skew-x-12 canvasSkew" />
          </div>
          <Stepper updateCurrentIndex={updateCurrentIndex} />
          <div
            id="mainWrapper"
            className="z-30 overflow-y-auto overflow-x-hidden relative"
          >
            <div
              ref={sectionsRef.current[0]}
              className="section one flex flex-col items-start md:p-10 p-5 justify-center space-y-5 h-full"
            >
              <h1 className="lg:text-9xl md:text-7xl sm:text-6xl text-5xl text-gray-800 w-96">
                Allume Consultancy
              </h1>
              <p className="md:text-2xl text-xl text-gray-800 w-1/2">
                Combining a data-driven approach with deep business and
                technology experience, we craft innovative strategies and
                achieve impactful outcomes.
              </p>
              <p className="text-lg shadow-lg shadow-black text-cyan-500 italic before:absolute before:block before:opacity-100 before:-inset-2 before:-skew-y-3 before:bg-gray-800 relative inline-block font-sans font-semibold">
                <span className="relative">Scroll for more</span>
              </p>
            </div>
            {homeSections.map((section, i) => (
              <div
                key={i}
                ref={sectionsRef.current[i + 1]}
                className="section two p-5 flex flex-col md:space-y-10 space-y-5 items-center justify-center h-full"
              >
                <h1 className="homeTitles lg:text-9xl md:text-7xl sm:text-6xl text-5xl text-center">
                  {section.title}
                </h1>
                <Link href={section.link}>
                  <p className="md:text-3xl text-xl text-gray-200 hover:text-cyan-500 hover:no-underline duration-500 underline underline-offset-4 italic before:duration-300 hover:before:opacity-100 before:shadow-2xl before:shadow-gray-900 before:block before:opacity-0 before:absolute before:-inset-2 before:-skew-y-3 before:bg-gray-800 relative inline-block">
                    <span className="relative">{section.linkName}</span>
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </Layout>
    </div>
  );
}
