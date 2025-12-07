import {  UserContext } from "./UserContext";
import CompoD from "./CompoD";
function CompoC() {
  return (
    <div className="container">
      <h1>COmpo D</h1>
      <h3>hey u {UserContext}</h3>
      <CompoD />
    </div>
  );
}

export default CompoC;
