/* eslint-disable react/no-unknown-property */
import "./App.css";
import { ScrollControls, Scroll } from "@react-three/drei";

function App() {
  return (
    <>
      <color attach="background" args={["#d3d3d3"]} />
      <ScrollControls pages={3} damping={0.1} vertical>
        <Scroll>

        </Scroll>
        <Scroll html style={{width:"100%"}}>
          <h1 className=" absolute top-[65vh] left-[25%] text-[13em]">Tamani</h1>

          <div className="w-[100%] px-[40px] absolute top-[132vh]">
            <h2>Be a Man of the future</h2>
            <p className=" max-w-[400px]">Featuring a sleek design inspired by advanced technology</p>
            <button>Read more</button>
            <p></p>
          </div>
          <div className="w-[100%] px-[40px] absolute top-[230vh]">
            <div className="absolute -right-[6%] w-[540px]">
            <h2 className=" max-w-[440px]">Tech-Savvy Side</h2>
            <p className=" max-w-[440px]">Featuring a sleek design inspired by advanced technology</p>
            </div>
          </div>
          <h2 className=" absolute top-[350vh] left-[50%]" style={{transform:"translate(-50%,-50%)"}}>Cutting edge</h2>
          <button className=" absolute top-[350vh] left-[50%]" style={{transform:"translate(-50%,-50%)"}}>Buy now</button>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
