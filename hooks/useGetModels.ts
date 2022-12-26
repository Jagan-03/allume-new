import { useLoader } from "@react-three/fiber";
import { useMemo, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function useGetModels () 
{
  const models = useMemo(() => useLoader(
    GLTFLoader,
    [
      "/models/a.gltf",
      "/models/a.gltf",
      "/models/question.gltf",
      "/models/cube.gltf",
      "/models/location.gltf",
    ]
  ) as any, []);

  const modelsLoaded = useMemo(() => {
    return models.length === 5;
  }, [models]);

  return {
    models,
    modelsLoaded
  };
}
