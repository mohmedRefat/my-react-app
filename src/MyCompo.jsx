import { useState } from "react";

function MyCompo() {
  const [car, setCar] = useState({ year: 2025, make: "Bmw", name: "m5" });
  function handleYear(e) {
    setCar((c) => ({ ...c, year: e.target.value }));
  }

  function handleMake(e) {
    setCar((c) => ({ ...c, make: e.target.value }));
  }
  function handleName(e) {
    setCar((c) => ({ ...c, name: e.target.value }));
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg p-8 rounded-2xl flex flex-col gap-6">
      <h2 className="text-xl font-bold text-gray-800 text-center">
        Your favorite car is:
        <span className="text-blue-600"> {car.year}</span>
        <span className="text-red-600"> {car.name}</span>
        <span className="text-green-600"> {car.make}</span>
      </h2>

      <div className="flex flex-col gap-4">
        <input
          type="number"
          value={car.year}
          className="border rounded-lg px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleYear}
        />

        <input
          type="text"
          value={car.name}
          className="border rounded-lg px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-purple-400"
          onChange={handleName}
        />

        <input
          type="text"
          value={car.make}
          className="border rounded-lg px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={handleMake}
        />
      </div>
    </div>
  );
}

export default MyCompo;
