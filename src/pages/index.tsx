import { Link } from "react-router-dom";

const Top = () => {
  return (
    <dl>
      <dt>three fiber</dt>
      <dd>
        <Link to="/sample">sample</Link>
      </dd>
      <dd>
        <Link to="/sample2">sample2</Link>
      </dd>
      <dd>
        <Link to="/sample3">sample3</Link>
      </dd>
      <dd>
        <Link to="/basic">basic</Link>
      </dd>
      <dd>
        <Link to="/tree">tree</Link>
      </dd>
      <dd>
        <Link to="/worker">worker</Link>
      </dd>
      <dd>
        <Link to="/porsche">porsche</Link>
      </dd>

      <dt>three cannon</dt>
      <dd>
        <Link to="/cannon/sphere-debug">SphereDebug</Link>
      </dd>
      <dd>
        <Link to="/cannon/cube-heap">CubeHeap</Link>
      </dd>
      <dd>
        <Link to="/cannon/cube-heap2">CubeHeap(With Worker)</Link>
      </dd>
    </dl>
  );
};
export default Top;
