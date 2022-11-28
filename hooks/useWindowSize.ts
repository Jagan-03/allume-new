import { useState, useEffect } from "react";

interface WindowSizeProps
{
  width: number;
  height: number;
}

export default function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  const [windowSize, setWindowSize] = useState<WindowSizeProps>({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize(getSize());

    function handleResize() {
      setWindowSize(getSize());
      window.scrollTo({top: 0});
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
