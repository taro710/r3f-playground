import {
  PerformanceMonitor,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

import CameraRig from "./CameraRig";
import Lightformers from "./LightFormer";
import Porsche from "./Porsche";

const App = () => {
  const [degraded, degrade] = useState(false);
  return (
    <Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }}>
      <OrbitControls />
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      <ambientLight intensity={0.5} />
      <Porsche />
      <AccumulativeShadows
        position={[0, -1.16, 0]}
        frames={100}
        alphaTest={0.9}
        scale={10}
      >
        <RandomizedLight
          amount={8}
          radius={10}
          ambient={0.5}
          position={[1, 5, -1]}
        />
      </AccumulativeShadows>
      <PerformanceMonitor onDecline={() => degrade(true)} />
      <Environment
        frames={degraded ? 1 : Infinity}
        resolution={256}
        background
        blur={1}
      >
        <Lightformers />
      </Environment>
      <CameraRig />
    </Canvas>
  );
};

export default App;
