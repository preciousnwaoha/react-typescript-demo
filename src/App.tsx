import "./App.css";
import { Heading } from "./components/Heading";
import { Status } from "./components/Status";
import { Oscar } from "./components/Oscar"
import { Greet } from "./components/Greet";

function App() {

  return (
    <div className="App">
      <Status status="loading" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpariol</Heading>
        <div className=""></div>
      </Oscar>
      <Greet name="Precious" isLoggedIn={false} />
    </div>
  );
}

export default App;
