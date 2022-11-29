import gsap from 'gsap';
import React, { ReactNode, RefObject, useContext, useRef, useState } from 'react'
import useIsomorphicLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';
import TransitionBanner from '../TransitionBanner';
import { TransitionContext } from '../TransitionProvider';

interface TransitionLayoutProps
{
  children: ReactNode;
}

const TransitionLayout: React.FC<TransitionLayoutProps> = (props) => {

  const [displayChildren, setDisplayChildren] = useState(props.children);
  const { timeline } = useContext(TransitionContext);
  const el = useRef() as RefObject<HTMLDivElement>;

  useIsomorphicLayoutEffect(() => {
    if(props.children !== displayChildren) {
        if(timeline.duration() === 0) {
            setDisplayChildren(props.children);
        } else {
            timeline.play().then(() => {
                timeline.pause().clear();
                setDisplayChildren(props.children);
            })
        }
    }
  }, [props.children]);

  return (
    <div ref={el} className="relative overflow-x-hidden">
        <TransitionBanner />
        {displayChildren}
    </div>
  )
}

export default TransitionLayout;
