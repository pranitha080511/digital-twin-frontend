"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


/* ---------- Individual Crop ---------- */

function Crop({ x, z, crop, stressLevel }) {

  let color = "#16a34a"; // healthy green

  if (stressLevel === "moderate") color = "#eab308"; // yellow
  if (stressLevel === "high") color = "#dc2626"; // red


  let geometry;

  if (crop === "paddy") {
    geometry = <coneGeometry args={[0.25, 0.8, 8]} />;
  }

  if (crop === "wheat") {
    geometry = <cylinderGeometry args={[0.08, 0.08, 1]} />;
  }

  if (crop === "maize") {
    geometry = <coneGeometry args={[0.35, 1.2, 8]} />;
  }

  if (crop === "sugarcane") {
    geometry = <cylinderGeometry args={[0.12, 0.12, 1.5]} />;
  }

  return (

    <mesh position={[x, 0.6, z]}>
      {geometry}
      <meshStandardMaterial color={color} />
    </mesh>

  );

}



/* ---------- Ground ---------- */

function Ground() {

  return (

    <mesh rotation={[-Math.PI / 2, 0, 0]}>

      <planeGeometry args={[40, 40]} />

      <meshStandardMaterial color="#3d7c3d" />

    </mesh>

  );

}



/* ---------- Farm Scene ---------- */

function FarmScene({ farmGrid }) {

  return (

    <>

      <ambientLight intensity={0.8} />

      <directionalLight position={[10, 10, 5]} intensity={1} />

      <Ground />

      {farmGrid.map((cell, index) => (

        <Crop
          key={index}
          x={cell.x * 2}
          z={cell.z * 2}
          crop={cell.crop}
          stressLevel={cell.stressLevel}
        />

      ))}

    </>

  );

}



/* ---------- Main Component ---------- */

export default function Farm3D({ farmGrid }) {

  if (!farmGrid) return null;

  return (

    <div className="h-[500px] bg-green-100 rounded-xl">

      <Canvas camera={{ position: [14, 14, 14], fov: 60 }}>

        <OrbitControls />

        <FarmScene farmGrid={farmGrid} />

      </Canvas>

    </div>

  );

}