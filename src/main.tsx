import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Friction from "./pages/cannon/Friction";
import SphereDebug from "./pages/cannon/SphereDebug";
import CubeHeap from "./pages/cannon/cubeHeap/Index";
import CubeHeapWithWorker from "./pages/cannon/cubeHeapWithWorker/Index";
import Chain from "./pages/cannon/demo-Chain";
import CompoundBody from "./pages/cannon/demo-CompoundBody";
import Constraints from "./pages/cannon/demo-Constraints";
import HingeMotor from "./pages/cannon/demo-HingeMotor";
import Paused from "./pages/cannon/demo-Paused";
import Triggers from "./pages/cannon/demo-Triggers";
import Top from "./pages/index";
import Porsche from "./pages/three/porsche/Index";
import Sample from "./pages/three/sample/Index";
import Sample2 from "./pages/three/sample2/Index";
import Sample3 from "./pages/three/sample3/Index";
import Worker from "./pages/three/worker/App";
// import Trimesh from "./pages/cannon/demo-Trimesh";
// import ConvexPolyhedron from "./pages/cannon/demo-ConvexPolyhedron";
// import Heightfield from "./pages/cannon/demo-Heightfield";
// import KinematicCube from "./pages/cannon/demo-KinematicCube";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />

        <Route path="/worker" element={<Worker />} />

        <Route path="/cannon/chain" element={<Chain />} />
        <Route path="/cannon/compound-body" element={<CompoundBody />} />
        <Route path="/cannon/constraints" element={<Constraints />} />
        {/* <Route
          path={"/cannon/convex-polyhedron"}
          element={<ConvexPolyhedron />}
        /> */}
        <Route path="/cannon/cube-heap" element={<CubeHeap />} />
        <Route path="/cannon/cube-heap2" element={<CubeHeapWithWorker />} />
        <Route path="/cannon/friction" element={<Friction />} />
        {/* <Route path={"/cannon/heightfield"} element={<Heightfield />} /> */}
        <Route path="/cannon/hinge-motor" element={<HingeMotor />} />
        {/* <Route path={"/cannon/kinematic-cube"} element={<KinematicCube />} /> */}
        <Route path="/cannon/paused" element={<Paused />} />
        <Route path="/cannon/sphere-debug" element={<SphereDebug />} />
        <Route path="/cannon/triggers" element={<Triggers />} />
        {/* <Route path={"/cannon/trimesh"} element={<Trimesh />} /> */}
        <Route path="/sample" element={<Sample />} />
        <Route path="/sample2" element={<Sample2 />} />
        <Route path="/sample3" element={<Sample3 />} />
        <Route path="/porsche" element={<Porsche />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
