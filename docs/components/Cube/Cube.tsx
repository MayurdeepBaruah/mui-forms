import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";

function Cube() {
    return (
        <Canvas>
            <ambientLight />
            <Box position={[0, 0, 0]} />
      </Canvas>
    );
}

export default Cube;
