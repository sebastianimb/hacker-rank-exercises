import React from "react";
import { cryptocurrencyList } from "../utils/cryptocurrency";
function Table({ amount, error }: { amount: number; error: string }) {
  return (
    <div className="card card-text mt-10 mx-4">
      <table className="w-full mb-0 border-collapse">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left">Cryptocurrency</th>
            <th className="px-4 py-2 text-right">Exchange Rate</th>
            <th className="px-4 py-2 text-right">Number of Coins</th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data">
          {cryptocurrencyList.map((crypto) => (
            <tr key={crypto.code} className="border-b last:border-0">
              <td className="px-4 py-2 text-left font-medium">{crypto.name}</td>

              <td className="px-4 py-2 text-right">
                1 USD = {crypto.rate} {crypto.code}
              </td>

              <td className="px-4 py-2 text-right">
                {error ? "n/a" : (amount * crypto.rate).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
