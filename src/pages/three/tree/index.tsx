import { useGLTF, OrbitControls, ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";

const MODELS = {
  Beech:
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf",
  Lime: "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-lime/model.gltf",
  Spruce:
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-spruce/model.gltf",
};

type Models = keyof typeof MODELS;

const Model = ({ url }: { url: string }) => {
  const { scene } = useGLTF(url);
  // <primitive object={...} mounts an already existing object
  return <primitive object={scene} />;
};

const App = () => {
  const { model } = useControls({
    model: {
      value: "Beech" as Models,
      options: Object.keys(MODELS) as Models[],
    },
  });
  return (
    <>
      <header>This is a {model.toLowerCase()} tree.</header>
      <Canvas camera={{ position: [-10, 10, 40], fov: 50 }}>
        <color attach="background" args={["#f0f0f0"]} />
        <hemisphereLight color="white" groundColor="blue" intensity={3.5} />
        <spotLight
          position={[50, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={10000}
        />
        <group position={[0, -10, 0]}>
          <Model url={MODELS[model]} />
          <ContactShadows scale={20} blur={10} far={20} />
        </group>
        <OrbitControls />
      </Canvas>
    </>
  );
};
export default App;

// Silently pre-load all models
Object.values(MODELS).forEach((url) => useGLTF.preload(url));
