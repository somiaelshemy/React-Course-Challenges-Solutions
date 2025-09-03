import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return (
    <div className="app">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [step, setStep] = React.useState(0);
  const [count, setCount] = React.useState(0);

  let today = new Date();
  today.setDate(count);

  return (
    <div>
      <div className="step">
        <button onClick={() => setStep(step + 1)}> + </button>
        <span>Step: {step}</span>
        <button onClick={() => setStep(step - 1)}> - </button>
      </div>

      <div className="step">
        <button onClick={() => setCount(count + step)}> + </button>
        <span>Count: {count}</span>
        <button onClick={() => setCount(count - step)}> - </button>
      </div>

      <p>
        {count} days from today is {today.toDateString()}.
      </p>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
