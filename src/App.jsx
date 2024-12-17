import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    if (count >= 25) {
      alert("This count cannot go beyond 25.");
    } else {
      setCount(count + 1);
    }
  };

  const removeValue = () => {
    if (count <= 0) {
      alert("Negative values are not allowed.");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#212121]">
      <div className="bg-white p-8 shadow-lg rounded-lg text-center w-96">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Counter App</h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-6">
          Counter Value: <span className="text-blue-500">{count}</span>
        </h2>
        <div className="flex gap-4 justify-center">
          <button
            onClick={addValue}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          >
            Add Value
          </button>
          <button
            onClick={removeValue}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
          >
            Remove Value
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
