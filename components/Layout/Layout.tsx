import gsap from 'gsap';
import React, { ReactNode, useContext, useEffect } from 'react'
import useIsomorphicLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';
import Header from '../Header';
import { TransitionContext } from '../TransitionProvider';

interface LayoutProps 
{
    children: ReactNode,
}

const Layout: React.FC<LayoutProps> = (props) => {
  
  const { timeline } = useContext(TransitionContext);

    useEffect(() => {
      document.body.style.height = '100%';
      window.scrollTo({ top: 0 });
    }, [])

  useIsomorphicLayoutEffect(() => {
    gsap.fromTo('#transitionBanner', {
      x: 0
    }, {
      x: '-100vw',
      duration: 0.5,
    })

    timeline.add(
      gsap.fromTo('#transitionBanner',{
        x: '100vw'
      }, {
        x: 0,
        duration: 0.5,
      }),
      0
    )
  }, [])

  return (
    <div id="mainContainer">
        <Header />
        {props.children}
    </div>
  )
}

export default Layout;
