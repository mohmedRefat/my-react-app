/*
use state = is react Hook which re render compo after state change 
use Ref = "use Reference" Does not cuz  re-renderes after value changes 
it used when u want compo remember info  
but u dont want the info to trigger changes 

    1.Access and interact with DOM Elements 
    2.Handlign focus , Animation,and Transtions
    3.Managin Timers and interval



*/
import Mycompo from "./Mycompo";

function App() {
  return (
    <>
    
    <Mycompo/>
    </>
  );
}

export default App;
