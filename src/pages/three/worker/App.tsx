import { Canvas } from "@react-three/offscreen";
import { lazy } from "react";

// This is the fallback component that will be rendered on the main thread
// This will happen on systems where OffscreenCanvas is not supported
const Scene = lazy(() => import("./Scene"));

// This is the worker thread that will render the scene
const worker = new Worker(new URL("./worker.tsx", import.meta.url), {
  type: "module",
});

export default function App() {
  return (
    <Canvas
      style={{ height: "100vh" }}
      camera={{ position: [0, 0, 10], fov: 25 }}
      worker={worker}
      fallback={<Scene />}
    />
  );
}
