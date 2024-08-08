import { useState } from "react";
import "../App.css";

function Main({ onCalculate }) {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [anualInvestment, setAnualInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({
      initialInvestment: parseFloat(initialInvestment),
      anualInvestment: parseFloat(anualInvestment),
      expectedReturn: parseFloat(expectedReturn),
      duration: parseInt(duration, 10),
    });
  };

  return (
    <form id="user-input" className="input-group" onSubmit={handleSubmit}>
      <div>
        <label>Initial Investment</label>
        <input
          className="abc"
          type="text"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(e.target.value)}
        />
        <label>Anual Investment</label>
        <input
          type="text"
          value={anualInvestment}
          onChange={(e) => setAnualInvestment(e.target.value)}
        />
      </div>
      <div>
        <label>Expected Return</label>
        <input
          className="abc"
          type="text"
          value={expectedReturn}
          onChange={(e) => setExpectedReturn(e.target.value)}
        />
        <label>Duration</label>
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <button type="submit">Calculate</button>
    </form>
  );
}
export default Main;
