import React from 'react';
import SessionInput from './SessionInput';

export default function SessionSettings(props) {
  return (
    <div>
      <SessionInput
        bg="#4A3933"
        defaultInput="25"
        preText="Session"
        postText="minutes"
      />
      <SessionInput
        bg="#3392A7"
        defaultInput="5"
        preText="Short break"
        postText="minutes"
      />
      <SessionInput
        bg="#F0A500"
        defaultInput="30"
        preText="Long break"
        postText="minutes"
      />
      <SessionInput
        bg="#E45826"
        defaultInput="3"
        preText="Poms per session"
        postText="minutes"
      />
    </div>
  );
}
