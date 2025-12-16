import { useState } from "react";

function Todolist() {
  const [task, setTask] = useState([
    "wake up at 9:00 Am",
    "Take a shower",
    "Do coding",
  ]);

  const [newTask, setNewT] = useState("");

  function handleinput(event) {
    setNewT(event.target.value);
  }
  function DeleteElement(i) {
    const updateTask = task.filter((_, index) => index !== i);
    setTask(updateTask);
  }
  function AddElement() {
    if (newTask.trim() !== " ") {
      setTask((t) => [...t, newTask]);
    }
  }

  function moveUp(i) {
    if (i > 0) {
      const updatedTask = [...task];
      [updatedTask[i], updatedTask[i - 1]] = [
        updatedTask[i - 1],
        updatedTask[i],
      ];

      setTask(updatedTask);
    }
  }

  function moveDown(i) {
    if (i < task.length - 1) {
      const updatedTask = [...task];
      [updatedTask[i], updatedTask[i + 1]] = [
        updatedTask[i + 1],
        updatedTask[i],
      ];

      setTask(updatedTask);
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-start pt-16 bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          To-Do List
        </h1>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter your task"
            value={newTask}
            onChange={handleinput}
            className="flex-1 px-4 py-2 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />
          <button
            onClick={AddElement}
            className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition active:scale-95"
          >
            Add
          </button>
        </div>

        <ol className="space-y-3">
          {task.map((t, i) => (
            <li
              key={i}
              className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-xl shadow-sm border hover:shadow-md transition"
            >
              <span className="font-medium text-gray-700">{t}</span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => DeleteElement(i)}
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>

                <button
                  onClick={() => moveUp(i)}
                  className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  👆
                </button>

                <button
                  onClick={() => moveDown(i)}
                  className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  👇
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Todolist;
