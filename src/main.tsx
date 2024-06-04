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
import Basic from "./pages/three/basic/index";
import CubeByCube from "./pages/three/cubeByCube/index";
import Porsche from "./pages/three/porsche/Index";
import Sample from "./pages/three/sample/Index";
import Sample2 from "./pages/three/sample2/Index";
import Sample3 from "./pages/three/sample3/Index";
import Tree from "./pages/three/tree/index";
import Worker from "./pages/three/worker/App";
// import Trimesh from "./pages/cannon/demo-Trimesh";
// import ConvexPolyhedron from "./pages/cannon/demo-ConvexPolyhedron";
// import Heightfield from "./pages/cannon/demo-Heightfield";
// import KinematicCube from "./pages/cannon/demo-KinematicCube";

const baseUrl = "/r3f-playground";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={`${baseUrl}/`} element={<Top />} />
        <Route path={`${baseUrl}/basic`} element={<Basic />} />
        <Route path={`${baseUrl}/tree`} element={<Tree />} />
        <Route path={`${baseUrl}/cube-by-cube`} element={<CubeByCube />} />

        <Route path={`${baseUrl}/worker`} element={<Worker />} />

        <Route path={`${baseUrl}/cannon/chain`} element={<Chain />} />
        <Route
          path={`${baseUrl}/cannon/compound-body`}
          element={<CompoundBody />}
        />
        <Route
          path={`${baseUrl}/cannon/constraints`}
          element={<Constraints />}
        />
        {/* <Route
          path={"/cannon/convex-polyhedron"}
          element={<ConvexPolyhedron />}
        /> */}
        <Route path={`${baseUrl}/cannon/cube-heap`} element={<CubeHeap />} />
        <Route
          path={`${baseUrl}/cannon/cube-heap2`}
          element={<CubeHeapWithWorker />}
        />
        <Route path={`${baseUrl}/cannon/friction`} element={<Friction />} />
        {/* <Route path={"/cannon/heightfield"} element={<Heightfield />} /> */}
        <Route
          path={`${baseUrl}/cannon/hinge-motor`}
          element={<HingeMotor />}
        />
        {/* <Route path={"/cannon/kinematic-cube"} element={<KinematicCube />} /> */}
        <Route path={`${baseUrl}/cannon/paused`} element={<Paused />} />
        <Route
          path={`${baseUrl}/cannon/sphere-debug`}
          element={<SphereDebug />}
        />
        <Route path={`${baseUrl}/cannon/triggers`} element={<Triggers />} />
        {/* <Route path={"/cannon/trimesh"} element={<Trimesh />} /> */}
        <Route path={`${baseUrl}/sample`} element={<Sample />} />
        <Route path={`${baseUrl}/sample2`} element={<Sample2 />} />
        <Route path={`${baseUrl}/sample3`} element={<Sample3 />} />
        <Route path={`${baseUrl}/porsche`} element={<Porsche />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
