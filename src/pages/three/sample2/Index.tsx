import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

// const GeoEnv = () => {
//   const envMap = useEnvironment({
//     files: "/src/assets/japand.jpg",
//   });

//   return (
//     <>
//       <Environment map={envMap} background />
//       <Sphere>
//         <meshStandardMaterial />
//       </Sphere>
//     </>
//   );
// };

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
      <boxGeometry />
      <meshStandardMaterial color={color} roughness={0.02} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: "100dvh" }}>
      <OrbitControls />
      <Scene />
      <pointLight position={[10, 10, 10]} />
      <Environment
        files="/src/assets/texture/environment/poly_haven_studio_1k.hdr"
        blur={0}
        background
      />
    </Canvas>
  );
};

export default App;
