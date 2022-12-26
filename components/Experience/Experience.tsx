import { Points, useGLTF } from "@react-three/drei";
import { dispose, useFrame, useLoader } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useContext,
  useLayoutEffect,
} from "react";
import * as THREE from "three";
import gsap from "gsap";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import useWindowCursor from "../../hooks/useWindowCursor";
import useWindowSize from "../../hooks/useWindowSize";
import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";
import { TransitionContext } from "../TransitionProvider";
import useGetModels from "../../hooks/useGetModels";

interface ExperienceProps {
  currentIndex: number;
}

const Experience: React.FC<ExperienceProps> = (props) => {
  const points = useRef<any>(null);
  const pointsGroup = useRef<any>(null);
  const radius = 1;
  let animating = false;
  const particles = gsap.timeline();
  const cursor = useWindowCursor();
  const sizes = useWindowSize();
  const { models, modelsLoaded } = useGetModels();  

  const count = useMemo(() => {
    const countsArray = models.map((model: any) => {
      return model.scene.children[0].geometry.attributes.position.count;
    });
    return Math.min(...countsArray);
  }, [models]);

  useEffect(() => {
    if (!modelsLoaded) return;
    
    points.current.geometry.attributes.position.count = count;
    updateParticlesPosition();
  }, [props.currentIndex]);

  const updateParticlesPosition = () => {
    animating = true;
    particles.to(points.current.geometry.attributes.position.array, {
      endArray: models[props.currentIndex + 1].scene.children[0].geometry.attributes.position.array,
      duration: 1.5,
      onComplete: () => {
        points.current.geometry.attributes.position.needsUpdate = true;
        animating = false;
      },
    });
  };

  useFrame((state) => {
    if (!points.current || animating || !modelsLoaded) return;

    const { clock } = state;

    // const parallaxX = -(cursor.x / sizes.width);
    // const parallaxY = (cursor.y / sizes.height);
    // pointsGroup.current.position.x += (parallaxX - pointsGroup.current.position.x) * 0.01 * clock.elapsedTime;
    // pointsGroup.current.position.y += (parallaxY - pointsGroup.current.position.y) * 0.01 * clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const i3 = i * 7;

      points.current.geometry.attributes.position.array[i3] +=
        Math.sin(clock.elapsedTime) * 0.003 * radius;
      points.current.geometry.attributes.position.array[i3 + 1] +=
        Math.tan(clock.elapsedTime) * 0.001 * radius;
      points.current.geometry.attributes.position.array[i3 + 2] +=
        Math.cos(clock.elapsedTime) * 0.01 * radius;
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      {/* <Perf position="top-left" /> */}
      <group ref={pointsGroup}>
        <Points
          positions={
            models[0].scene.children[0].geometry.attributes.position.array
          }
          ref={points}
          scale={1.8}
        >
          <pointsMaterial
            size={0.02}
            sizeAttenuation={false}
            depthWrite={false}
          />
        </Points>
      </group>
    </>
  );
};

export default Experience;
