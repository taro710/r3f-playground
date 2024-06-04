import { Link } from "react-router-dom";

const baseUrl = "/r3f-playground"; // TODO: configで解決する

const Top = () => {
  return (
    <dl>
      <dt>three fiber</dt>
      <dd>
        <Link to={`${baseUrl}/sample`}>sample</Link>
      </dd>
      <dd>
        <Link to={`${baseUrl}/sample2`}>sample2</Link>
      </dd>
      <dd>
        <Link to={`${baseUrl}/sample3`}>sample3</Link>
      </dd>
      <dd>
        <Link to={`${baseUrl}/basic`}>basic</Link>
      </dd>
      <dd>
        <Link to={`${baseUrl}/tree`}>tree</Link>
      </dd>
      <dd>
        <Link to={`${baseUrl}/cube-by-cube`}>cubeByCube</Link>
      </dd>
      <dd>
        <Link to={`${baseUrl}/worker`}>worker</Link>
      </dd>
      <dd>
        <Link to={`${baseUrl}/porsche`}>porsche</Link>
      </dd>

      <dt>three cannon</dt>
      <dd>
        <Link to={`${baseUrl}/cannon/sphere-debug`}>SphereDebug</Link>
      </dd>
      <dd>
        <Link to={`${baseUrl}/cannon/cube-heap`}>CubeHeap</Link>
      </dd>
      <dd>
        <Link to={`${baseUrl}/cannon/cube-heap2`}>CubeHeap(With Worker)</Link>
      </dd>
    </dl>
  );
};
export default Top;
