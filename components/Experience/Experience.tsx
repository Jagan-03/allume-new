import { Points, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useState, useEffect, useMemo, useRef } from "react";
import * as THREE from 'three';
// import customModelVertexShader from "raw-loader!glslify-loader!./shaders/customModelVertexShader.glsl";
// import customModelFragmentShader from "raw-loader!glslify-loader!./shaders/customModelFragmentShader.glsl";
import gsap from "gsap";

interface ExperienceProps 
{
  currentIndex: number;
}

const Experience: React.FC<ExperienceProps> = (props) => {

  
  const [count, setCount] = useState(0);
  const modelA = useGLTF("/models/a.gltf") as any;
  const modelQuestion = useGLTF("/models/question.gltf") as any;
  const modelcube = useGLTF("/models/cube.gltf") as any;
  const modelLocation = useGLTF("/models/location.gltf") as any;
  const models = [
    modelA,
    modelQuestion,
    modelcube,
    modelLocation
  ];
  const points = useRef<any>(null);
  const shaderMaterial = useRef<any>(null);
  const radius = 0.5;

  const particlesPosition = useMemo(() => { 
    if(!count) return; 

    return models[props.currentIndex].scene.children[0].geometry.attributes.position.array;
  }, [count, props.currentIndex]);

  useEffect(() => {    
    if(!points.current) return;   
    gsap.to(shaderMaterialUniforms.uSize, {
      value: 0
    })        
    setCount(points.current?.geometry?.attributes?.position?.count);
  }, [props.currentIndex]);
  
  useFrame((state) => {
    if(!points.current || !count) return;    
    
    const { clock } = state;    
    // shaderMaterial.current.uniforms.uTime.value = clock.elapsedTime;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 7;
      
      points.current.geometry.attributes.position.array[i3] +=
      Math.sin(clock.elapsedTime) * 0.003 * radius;
      points.current.geometry.attributes.position.array[i3 + 1] +=
      Math.tan(clock.elapsedTime) * 0.001 * radius;
      points.current.geometry.attributes.position.array[i3 + 2] +=
      Math.sin(clock.elapsedTime) * 0.01 * radius;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });
  
  const shaderMaterialUniforms = {
    uSize: { value: 0.02 },
    uTime: { value: 0 }
  }

  return (
    <>
      <Perf position="top-left" />
        <Points 
          ref={points}
          positions={particlesPosition}
          rotation={[0, 0, 0]} 
          scale={2}
          >
            <pointsMaterial 
              size={0.02}
              sizeAttenuation={false}
              depthWrite={false}
            />
          {/* <shaderMaterial
            vertexColors
            ref={shaderMaterial}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            vertexShader={customModelVertexShader}
            fragmentShader={customModelFragmentShader}
            uniforms={shaderMaterialUniforms}
          /> */}
        </Points>
    </>
  );
}

export default Experience;
