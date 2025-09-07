import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import About from "./About";
import Subscribe from "./Subscribe";
function App() {
  return (
    <>
      <Header />

      {/* Main content changes here */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="About" element={<About />} />
        <Route path="Subscribe" element={<Subscribe />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
