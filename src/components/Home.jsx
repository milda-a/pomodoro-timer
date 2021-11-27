import React, { useState } from 'react';

import SessionSettings from './SessionSettings';
import TimerNameField from './TimerNameField';
import TimerStartButton from './TimerStartButton';
import { Link } from 'react-router-dom';

export default function Home(props) {
  return (
    <div className="main">
      <form>
        <TimerNameField />
        <SessionSettings />
        <Link to="timer">
          <TimerStartButton />
        </Link>
      </form>
    </div>
  );
}
