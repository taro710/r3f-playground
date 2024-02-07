import { Canvas } from "@react-three/offscreen";
import { lazy } from "react";

const CubeHeap = () => {
  const worker = new Worker(new URL("./worker.tsx", import.meta.url), {
    type: "module",
  });

  const Scene = lazy(() => import("./Scene"));

  return (
    <Canvas
      dpr={[1, 1.5]}
      worker={worker}
      fallback={<Scene />}
      style={{ height: "100vh" }}
      shadows
      gl={{
        alpha: false,
        // todo: stop using legacy lights
        // useLegacyLights: true,
      }}
      camera={{ fov: 50, position: [-1, 1, 2.5] }}
    />
  );
};

export default CubeHeap;
