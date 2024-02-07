import type { PlaneProps } from "@react-three/cannon";
import { usePlane } from "@react-three/cannon";
import { useRef } from "react";
import type { Mesh } from "three";

const Plane = (props: PlaneProps) => {
  const [ref] = usePlane(() => ({ ...props }), useRef<Mesh>(null));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[5, 5]} />
      <shadowMaterial color="#171717" />
      {/* <meshStandardMaterial color={"white"} /> */}
    </mesh>
  );
};

export default Plane;
