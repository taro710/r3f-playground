import { useGLTF } from "@react-three/drei";
import { applyProps } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import * as THREE from "three";

/*
Author: Karol Miklas (https://sketchfab.com/karolmiklas)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/free-porsche-911-carrera-4s-d01b254483794de3819786d93e0e1ebf
Title: (FREE) Porsche 911 Carrera 4S
*/

const Porsche = () => {
  const { scene, nodes, materials } = useGLTF("/911-transformed.glb");
  useLayoutEffect(() => {
    Object.values(nodes).forEach(
      (node) =>
        (node as THREE.Mesh).isMesh &&
        (node.receiveShadow = node.castShadow = true)
    );
    applyProps(materials.rubber as any, {
      color: "#222",
      roughness: 0.6,
      roughnessMap: null,
      normalScale: [4, 4],
    });
    applyProps(materials.window as any, {
      color: "black",
      roughness: 0,
      clearcoat: 0.1,
    });
    applyProps(materials.coat as any, {
      envMapIntensity: 4,
      roughness: 0.5,
      metalness: 1,
    });
    applyProps(materials.paint as any, {
      envMapIntensity: 2,
      roughness: 0.45,
      metalness: 0.8,
      color: "#555",
    });
  }, [nodes, materials]);
  scene.scale.set(1.6, 1.6, 1.6);
  scene.position.set(-0.5, -0.18, 0);
  scene.rotation.set(0, Math.PI / 5, 0);
  return <primitive object={scene} />;
};

export default Porsche;
