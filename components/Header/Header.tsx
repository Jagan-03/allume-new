import clsx from "clsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Menu from "../Menu";

gsap.defaults({ duration: 0.5, ease: "power1.InOut" });
gsap.registerPlugin(ScrollTrigger);

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logo = useRef<HTMLHeadingElement>(null);
  const menuTop = useRef(null);
  const menuBottom = useRef(null);
  const size = useWindowSize();

  const menuIconTransform = (open: boolean) => {
    if (open) {
      gsap.to(menuTop.current, {
        rotate: "45deg",
        top: "50%",
        background: size.width < 768 ? 'white' : '#0891b2',
        borderColor: size.width < 768 ? 'white' : '#0891b2' 
      });
      gsap.to(menuBottom.current, {
        rotate: "-45deg",
        top: "50%",
        borderColor: size.width < 768 ? 'white' : '#0891b2' 
      });
    } else {
      if(!logo.current) return;
      gsap.to(menuTop.current, {
        rotate: 0,
        top: 0,
        borderColor: logo.current.style.color, 
      });
      gsap.to(menuBottom.current, {
        rotate: 0,
        top: "100%",
        borderColor: logo.current.style.color, 
      });
    }
    setMenuOpen((prevValue) => !prevValue);
  };

  useEffect(() => {
    gsap.fromTo('.invertedRadius', {
      x: '100vw'
    }, {
      x: 0,
      duration: 0.7,
      ease: 'power.inOut'
    })
  }, [])

  return (
    <div className="fixed z-50 w-full font-sans">
      <Menu open={menuOpen} />
      <div className="w-full flex justify-between items-center p-10 pr-0 relative">
        <div>
          <Link href="/" scroll={false} onClick={() => window.location.pathname === "/" && window.location.reload()}>
            <h1 ref={logo} className={`text-gray-200 font-bold duration-1000`}>Logo</h1>
          </Link>
        </div>
        {/* <div className="bg-gray-800 relative flex px-3 py-4 rounded-l-xl invertedRadius">
          <button
            className="h-4 w-10 relative z-50"
            onClick={() => menuIconTransform(!menuOpen)}
          >
            <hr ref={menuTop} className="border-2 border-white bg-white absolute top-0 w-full"/>
            <hr ref={menuBottom} className="border border-white bg-white absolute bottom-0 w-full"/>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
