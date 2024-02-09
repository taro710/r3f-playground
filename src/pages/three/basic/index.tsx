import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

type BoxProps = {
  position: [number, number, number];
};
const Box = ({ position }: BoxProps) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState<boolean>(false);
  const [clicked, click] = useState<boolean>(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta;
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      position={position}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

const Index = () => {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
};
export default Index;
