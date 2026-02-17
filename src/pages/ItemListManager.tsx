import { useState } from "react";

function ItemListManager() {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    if (input.trim() === "") return;
    setItems([...items, input]);
    setInput("");
  };

  return (
    <>
      <div className="mx-0 my-auto w-full flex flex-col items-center justify-center gap-4 p-8">
        <h3 className="text-2xl pb-4 font-bold">Item List</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
          data-testid="input-field"
          className="border min-w-64 border-neutral-800 p-4 rounded-md outline-none"
        />
        <button
          onClick={handleAddItem}
          data-testid="add-button"
          className="border min-w-64 mb-4 border-neutral-800 w-fit p-4 rounded-md bg-neutral-800 text-white hover:bg-neutral-700"
        >
          Add Item
        </button>
        {items.length > 0 && (
          <ul
            data-testid="item-list"
            className="min-w-64 p-4 rounded-md border flex flex-col gap-2 border-neutral-800"
          >
            {items.map((item, index) => (
              <li key={index} data-testid="list-item">
                - {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default ItemListManager;
