import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function useGetModels () 
{
    
  const models = useLoader(
    GLTFLoader,
    [
      "/models/a.gltf",
      "/models/a.gltf",
      "/models/question.gltf",
      "/models/cube.gltf",
      "/models/location.gltf",
    ],
    (loader) => {
      loader.manager.onProgress = () => {
        // console.log('loading');
      };
    }
  ) as any;

  return {
    models
  };
}
