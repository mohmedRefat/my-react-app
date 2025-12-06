import { useEffect, useState } from "react";

function MyCompo() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  function HandleWindow() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  
    useEffect(() => {
      addEventListener("resize", HandleWindow);
      console.log(`Add event listener`)
    });
  
  return (
    <div>
      <p> width{width}px</p>
      <p> height {height}px</p>
    </div>
  );
}

export default MyCompo;
