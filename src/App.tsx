// import Navbar from "./components/Navbar";
// import Hero from "./pages/Hero";
// import Designed from "./pages/Designed";
// import PersonalTraining from "./pages/PersonalTraining";
// import Footer from "./components/Footer";
// import Faq from "./pages/Faq";
// import SignUp from "./components/SignUp";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Switch>
//           <Route exact path="/">
//             <Hero />
//             <Designed />
//             <PersonalTraining />
//             <Faq />
//           </Route>
//           <Route path="/signup">
//             <SignUp />
//           </Route>
//         </Switch>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;






// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./pages/Hero";
// import Designed from "./pages/Designed";
// import PersonalTraining from "./pages/PersonalTraining";
// import Footer from "./components/Footer";
// import Faq from "./pages/Faq";
// import SignUp from "./components/SignUp";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/designed" element={<Designed />} />
//           <Route path="/personal-training" element={<PersonalTraining />} />
//           <Route path="/faq" element={<Faq />} />
//           <Route path="/signup" element={<SignUp />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;






// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./pages/Hero";
// import Designed from "./pages/Designed";
// import PersonalTraining from "./pages/PersonalTraining";
// import Footer from "./components/Footer";
// import Faq from "./pages/Faq";
// import SignUp from "./components/SignUp";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/designed" element={<Designed />} />
//         <Route path="/personal-training" element={<PersonalTraining />} />
//         <Route path="/faq" element={<Faq />} />
//         <Route path="/signup" element={<SignUp />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;





import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Designed from "./pages/Designed";
import PersonalTraining from "./pages/PersonalTraining";
import Footer from "./components/Footer";
import Faq from "./pages/Faq";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/designed" element={<Designed />} />
        <Route path="/personal-training" element={<PersonalTraining />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
