import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState(0);
  const [friendService, setFriendService] = useState(0);

  const totalTip =
    (Number(bill) * (Number(service) + Number(friendService))) / 2;

  function handleReset() {
    setBill(0);
    setService(0);
    setFriendService(0);
  }

  return (
    <div>
      <h1>Tip Calculator</h1>
      <Bill bill={bill} setBill={setBill} />
      <Service service={service} setService={setService}>
        How did you like the service?{" "}
      </Service>
      <Service service={friendService} setService={setFriendService}>
        How did your friend like the service
      </Service>
      {bill > 0 && (
        <h2>
          You Pay ${Number(totalTip) + Number(bill)}
          {`($${bill} + $${totalTip} tip)`}
        </h2>
      )}
      {bill > 0 && <button onClick={() => handleReset()}>RESET</button>}
    </div>
  );
}
function Bill({ bill, setBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="number"
        placeholder="bill amount"
        min={0}
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}

function Service({ children, service, setService }) {
  return (
    <div>
      {children}
      <select
        value={service}
        onChange={(e) => setService(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied 0%</option>
        <option value={0.05}>Okay 5%</option>
        <option value={0.1}>Good 10%</option>
        <option value={0.2}>Amazing! 20%</option>
      </select>
    </div>
  );
}
