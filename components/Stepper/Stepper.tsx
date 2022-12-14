import gsap from "gsap";
import { createRef, useEffect, useRef } from "react";
import homeSections from "../../utils/homeSections";

interface StepperProps
{
  updateCurrentIndex: (index: number) => void;
}

const Stepper: React.FC<StepperProps> = (props) => {

  const steps = [...Array(homeSections.length + 1)];

  return (
    <div className="absolute z-40 overflow-hidden right-0 bottom-0 md:w-auto md:h-full w-full flex md:flex-col space-y-3 space-x-3 items-end justify-center p-5">
      {
        steps.map((step, i) => (
          <div onClick={() => props.updateCurrentIndex(i)} key={i} className="step w-3 h-3 border rounded-full cursor-pointer" />
        ))
      }
    </div>
  )
}

export default Stepper;
