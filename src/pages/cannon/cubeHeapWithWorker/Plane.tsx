import { useBox } from "@react-three/cannon";
import { useRef } from "react";

import type { BoxProps } from "@react-three/cannon";
import type { Mesh } from "three";

type Props = {
  geomProps: BoxProps;
  onClick: () => void;
};

const Plane = ({ geomProps, onClick }: Props) => {
  const [ref] = useBox(() => ({ ...geomProps }), useRef<Mesh>(null));
  return (
    <mesh ref={ref} receiveShadow onClick={onClick}>
      <boxGeometry {...geomProps} />
      {/* <shadowMaterial color="#171717" /> */}
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default Plane;
