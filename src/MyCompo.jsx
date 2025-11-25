import { useState } from "react";

function MyCompo() {
  const [food, setFood] = useState(["apple", "banana", "orange"]);

  function handleAddElement() {
    const newFood = document.getElementById("inp").value;
    document.getElementById("inp").value = "";
    setFood((f) => [...f, newFood]);
  }

  function handleDelete(index) {
    setFood(food.filter((_, i) => i !== index));
  }

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-center text-2xl font-semibold mb-4">list of food</h2>

      <ul className="mb-4">
        {food.map((food, index) => (
          <li
            key={index}
            onClick={() => handleDelete(index)}
            className="bg-gray-100 mb-2 px-4 py-2 rounded-lg cursor-pointer transition hover:bg-red-100 hover:translate-x-1"
          >
            {food}
          </li>
        ))}
      </ul>

      <div className="flex gap-2">
        <input
          type="text"
          id="inp"
          className="flex-1 px-3 py-2 border rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
        />
        <button
          onClick={handleAddElement}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg transition hover:bg-blue-700"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default MyCompo;
