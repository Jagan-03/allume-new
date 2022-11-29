import gsap from "gsap";
import { useRef, useContext, RefObject, ReactNode } from "react";
import useIsomorphicLayoutEffect from "../../../hooks/useIsomorphicLayoutEffect";
import { TransitionContext } from "../../TransitionProvider";

interface FadeInOutProps
{
    children: ReactNode;
}

const FadeInOut: React.FC<FadeInOutProps> = (props) => {
  const { timeline } = useContext(TransitionContext);
  const el = useRef() as RefObject<HTMLDivElement>;

  useIsomorphicLayoutEffect(() => {
    gsap.fromTo(el.current,{
        x: '200vw'
    }, {
      x: 0,
      duration: 1,
    })

    timeline.add(
      gsap.to(el.current, {
        x: '-100vw',
        duration: 1,
      }),
      0
    )
  }, [])

 return <div ref={el}>
    {props.children}
  </div>
}

export default FadeInOut;
