import { Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { useMemo, useState } from "react";
import { Color } from "three";

import Boxes from "./Box";
import Plane from "./Plane";
import Spheres from "./Sphere";
import niceColors from "./colors";

const instancedGeometry = {
  box: Boxes,
  sphere: Spheres,
};

const Scene = () => {
  const [geometry, setGeometry] = useState<"box" | "sphere">("box");
  const number = 200;
  const size = 0.1;

  const colors = useMemo(() => {
    const array = new Float32Array(number * 3);
    const color = new Color();
    for (let i = 0; i < number; i++)
      color
        .set(niceColors[Math.floor(Math.random() * 5)])
        .convertSRGBToLinear()
        .toArray(array, i * 3);
    return array;
  }, [number]);
  const InstancedGeometry = instancedGeometry[geometry];

  return (
    <>
      <color attach="background" args={["#171717"]} />
      <OrbitControls />
      {/* <Environment preset="sunset" blur={1} background /> */}
      {/* <hemisphereLight intensity={0.35} /> */}
      {/* <spotLight
        position={[0, 5, 0]}
        angle={0.5}
        penumbra={1}
        intensity={50}
        castShadow
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
      /> */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[-8, 2, 4]} intensity={1} castShadow />
      <directionalLight position={[8, 2, 8]} intensity={1} castShadow />
      <Physics broadphase="SAP" gravity={[0, -9.8, 0]}>
        <Plane
          geomProps={{
            args: [2, 0.01, 2],
            position: [0, -0.3, 0],
            rotation: [0, 0, 0],
          }}
          onClick={() =>
            setGeometry((geometry) => (geometry === "box" ? "sphere" : "box"))
          }
        />
        <InstancedGeometry {...{ colors, number, size }} />
      </Physics>
    </>
  );
};

export default Scene;
