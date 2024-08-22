import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Designed from "./pages/Designed";
import PersonalTraining from "./pages/PersonalTraining";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Designed />
      </div>
      <div>
        <PersonalTraining />
      </div>
    </div>
  );
}

export default App;
