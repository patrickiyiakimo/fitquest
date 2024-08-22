import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Designed from "./pages/Designed";
import PersonalTraining from "./pages/PersonalTraining";
import Footer from "./components/Footer";
import Faq from "./pages/Faq";

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
      <div>
        <Faq />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
