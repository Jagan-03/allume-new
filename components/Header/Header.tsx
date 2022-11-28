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
  const logo = useRef(null);
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

  // useEffect(() => {
  //   gsap.to(logo.current, {
  //     color: logo.current.style.color === '#0891b2' ? 'white' : '#0891b2',
  //     scrollTrigger: {
  //       trigger: '.headerTrigger',
  //       ontoggle: () => console.log('Start'),
  //       start: 'top top',
  //       end: 'bottom top',
  //       toggleActions: 'play reset play reverse'
  //     }
  //   })
  //   gsap.to([menuTop.current, menuBottom.current], {
  //     borderColor: menuTop.current.style.color === '#0891b2' ? 'white' : '#0891b2',
  //     scrollTrigger: {
  //       trigger: '.headerTrigger',
  //       start: 'top top',
  //       end: 'bottom top',
  //       toggleActions: 'play reset play reverse'
  //     }
  //   })    
  // }, [])

  return (
    <div className="fixed z-50 w-full font-sans">
      <Menu open={menuOpen} />
      <div className="w-full flex justify-between items-center p-10 relative">
        <div>
          <Link href="/" onClick={() => window.location.pathname === "/" && window.location.reload()}>
            <h1 ref={logo} className={`text-gray-200 font-bold duration-1000`}>Logo</h1>
          </Link>
        </div>
        <div>
          <button
            className="relative h-4 w-10"
            onClick={() => menuIconTransform(!menuOpen)}
          >
            <hr ref={menuTop} className="border-2 border-white absolute top-0 w-full"/>
            <hr ref={menuBottom} className="border border-white absolute bottom-0 w-full"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
