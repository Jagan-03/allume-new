import React, { ReactNode, useEffect, useRef } from 'react'

interface SmoothScrollWrapperProps
{
    children: ReactNode;
}


const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = (props) => {

    useEffect(() => {
    document.body.style.height = '100%';
    window.scrollTo({ top: 0 });

    import("locomotive-scroll").then(locomotiveModule => {
        const scroll = new locomotiveModule.default({
        el: document.querySelector('[data-scroll-container') as HTMLElement,
        smooth: true,
        lerp: 0.1
        })
    })
    }, [])

  return (
    <div id="smooth-wrapper">
        <div data-scroll-container>
            {props.children}
        </div>
    </div>
  )
}

export default SmoothScrollWrapper;
