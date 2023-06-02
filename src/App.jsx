import { Header } from "./header";
import "./App.css";
import "./reset.css";
import "./style.css";
import { CharacterRatings } from "./CharacterRatings";
import { CharacterCards } from "./character-cards";

function App() {
  return (
    <>
      <Header
        title={"Fullmetal Alchemist"}
        navBarFields={["about us", "info", "support us"]}
      />
      <CharacterRatings />
      <CharacterCards />
    </>
  );
}

export default App;
