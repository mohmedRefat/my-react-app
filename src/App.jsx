import List from "./List";
function App() {
  const fruits = [
    { id: 1, name: "apple", caleroies: 45 },
    { id: 2, name: "banana", caleroies: 155 },
    { id: 3, name: "coconut", caleroies: 33 },
    { id: 4, name: "strawberies", caleroies: 121 },
    { id: 5, name: "pinable", caleroies: 56 },
    { id: 6, name: "mongo", caleroies: 98 },
  ];

  fruits.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ul>
      {fruits.map((fruit) => (
        <List NameF={fruit.name} Cal={fruit.caleroies} key={fruit.id} />
      ))}
    </ul>
  );
}

export default App;
