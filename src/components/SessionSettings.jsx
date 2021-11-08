import React, { useState } from 'react';
import SessionInput from './SessionInput';

export default function SessionSettings(props) {
  const [collectedData, setCollectedData] = useState({ name: '', value: '' });

  function collectData(data) {
    setCollectedData((prevValue) => {
      return { ...prevValue, ...data };
    });
  }

  return (
    <div>
      <SessionInput
        bg="#4A3933"
        defaultInput="25"
        preText="Session"
        postText="minutes"
        key="sessionTime"
        id="sessionTime"
        onEntry={collectData}
      />
      <SessionInput
        bg="#3392A7"
        defaultInput="5"
        preText="Short break"
        postText="minutes"
        key="shortBreakTime"
        id="shortBreakTime"
        onEntry={collectData}
      />
      <SessionInput
        bg="#F0A500"
        defaultInput="30"
        preText="Long break"
        postText="minutes"
        key="longBreakTime"
        id="longBreakTime"
        onEntry={collectData}
      />
      <SessionInput
        bg="#E45826"
        defaultInput="3"
        preText="Poms per session"
        postText="🍅"
        key="pomCount"
        id="pomCount"
        onEntry={collectData}
      />
    </div>
  );
}
