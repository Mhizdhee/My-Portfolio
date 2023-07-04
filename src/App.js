import "./App.css";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";
// import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      {/* <About /> */}
    </div>
  );
}

export default App;
