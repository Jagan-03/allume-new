import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";

interface cursorProps
{
  x: number;
  y: number;
}

export default function useWindowCursor() {

    const sizes = useWindowSize();

  function getCursor(e: { clientX: number; clientY: number; }) {    
    setCursor({
        x: e.clientX,
        y: e.clientY
    });
  }

  const [cursor, setCursor] = useState<cursorProps>({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener('mousemove', getCursor);
    return () => window.removeEventListener("mousemove", getCursor);
  }, []);

  return cursor;
}
