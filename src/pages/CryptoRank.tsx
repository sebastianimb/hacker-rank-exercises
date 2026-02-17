import { useState } from "react";
import Table from "../components/Table";

function CryptoRank() {
  const [amount, setAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  function handleExchange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseFloat(e.target.value);
    setAmount(value);
    if (isNaN(value)) {
      setErrorMessage("Amount cannot be empty.");
    } else if (value < 0.01) {
      setErrorMessage("Amount must be at least $0.01.");
    } else if (value > 17042.67) {
      setErrorMessage("Amount cannot exceed the available balance.");
    } else {
      setErrorMessage("");
    }
  }
  return (
    <div className="mx-auto max-w-96 my-0 w-full self-center flex flex-col p-8 gap-2 items-center mt-8">
      <h1 className="font-bold text-2xl">CryptoRank Exchange</h1>
      <section>
        <div className="flex flex-col align-items-center mt-12 px-8 text-center">
          <label>
            I want to exchange ${" "}
            <input
              className="w-full border outline-none border-neutral-800 rounded-md p-2 my-2 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              data-testid="amount-input"
              required
              type="number"
              placeholder="USD"
              value={amount}
              onChange={handleExchange}
            />
            of my $<span>17042.67</span>:
          </label>
          {errorMessage && (
            <p data-testid="error-message" className="text-red-500 mt-2">
              {errorMessage}
            </p>
          )}
        </div>
      </section>
      <Table amount={amount} error={errorMessage} />
    </div>
  );
}

export default CryptoRank;
