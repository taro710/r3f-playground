import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/three/index/Index";
import Sample from "./pages/three/sample/Index";
import Sample2 from "./pages/three/sample2/Index";
import Chain from "./pages/cannon/demo-Chain";
import CompoundBody from "./pages/cannon/demo-CompoundBody";
import Constraints from "./pages/cannon/demo-Constraints";
// import ConvexPolyhedron from "./pages/cannon/demo-ConvexPolyhedron";
import CubeHeap from "./pages/cannon/cubeHeap/Index";
import CubeHeapWithWorker from "./pages/cannon/cubeHeapWithWorker/Index";
import Friction from "./pages/cannon/Friction";
// import Heightfield from "./pages/cannon/demo-Heightfield";
import HingeMotor from "./pages/cannon/demo-HingeMotor";
// import KinematicCube from "./pages/cannon/demo-KinematicCube";
import Paused from "./pages/cannon/demo-Paused";
import SphereDebug from "./pages/cannon/SphereDebug";
import Triggers from "./pages/cannon/demo-Triggers";
// import Trimesh from "./pages/cannon/demo-Trimesh";

import Worker from "./pages/worker/App";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Index />} />
        <Route path={"/sample"} element={<Sample />} />
        <Route path={"/sample2"} element={<Sample2 />} />

        <Route path={"/worker"} element={<Worker />} />

        <Route path={"/cannon/chain"} element={<Chain />} />
        <Route path={"/cannon/compound-body"} element={<CompoundBody />} />
        <Route path={"/cannon/constraints"} element={<Constraints />} />
        {/* <Route
          path={"/cannon/convex-polyhedron"}
          element={<ConvexPolyhedron />}
        /> */}
        <Route path={"/cannon/cube-heap"} element={<CubeHeap />} />
        <Route path={"/cannon/cube-heap2"} element={<CubeHeapWithWorker />} />
        <Route path={"/cannon/friction"} element={<Friction />} />
        {/* <Route path={"/cannon/heightfield"} element={<Heightfield />} /> */}
        <Route path={"/cannon/hinge-motor"} element={<HingeMotor />} />
        {/* <Route path={"/cannon/kinematic-cube"} element={<KinematicCube />} /> */}
        <Route path={"/cannon/paused"} element={<Paused />} />
        <Route path={"/cannon/sphere-debug"} element={<SphereDebug />} />
        <Route path={"/cannon/triggers"} element={<Triggers />} />
        {/* <Route path={"/cannon/trimesh"} element={<Trimesh />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
