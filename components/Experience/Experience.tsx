import { Line, Points, Segment, Segments, useGLTF } from "@react-three/drei";
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
import { BufferAttribute } from "three";

interface ExperienceProps {
  currentIndex: number;
}

const Experience: React.FC<ExperienceProps> = (props) => {
  const points = useRef<any>(null);
  const lines = useRef<any>(null);

  const radius = 1;
  let animating = false;
  const particles = gsap.timeline();
  const { models, modelsLoaded } = useGetModels();

  const positions = useMemo(() => {
    return models[0].scene.children[0].geometry.attributes.position.array;
  }, [models]);

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
      endArray:
        models[props.currentIndex + 1].scene.children[0].geometry.attributes
          .position.array,
      duration: 1.5,
      onComplete: () => {
        points.current.geometry.attributes.position.needsUpdate = true;
        animating = false;
      },
    });
  };

  useFrame((state) => {
    const { clock } = state;
    if (!points.current || !modelsLoaded) return;

    for (let i = 0; i < count; i++) {
      const i3 = i * 7;
      if(models[props.currentIndex + 1].scene.children[0].name === 'HomeCircle')
      {
        points.current.rotation.z += 0.000001;
      }
      else 
      { 
        points.current.rotation.z = 0;
        points.current.geometry.attributes.position.array[i3] +=
        Math.sin(clock.elapsedTime) * 0.003 * radius;
        points.current.geometry.attributes.position.array[i3 + 1] +=
        Math.sin(clock.elapsedTime) * 0.001 * radius;
        points.current.geometry.attributes.position.array[i3 + 2] +=
        Math.cos(clock.elapsedTime) * 0.01 * radius;
      }
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group>
      {/* <Perf position="top-left" /> */}
      <Points positions={positions} ref={points} scale={1.8}>
        <pointsMaterial
          size={0.02}
          sizeAttenuation={false}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Experience;
