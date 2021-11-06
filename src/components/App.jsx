import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SessionSettings from './SessionSettings';
import TimerNameField from './TimerNameField';
import TimerStartButton from './TimerStartButton';

function App() {
  return (
    <div>
      <Header />
      <div>
        <form>
          <TimerNameField />
          <SessionSettings />
          <TimerStartButton />
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default App;
