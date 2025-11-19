/*
* what is condition rendering in react?
 Condition rendering in React is a technique used 
to render different components or elements based 
on certain conditions or states. It allows developers
 to create dynamic user interfaces that can change based 
 on user interactions, data changes, or other factors.

*/
import UserGreeting from "./UserGreeting";
function App() {
  return (
    <>
      <UserGreeting  isLoggedIn={true} />
    </>
  );
}

export default App;
