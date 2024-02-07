import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { useMemo, useState } from "react";
import { Color } from "three";

import niceColors from "./colors";
import Plane from "./Plane";
import Boxes from "./Box";
import Spheres from "./Sphere";

const instancedGeometry = {
  box: Boxes,
  sphere: Spheres,
};

const CubeHeap = () => {
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
    <Canvas
      style={{ height: "100vh" }}
      shadows
      gl={{
        alpha: false,
        // todo: stop using legacy lights
        useLegacyLights: true,
      }}
      camera={{ fov: 50, position: [-1, 1, 2.5] }}
      onPointerMissed={() =>
        setGeometry((geometry) => (geometry === "box" ? "sphere" : "box"))
      }
      onCreated={({ scene }) => (scene.background = new Color("lightblue"))}
    >
      <hemisphereLight intensity={0.35} />
      <spotLight
        position={[5, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
      />
      <Physics broadphase="SAP" gravity={[0, -9.8, 0]}>
        <Plane rotation={[-Math.PI / 2, 0, 0]} />
        <InstancedGeometry {...{ colors, number, size }} />
      </Physics>
    </Canvas>
  );
};

export default CubeHeap;
