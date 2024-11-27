import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}
export default App;
