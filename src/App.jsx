/*
*what is props in react?
Props (short for "properties") in React are a way to pass data from a parent component
to a child component. They are read-only and allow components to be dynamic and reusable
 by providing them with different data. Props are passed to
components in a similar way to how attributes are added to HTML elements.

* what is prop types in react?
PropTypes is a library in React that allows developers to specify the types of props
that a component should receive. This helps catch bugs by ensuring that the correct
data types are passed to components, and provides better documentation for the expected
props. PropTypes can validate primitive types like strings and numbers, as well as
more complex types like arrays and objects.

*Default props in react?
Default props in React are a way to define default values for props that a component
might receive. If a parent component does not provide a value for a specific prop,
the component will use the default value instead. This is useful for ensuring that
components have sensible defaults and can function correctly even if certain props
are not provided.

*/
import Student from "./Student.jsx";
function App() {
  return (
    <>
      <Student name="Alice" age={20} grade="A" isStudent={true} />
      <Student name="Bob" age={22} grade="B" isStudent={false} />
      <Student name="Charlie" age={19} grade="A+" isStudent={true} />
      <Student />
    </>
  );
}

export default App;
