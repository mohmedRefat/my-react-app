import { useState } from "react";
import CompoB from "./CompoB";
import { UserContext } from "./UserContext";
function CompoA() {
  const [user, seTUser] = useState("Mohmed");
  return (
    <div className="container">
      <h1>COmpo A</h1>
      <h2>hello {user}</h2>

      <UserContext.Provider value={user}>
        <CompoB userName={user} />
      </UserContext.Provider>
    </div>
  );
}

export default CompoA;
