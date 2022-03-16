import React, { useRef } from 'react';

import "./App.scss";

//R3F
import { Canvas, useFrame } from "@react-three/fiber";
// Deai - R3F


const SpinningBox = () => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]}  />
      <meshStandardMaterial attach='material' />
    </mesh>
  )
}

function App() {



  return (
  <>
  <Canvas>
    <SpinningBox />
  </Canvas>
  </>
  );
}

export default App;
