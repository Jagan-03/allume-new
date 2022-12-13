import gsap from 'gsap';
import React, { ReactNode, useContext, useEffect, useRef } from 'react'
import useIsomorphicLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';
import Header from '../Header';
import { TransitionContext } from '../TransitionProvider';
import LocomotiveScroll from "locomotive-scroll";
import Footer from '../Footer';
import clsx from 'clsx';
import useWindowSize from '../../hooks/useWindowSize';

interface LayoutProps 
{
    children: ReactNode,
    main?: boolean
}

const Layout: React.FC<LayoutProps> = (props) => {
  
  const { timeline } = useContext(TransitionContext);
  const layoutChildren = useRef<any>(null);
  const size = useWindowSize();
  
  useEffect(() => {
    window.scrollTo({ top: 0 });
    layoutChildren.current.style.marginBottom = `${document.getElementById('footer')?.offsetHeight}px`;
  }, [size])

  useIsomorphicLayoutEffect(() => {
    gsap.fromTo('#transitionBanner', {
      borderRadius: 0,
      x: 0
    }, {
      borderRadius: '50%',
      x: '-100vw',
      duration: 0.5,
    })

    timeline.add(
      gsap.fromTo('#transitionBanner',{
        x: '100vw',
        borderRadius: '50%',
      }, {
        x: 0,
        borderRadius: 0,
        duration: 0.5,
      }),
      0
    )
  }, [])

  return (
    <div id="mainContainer" className="relative">
      <Header />
      <div ref={layoutChildren} className={clsx(!props.main && 'layoutChildren', 'overflow-hidden')}>
        {props.children}
      </div>
      {!props.main && <Footer />}
    </div>
  )
}

export default Layout;
