import { List } from "./components/generics/List";
import "./App.css";

function App() {
  return (
    <div className="App">
      <List
        items={[
          {
            id: 1,
            first: "Bruce",
            last: "Lee",
          },
          {
            id: 2,
            first: "Tony",
            last: "Starks",
          },
          {
            id: 3,
            first: "Princess",
            last: "Diana",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
