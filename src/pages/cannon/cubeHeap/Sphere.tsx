import { useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import type { InstancedMesh } from "three";

type InstancedGeometryProps = {
  colors: Float32Array;
  number: number;
  size: number;
};

const Spheres = ({ colors, number, size }: InstancedGeometryProps) => {
  const [ref, { at }] = useSphere(
    () => ({
      args: [size],
      mass: 1,
      position: [Math.random() - 0.5, Math.random() * 2, Math.random() - 0.5],
    }),
    useRef<InstancedMesh>(null)
  );
  useFrame(() =>
    at(Math.floor(Math.random() * number)).position.set(0, Math.random() * 2, 0)
  );
  return (
    <instancedMesh
      receiveShadow
      castShadow
      ref={ref}
      args={[undefined, undefined, number]}
    >
      <sphereGeometry args={[size, 48]}>
        <instancedBufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </sphereGeometry>
      {/* <meshLambertMaterial vertexColors /> */}
      <meshStandardMaterial color="red" roughness={0} />
    </instancedMesh>
  );
};

export default Spheres;
