import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Timer from './Timer';
import { Routes, Route } from 'react-router-dom';

function App() {
  function collectData() {}

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home onSubmit={collectData} />} />
        <Route path="timer" element={<Timer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
