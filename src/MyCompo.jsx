import React, { useState } from "react";

function MyCompo() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("mohmed");
  };

  const updateAge = () => {
    setAge(age + 1);
  };

  const updateStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <>
      <p>{name}</p>
      <button onClick={updateName}>Update Name</button>

      <p>{age}</p>
      <button onClick={updateAge}>Update Age</button>
      <p>{isEmployed ? "Yes" : "No"}</p>
      <button onClick={updateStatus}>Update status</button>
    </>
  );
}

export default MyCompo;
