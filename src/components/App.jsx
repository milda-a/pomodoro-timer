import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Timer from './Timer';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [timers, setTimers] = useState({
    sessionTimer: 25,
    shortBreakTimer: 5,
    longBreakTimer: 30,
    pomNumber: 3,
  });

  function collectData(collectedData) {
    setTimers({
      sessionTimer: collectedData.sessionTimer,
      shortBreakTimer: collectedData.shortBreakTimer,
      longBreakTimer: collectedData.longBreakTimer,
      pomNumber: collectedData.pomNumber,
    });
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home onSubmit={collectData} />} />
        <Route path="timer" element={<Timer timers={timers} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
