import './App.css';
import Navbar from './Navbar';
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <About />
      </div>
    </Router>
  );
}

export default App;
