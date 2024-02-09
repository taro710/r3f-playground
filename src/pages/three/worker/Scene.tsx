import {
  useGLTF,
  Center,
  ContactShadows,
  Environment,
  CameraControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

function Model() {
  const mesh = useRef<Mesh>(null);
  const { nodes, materials } = useGLTF("/pmndrs.glb");
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const color = hovered ? "hotpink" : "orange";
  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta / 2;
    mesh.current.rotation.y += delta / 2;
  });

  return (
    <>
      <Center ref={mesh}>
        <mesh
          geometry={nodes.cube.geometry}
          material={materials.base}
          material-color={color}
          scale={active ? 0.3 : 0.25}
          onClick={(e) => (e.stopPropagation(), setActive(!active))}
          onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
          onPointerOut={() => setHover(false)}
        />
      </Center>
      <ContactShadows
        color={color}
        position={[0, -1.5, 0]}
        blur={3}
        opacity={0.75}
      />
    </>
  );
}

export default function App() {
  return (
    <>
      <color attach="background" args={["#f0f0f0"]} />
      <ambientLight />
      <pointLight position={[10, 10, 5]} />
      <Model />
      <Environment preset="city" />
      <CameraControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
    </>
  );
}
