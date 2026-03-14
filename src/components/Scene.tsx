import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function RotatingBox() {
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (ref.current && typeof window !== "undefined") {
      ref.current.rotation.y = window.scrollY / (Math.PI * 30);
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry />
      <meshNormalMaterial />
    </mesh>
  );
}

export function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 3.5] }} style={{ height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <RotatingBox />
    </Canvas>
  );
}
