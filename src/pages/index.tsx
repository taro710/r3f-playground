import { Link } from "react-router-dom";

const Top = () => {
  return (
    <dl>
      <dt>three fiber</dt>
      <dd>
        <ul>
          <li>
            <Link to="/sample">sample</Link>
          </li>
          <li>
            <Link to="/sample2">sample2</Link>
          </li>
          <li>
            <Link to="/sample3">sample3</Link>
          </li>
          <li>
            <Link to="/worker">worker</Link>
          </li>
          <li>
            <Link to="/porsche">porsche</Link>
          </li>
        </ul>
      </dd>
      <dt>three cannon</dt>
      <dd>
        <ul>
          <li>
            <Link to="/cannon/sphere-debug">SphereDebug</Link>
          </li>
          <li>
            <Link to="/cannon/cube-heap">CubeHeap</Link>
          </li>
          <li>
            <Link to="/cannon/cube-heap2">CubeHeap(With Worker)</Link>
          </li>
        </ul>
      </dd>
    </dl>
  );
};
export default Top;
