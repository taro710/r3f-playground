import { useState } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Scene = () => {
  const [color, setColor] = useState<string>("hotpink");
  return (
    <mesh
      onClick={() => {
        if (color === "hotpink") {
          setColor("orange");
        } else {
          setColor("hotpink");
        }
      }}
    >
      <torusGeometry />
      <meshStandardMaterial color={color} roughness={0} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: "100dvh" }}>
      <OrbitControls />
      <Scene />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="sunset" blur={0.7} background />
    </Canvas>
  );
};

export default App;
