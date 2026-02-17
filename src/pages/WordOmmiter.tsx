import React, { useState } from "react";

const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

function WordOmitter() {
  const [inputText, setInputText] = useState("");
  const [omitWords, setOmitWords] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const toggleOmitWords = () => {
    setOmitWords(!omitWords);
  };

  const clearFields = () => {
    setInputText("");
    setOmitWords(true);
  };

  const getProcessedText = () => {
    if (!inputText) return "";

    const words = inputText.split(" ");
    const filteredWords = words.filter(
      (word) => !OMITTED_WORDS.includes(word.toLowerCase()),
    );
    return filteredWords.join(" ");
  };

  return (
    <div className="mx-auto max-w-96 my-0 w-full self-center flex flex-col p-8 gap-2 items-center mt-8">
      <textarea
        placeholder="Type here..."
        value={inputText}
        onChange={handleInputChange}
        data-testid="input-area"
        className="outline-none border w-full rounded-md border-neutral-800 p-8 min-h-36"
      />
      <div className="mt-8 w-full justify-center flex gap-8">
        <button
          onClick={toggleOmitWords}
          className="p-4 w-full bg-green-600 rounded-md cursor-pointer"
          data-testid="action-btn"
        >
          {omitWords ? "Show All Words" : "Omit Words"}
        </button>
        <button
          onClick={clearFields}
          className="p-4 w-full bg-neutral-500 rounded-md cursor-pointer"
          data-testid="clear-btn"
        >
          Clear
        </button>
      </div>
      <div className="m-8 p-8 border w-full rounded-md border-neutral-800">
        <h2 className="pb-4">Output:</h2>
        <p data-testid="output-text">
          {omitWords ? getProcessedText() : inputText}
        </p>
      </div>
    </div>
  );
}

export { WordOmitter };
