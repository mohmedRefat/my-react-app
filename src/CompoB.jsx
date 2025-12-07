import { UserContext } from "./UserContext";
import CompoC from "./CompoC";

function CompoB() {
  return (
    <div className="container">
      <h1>COmpo B</h1>
      <h2>hey {UserContext}</h2>
    <CompoC/>
    </div>
  );
}

export default CompoB;
