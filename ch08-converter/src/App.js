// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState, useEffect } from "react";
export default function App() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [output, setOutput] = useState(0);

  useEffect(
    function () {
      async function fetchData() {
        if (from === to) return setOutput(amount);
        if (amount === 0) return setAmount(1);
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${Number(
              amount
            )}&from=${from}&to=${to}`
          );
          if (!res.ok) throw new Error("error fetching the API");
          const data = await res.json();
          setOutput(data.rates[to]);

          if (data.Response === "False") throw new Error("error fetching data");
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    },
    [amount, from, to]
  );

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option value="USD">USD</option>tgk
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{output}</p>
    </div>
  );
}
