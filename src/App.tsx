import "./App.css";
import Greeting from "./components/Greeting";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const PersonName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <Greeting name="kahhorjonov" messageCount={20} isLoggedIn={true} />
      <Person name={PersonName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Di Caprio</Heading>
      </Oscar>
      <Greeting name="kahhorjonov" isLoggedIn={true} />
    </div>
  );
}

export default App;
