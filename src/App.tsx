import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
