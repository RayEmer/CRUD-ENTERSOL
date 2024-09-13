import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Index from './containers/Index';
import Acerca from './containers/Acerca';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/acerca" element={<Acerca />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
