import "./App.css";
import { Slider } from "./Slider";

function App() {
  


  return (
    <div className="App">
     <Slider/>
    </div>
  );
}

export default App

  {/*     <div className="container">
      <div className="textContainer">
        {Math.round(value)}%
      </div>

          <div className="slider_wrapper">
      <CircularSlider
      size={350}
      minValue={0}
      maxValue={100}
      startAngle={0}
      endAngle={180}
      angleType={{
        direction: "ccw",
        axis: "-x"
      }}
      handle1={{
        value: value,
        onChange: v => changeValue(v)
      }}
       handle2={{
        value: value2,
        onChange: v => setValue2(v)
        } }
      arcColor="#00FFFF"
      arcBackgroundColor="#aaa"
    />
    </div>
    
</div> */}