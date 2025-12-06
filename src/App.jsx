/*
*use effect like use sideway code (function,[dependecies])

1. useEffect(()=>{}) Runs after every re-render
2. useEffect(()=>{},[]) Runs only  on mount 
3. useEffect(()=>{},[value]) Runs on mount + when value change 


*/

import MyCompo from "./MyCompo";
function App() {
  return (
    <>
      <MyCompo />
    </>
  );
}

export default App;
