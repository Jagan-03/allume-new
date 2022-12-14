import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

interface ExperienceProps 
{
    currentIndex: number;
}

const Experience: React.FC<ExperienceProps> = (props) => {
  // This reference gives us direct access to our points
  const points = useRef<any>(null);
  let animating = true;
  const [count, setCount] = useState(0);
  const geometries = [
    <sphereGeometry key={'geo1'} args={[1, 32, 32]} />,
    <boxGeometry key={'geo2'} args={[2, 2, 2, 20, 20, 20]} />,
    <sphereGeometry key={'geo3'} args={[1, 32, 32]} />,
    <boxGeometry key={'geo4'} args={[2, 2, 2, 20, 20, 20]} />
  ]

  useEffect(() => {    
    setCount(points.current?.geometry.attributes.position.count);
  }, []);

  useEffect(() => {
    gsap.to(points.current.geometry.attributes.position.array, {
    
    });
    points.current.geometry.attributes.position.array[0] = 0;
    points.current.geometry.attributes.position.array[1] = 0;
    points.current.geometry.attributes.position.array[2] = 0;
    
  }, [props.currentIndex])

  // Generate our positions attributes array
//   const particlesPosition = useMemo(() => {
//     const positions = new Float32Array(count * 3);
//     const distance = 2;

//     for (let i = 0; i < count; i++) {
//       const theta = Math.random() * 0.5;
//       const phi = Math.random() * 0.5;

//       let x = distance * Math.cos(phi);
//       let y = distance * Math.sin(phi);
//       let z = distance * Math.cos(theta);

//       positions.set([x, y, z], i * 3);
//     }

//     return positions;
//   }, [count]);

  useFrame((state) => {
    const { clock } = state;

    if(!animating) return;
    if(!points.current) return;
    for (let i = 0; i < count; i++) {
      const i3 = i * 7;
        
      points.current.geometry.attributes.position.array[i3] +=
        Math.sin(clock.elapsedTime) * 0.003;
      points.current.geometry.attributes.position.array[i3 + 1] +=
        Math.tan(clock.elapsedTime) * 0.001;
        
        if(i3 % 3 === 0)
        points.current.geometry.attributes.position.array[i3 + 2] +=
        Math.tan(clock.elapsedTime * Math.random() * 0.3) * 0.01;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      {/* <Perf position="top-left" /> */}

      <points ref={points}>
      {/* <sphereGeometry args={[1, 32, 32]} /> */}
        {/* <boxGeometry args={[2, 2, 2, 20, 20, 20]} /> */}
        {geometries[props.currentIndex]}
        <pointsMaterial
          size={0.02}
          color="white"
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </>
  );
}

export default Experience;
