import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Box(props) {
    const mesh: any = useRef();
    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
        }
    });
    return (
       <mesh {...props} ref={mesh}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color={"orange"} />
       </mesh>
    );
}

export default Box;
