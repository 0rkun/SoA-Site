import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import History from "./components/History";
import Members from "./components/Members";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
