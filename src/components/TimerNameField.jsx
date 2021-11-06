import React, { useState } from 'react';

export default function TimerNameField(props) {
  const [timerName, setTimerName] = useState('My Timer');

  function handleChange(e) {
    setTimerName(() => e.target.value);
  }

  return (
    <div>
      <input
        className="input-style"
        type="text"
        value={timerName}
        onChange={handleChange}
        style={{ backgroundColor: '#E45826' }}
      />
    </div>
  );
}
