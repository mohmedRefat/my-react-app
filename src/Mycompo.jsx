import { useRef } from "react";

function Mycompo() {
  const inputref = useRef(null);
  const inputref2 = useRef(null);
  const inputref3 = useRef(null);

  function handleclick1() {
    inputref.current.style.background = "yellow";
    inputref2.current.style.background = "";
    inputref3.current.style.background = "";
  }

  function handleclick2() {
    inputref.current.style.background = "";
    inputref2.current.style.background = "yellow";
    inputref3.current.style.background = "";
  }

  function handleclick3() {
    inputref.current.style.background = "";
    inputref2.current.style.background = "";
    inputref3.current.style.background = "yellow";
  }

  return (
    <div>
      {" "}
      <button onClick={handleclick1}>Add</button>
      <input type="text" ref={inputref} />
      <button onClick={handleclick2}>Add</button>
      <input type="text" ref={inputref2} />
      <button onClick={handleclick3}>Add</button>
      <input type="text" ref={inputref3} />
    </div>
  );
}

export default Mycompo;
