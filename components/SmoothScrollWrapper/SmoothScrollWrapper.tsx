import React, { ReactNode, useEffect, useRef } from 'react'
import useWindowSize from '../../hooks/useWindowSize';

interface SmoothScrollWrapperProps
{
    children: ReactNode;
}


const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = (props) => {

    const size = useWindowSize();

    const smoothWrapper = useRef(null);
    const smoothContent = useRef<HTMLDivElement>(null);

    const skewConfigs = {
        ease: 0.05,
        current: 0,
        previous: 0,
        rounded: 0
    }

    useEffect(() => {               
        if(!smoothContent.current) return;         
        document.body.style.height = `${smoothContent.current.getBoundingClientRect().height}px`;
        
    }, [size.height]);

    
    const skewScrolling = () => {
        if(!smoothContent.current) return;
        
        skewConfigs.current = window.scrollY;
        skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
        skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;
        
        smoothContent.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0)`;
        
        //loop vai raf
        requestAnimationFrame(() => skewScrolling());
    }

    useEffect(() => {
        requestAnimationFrame(() => skewScrolling());
    }, []);

  return (
    <div ref={smoothWrapper} id="smooth-wrapper">
        <div ref={smoothContent} id="smooth-content">
            {props.children}
        </div>
    </div>
  )
}

export default SmoothScrollWrapper;
