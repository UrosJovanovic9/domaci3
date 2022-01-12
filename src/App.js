import "./App.css";
import Filmovi from "./components/Filmovi";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Filmovi></Filmovi>
      <Filmovi></Filmovi>
      <Filmovi></Filmovi>
      <Filmovi></Filmovi>
    </div>
  );
}

export default App;
