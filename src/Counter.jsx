import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const AddCount = () => {
    setCount(count + 1);
  };

  const SubstractCount = () => {
    setCount(count - 1);
  };

  const ResetCount = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center gap-6 w-80">
        <p className="text-5xl font-bold text-gray-800">{count}</p>

        <div className="flex gap-4">
          <button
            onClick={AddCount}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition"
          >
            Add
          </button>

          <button
            onClick={ResetCount}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition"
          >
            Reset
          </button>

          <button
            onClick={SubstractCount}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition"
          >
            Minus
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
