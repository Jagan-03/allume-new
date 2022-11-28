import gsap from "gsap";
import Link from "next/link";
import { createRef, RefObject, useEffect, useRef } from "react";
import menuLinks from "../../utils/menuLinks";

gsap.defaults({ duration: 0.5, ease: 'power1.InOut' });

interface MenuProps 
{
    open: boolean;
}

const Menu: React.FC<MenuProps> = (props) => {
    
  const menuPanel = useRef<HTMLDivElement>(null);
  const menuContact = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef(menuLinks.map(link => createRef() as RefObject<HTMLAnchorElement>));

  useEffect(() => {
    openPanel(props.open);
    playMenuLinkAnimation(props.open);
    playMenuContactAnimation(props.open);
  }, [props.open]);

  const openPanel = (open: boolean) => {
    if (open) {
        gsap.to(menuPanel.current, {
          width: '100vw'
        });
      } else {
        gsap.to(menuPanel.current, {
          width: 0,
          delay: 0.3
        });
      }
  }

  const playMenuLinkAnimation = (open: boolean) => {
    if(open){
        gsap.fromTo('.menuLink', {
            y: 100
        }, {
            y: 0,
            delay: 0.5
        });
    } else {
        gsap.fromTo('.menuLink', {
            y: 0
        }, {
            y: 100,
        });
    }
  }

  const playMenuContactAnimation = (open: boolean) => {
    if(open){
        gsap.fromTo(menuContact.current, {
            opacity: 0
        }, {
            opacity: 1,
            delay: 0.5
        });
    } else {
        gsap.fromTo(menuContact.current, {
            opacity: 1
        }, {
            opacity: 0,
        });
    }
  }

  return (
    <div id="menuPanel" ref={menuPanel} className="flex md:flex-row flex-col fixed h-full w-0 overflow-hidden bg-white">
        <div id="menuContact" className="h-full bg-gray-800 w-full flex flex-col space-y-5 font-semibold font-mono justify-center items-start lg:pl-20 md:pl-10 md:pt-0 pt-32 pb-10 pl-5">
            {
                menuLinks.map((link, i) => (
                    <div key={`${link.title}${i}`} className="overflow-hidden">
                        <Link href={link.link} className="relative" ref={menuLinksRef.current[i]}>
                            <div className="duration-500 px-5 hover:bg-cyan-600 text-white">
                                <h1 className="md:text-7xl text-4xl menuLink">{link.title}</h1>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
        <div ref={menuContact} className="h-full font-sans md:text-lg text-sm text-cyan-800 font-semibold w-full flex flex-col md:items-end items-start md:justify-center md:space-y-5 space-y-3 lg:p-20 md:p-10 p-5">
            <div className="flex items-start space-x-3">
                <img src="/icons/location.png" className="w-5 h-5 mt-1" alt="" />
                <p className="md:w-72 w-64">
                    236, 7th Cross Street, Heritage Jayendra Nagar, Senbakkam, Chennai, Tamilnadu, 600044, India
                </p>
            </div>
            <hr className="md:w-72 w-64"/>
            <div className="flex items-start space-x-3">
                <img src="/icons/phone.png" className="w-5 h-5 mt-1" alt="" />
                <p className="md:w-72 w-64">
                    +91 98800 36363
                </p>
            </div>
            <hr className="md:w-72 w-64"/>
            <div className="flex space-x-3 md:w-72 w-64">
                <img src="/icons/facebook.png" className="w-8" alt="" />
                <img src="/icons/linkedin.png" className="w-8" alt="" />
                <img src="/icons/twitter.png" className="w-8" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Menu;
