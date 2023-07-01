/* eslint-disable react/no-unknown-property */
import "./App.css";
import { RoundedBox } from "@react-three/drei";

function App() {
  return (
    <>
      <color attach="background" args={["#d3d3d3"]}/>
      <ambientLight intensity={0.1} />
      <RoundedBox
        args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
        radius={0.05} // Radius of the rounded corners. Default is 0.05
        smoothness={4} // The number of curve segments. Default is 4
        creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
      >
        <meshPhongMaterial color="#000" />
      </RoundedBox>
    </>
  );
}

export default App;
