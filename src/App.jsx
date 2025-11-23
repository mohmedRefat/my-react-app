/*
* what is React hook?
* React hooks are special functions that let you use state and other React features without writing a class.

*what is useState?
* useState is a React hook that allows you to add state to functional components. It returns an array with two elements: 
the current state value and a function to update that state.

*what is useEffect?
* useEffect is a React hook that lets you perform side effects in functional components. 
It can be used for data fetching, subscriptions, or manually changing the DOM in React components.

*what is useContext?
* useContext is a React hook that allows you to access the context value from a Context object. 
It makes it easier to share values like themes or user information across components without passing props down manually at every level.




*/
import MyCompo from "./MyCompo";
function App() {
  return (
    <>
      <h1>My React App</h1>
      <MyCompo />
    </>
  );
}

export default App;
