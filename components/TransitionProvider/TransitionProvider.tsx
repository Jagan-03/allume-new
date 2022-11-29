import React, { useState, createContext, useCallback, ReactNode } from "react";
import gsap from "gsap";

interface TransitionProviderProps
{
  children: ReactNode
}

type TransitionContextTypes = {
  timeline?: any,
  background?: any,
  setTimeline?: any
}

const TransitionContext = createContext<TransitionContextTypes>({});

const TransitionProvider: React.FC<TransitionProviderProps> = (props) => {

  const [timeline, setTimeline] = useState(() =>
    gsap.timeline({ paused: true })
  );

  return (
    <TransitionContext.Provider
      value={{
        timeline,
        setTimeline,
      }}
    >
      {props.children}
    </TransitionContext.Provider>
  )
}

export { TransitionContext, TransitionProvider };
