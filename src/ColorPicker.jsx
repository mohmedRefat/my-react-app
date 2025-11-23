import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#d5d5d5");

  function handleColor(e) {
    setColor(e.target.value);
  }

  return (
    <form className="max-w-md mx-auto mt-10 bg-white shadow-lg p-8 rounded-2xl flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        Color Picker
      </h1>

      <div className="flex flex-col gap-3">
        <h2
          className="text-lg font-semibold text-white p-4 rounded-lg shadow transition-all duration-300"
          style={{ backgroundColor: color }}
        >
          Selected Color: <span className="font-bold">{color}</span>
        </h2>

        <input
          type="color"
          onChange={handleColor}
          className="w-20 h-10 rounded cursor-pointer shadow border border-gray-300"
        />
      </div>
    </form>
  );
}

export default ColorPicker;
