import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Model } from "./components/Model";

function App() {
  return (
    <Canvas shadows camera={{ position: [-8, 100, 50], fov: 100}}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
        <Model position={[-8,0,0]}  rotateX={5}/>
    </Canvas>
  );
}

export default App;
