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
  const scrollToIndex = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTosection = (scrollUp: boolean) => {
    if (scrollUp && scrollToIndex.current < 3) scrollToIndex.current += 1;
    else if (!scrollUp && scrollToIndex.current > 0) scrollToIndex.current -= 1;

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

    scrollToIndex.current = index;
    changeSlide();
  };

  const changeSlide = () => {
    setCurrentIndex(scrollToIndex.current);
    if (!steps) return;
    steps.current.forEach((step: gsap.TweenTarget, i: number) => {
      gsap.to(step, {
        background: i === scrollToIndex.current ? "#e5e7eb" : "none",
        scale: i === scrollToIndex.current ? 1.5 : 1,
        duration: 0.5,
      });
    });
    gsap.to("#mainWrapper", {
      scrollTo: sectionsRef.current[scrollToIndex.current].current as Element,
      duration: 1.25,
      ease: "power1.inOut",
      onComplete: () => {
        animating = false;
      },
    });
  };

  return (
    <div>
      <Head title="Allume Consultancy" />

      <Layout main>
        <main className="relative">
          <div className="w-screen h-screen canvas bg-zinc-800 fixed top-0">
              <Canvas
                id="scene"
                camera={{
                  fov: 45,
                  near: 0.1,
                  far: 200,
                  position: [5, 2, 5],
                }}
              > 
                <Experience currentIndex={currentIndex}/>
              </Canvas>
          </div>
          <Stepper updateCurrentIndex={updateCurrentIndex} />
          <div
            id="mainWrapper"
            className="z-30 overflow-y-auto overflow-x-hidden relative"
          >
            <div
              ref={sectionsRef.current[0]}
              className="section one flex flex-col items-center md:p-10 p-5 justify-center space-y-5 h-full"
            >
              <h1 className="md:text-9xl sm:text-7xl text-6xl text-white text-center lg:w-2/3 md:w-full">
                Allume Consulting
              </h1>
              <p className="md:text-2xl text-xl text-gray-200 text-center lg:w-2/3 md:w-full">
              Impactful solutions Transformative insights
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
                <h1 className="lg:text-9xl md:text-7xl sm:text-6xl text-5xl text-gray-200 text-center">
                  {/* {section.title.split(" ").map((word, i) => (
                    <span id={`sectionTitle${i}`}>{word} </span>
                  ))} */}
                  {section.title}
                </h1>
                <Link href={section.link}>
                  <p className="md:text-3xl text-xl text-gray-200 hover:text-gray-200 hover:no-underline duration-500 underline underline-offset-4 italic before:duration-300 hover:before:opacity-100 before:shadow-2xl before:shadow-gray-900 before:block before:opacity-0 before:absolute before:-inset-2 before:-skew-y-3 before:bg-gray-800 relative inline-block">
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
