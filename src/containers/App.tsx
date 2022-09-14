import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import MovieDetail from './MovieDetail';
import Home from './Home';
import Login from './Login';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
