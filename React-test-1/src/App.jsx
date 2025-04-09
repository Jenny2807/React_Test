
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./page/Home.jsx"
import About from "./page/About.jsx"
import Motive from "./page/Motive.jsx"
import Header from "./components/Header.jsx"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/motive" element={<Motive />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
