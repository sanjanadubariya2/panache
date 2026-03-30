import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Shoots from './components/Shoots';
import Team from './components/Team';
import Events from './components/Events';
import './styles/App.css';

function App() {

  return (
    <Router>    
        <div>
          <div className="App">
            <Navbar/>
            <Routes>
              <Route path="/" element={
                <div className="home-page">
                  <Home />
                  <About />
                  <Shoots />
                </div>
              } />
              <Route path="/team" element={<Team />} />
              <Route path="/events" element={<Events />} />
            </Routes>
            <Footer />
          </div>
        </div>
    </Router>
  );
}

export default App;