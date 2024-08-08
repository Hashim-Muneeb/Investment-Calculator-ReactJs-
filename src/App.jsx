import React, { useState } from "react";
import Main from "./component/Main";
import Table from "./component/Table";
import Img1 from "./assets/investment-calculator-logo.png";
import "./App.css";
import { calculateInvestmentResults } from "../src/util/investment";

function App() {
  const [data, setData] = useState([]);

  const handleCalculate = (inputData) => {
    const results = calculateInvestmentResults(inputData);
    setData(results);
  };

  return (
    <div>
      <div id="header">
        <img src={Img1} alt="" srcset="" />
        <h1>Investment Calculator</h1>
      </div>
      <Main onCalculate={handleCalculate} />
     <Table data={data} />
    </div>
  );
}

export default App;
