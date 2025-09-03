import { useState } from "react";
export default function App() {
  const today = new Date().toDateString();
  const [sliderValue, setSliderValue] = useState(1);
  const [counter, setCounter] = useState(0);
  let todayAfter = new Date();
  todayAfter.setDate(counter);
  return (
    <div>
      <div className="slider">
        <input
          type="range"
          min={1}
          max={10}
          value={Number(sliderValue)}
          onChange={(e) => setSliderValue(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => setCounter(counter + Number(sliderValue))}>
          +
        </button>
        <input
          type="text"
          placeholder=""
          value={Number(counter)}
          onChange={(e) => setCounter(e.target.value)}
        />
        <button onClick={() => setCounter(counter - Number(sliderValue))}>
          -
        </button>
      </div>
      {counter === 0 ? (
        <p>Today is {today}</p>
      ) : (
        <p>
          {counter} days from Today is {todayAfter.toDateString()}
        </p>
      )}
      {counter !== 0 || sliderValue !== 1 ? (
        <button
          onClick={() => {
            setCounter(0);
            setSliderValue(1);
          }}
        >
          Reset
        </button>
      ) : null}
    </div>
  );
}
