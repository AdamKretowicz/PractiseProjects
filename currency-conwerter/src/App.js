import { useEffect, useState } from "react";
import "./App.css";
import { click } from "@testing-library/user-event/dist/click";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [input, setInput] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchCurrencies() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${input}&from=${fromCur}&to=${toCur}`
        );
        const data = await res.json();
        setOutput(data.rates[toCur]);
        setIsLoading(false);
      }
      if (fromCur === toCur) return setOutput(input);
      fetchCurrencies();
    },
    [input, fromCur, toCur]
  );

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromCur}
        onChange={(e) => setFromCur(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="PLN">PLN</option>
        <option value="JPY">JPY</option>
      </select>
      <select
        value={toCur}
        onChange={(e) => setToCur(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="PLN">PLN</option>
        <option value="JPY">JPY</option>
      </select>
      <p>
        {output} {toCur}
      </p>
    </div>
  );
}
