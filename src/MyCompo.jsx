import { useEffect, useState } from "react";

function MyCompo() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  function add() {
    setCount((c) => c + 1);
  }
  function Subtract() {
    setCount((c) => c - 1);
  }
  function ChangeColor() {
    setColor(color === "green" ? "red" : "green");
  }

  useEffect(() => {
    document.title = `count is ${count} `;
  }, [color]);

  return (
    <div>
      <p style={{ color: color }}>{count}</p>
      <button onClick={add}>Add</button>
      <button onClick={Subtract}>Subtract</button>
      <button onClick={ChangeColor}>ChangeColor</button>
    </div>
  );
}

export default MyCompo;
