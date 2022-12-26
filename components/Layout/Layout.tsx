import gsap from 'gsap';
import React, { ReactNode, useContext, useEffect, useMemo, useRef } from 'react'
import useIsomorphicLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';
import Header from '../Header';
import { TransitionContext } from '../TransitionProvider';
import LocomotiveScroll from "locomotive-scroll";
import Footer from '../Footer';
import clsx from 'clsx';
import useWindowSize from '../../hooks/useWindowSize';
import useGetModels from '../../hooks/useGetModels';

interface LayoutProps 
{
    children: ReactNode,
    main?: boolean
}

const Layout: React.FC<LayoutProps> = (props) => {
  
  const { timeline } = useContext(TransitionContext);
  const layoutChildren = useRef<any>(null);
  const size = useWindowSize();
  // const { modelsLoaded } = useGetModels();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    layoutChildren.current.style.marginBottom = `${document.getElementById('footer')?.offsetHeight}px`;
  }, []);

  useIsomorphicLayoutEffect(() => {
    // const bannerContent = document.getElementById('transitionContent');
    
    // if(props.main && bannerContent) {
    //   bannerContent.style.visibility = 'visible';
      
    //   gsap.fromTo(bannerContent.firstChild,{
    //     innerText: 0
    //   }, {
    //     innerText: 99,
    //     duration: 3,
    //     snap: {
    //       innerText: 5
    //     },
    //     onComplete: () => {
    //       bannerAnimations();
    //     }
    //   });
    // }
    // else if(bannerContent) {
    //   bannerContent.style.visibility = 'hidden';
    // };    
    bannerAnimations();
  }, []);

  const bannerAnimations = () => {
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
  }

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
