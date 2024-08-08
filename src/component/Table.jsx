import React from "react";
import { formatter } from "../util/investment";

function Table({ data }) {
  return (
    <div id="result">
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(item.anualInvestment)}</td>
              <td>{formatter.format(item.anualInvestment)}</td>
            </tr>
          ))}
    </div>
  );
}

export default Table;
