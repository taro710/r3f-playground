import { Debug, Physics, usePlane, useSphere } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import { type Mesh } from "three";

const ScalableBall = () => {
  const [ref, api] = useSphere(
    () => ({
      args: [1],
      mass: 1,
      position: [0, 5, 0],
      material: { friction: 10, restitution: 1 },
    }),
    useRef<Mesh>(null)
  );
  const [sleeping, setSleeping] = useState(false);

  const toggle = () => {
    if (sleeping) {
      setSleeping(false);
      api.wakeUp();
    } else {
      setSleeping(true);
      api.sleep();
    }
  };

  return (
    <mesh castShadow receiveShadow ref={ref} onClick={toggle}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="blue" transparent opacity={0.5} />
    </mesh>
  );
};

const Plane = () => {
  const [ref] = usePlane(
    () => ({
      rotation: [-Math.PI / 2, 0, 0],
      material: { restitution: 0.5 },
      type: "Static",
    }),
    useRef<Mesh>(null)
  );
  return (
    <mesh receiveShadow ref={ref}>
      <planeGeometry args={[15, 15]} />
      <shadowMaterial color="#171717" />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [-1, 2, 4] }}
      style={{ height: "100dvh" }}
    >
      <OrbitControls />
      <color attach="background" args={["#a6d1f6"]} />
      <hemisphereLight />
      <directionalLight position={[5, 10, 5]} castShadow />
      <Physics
        allowSleep // world内でのスリープ状態を有効
      >
        <Debug scale={1.1}>
          <Plane />
          <ScalableBall />
        </Debug>
      </Physics>
    </Canvas>
  );
};

export default App;
