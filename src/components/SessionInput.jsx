import React, { useState } from 'react';

export default function SessionInput(props) {
  const [input, setInput] = useState(props.defaultInput);

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="flex-container">
      <div>
        <p style={{ textAlign: 'right' }}>{props.preText}</p>
      </div>
      <div>
        <input
          className="input-style smaller"
          value={input}
          type="number"
          onChange={handleChange}
          style={{ backgroundColor: props.bg, justifyContent: 'center' }}
        />
      </div>
      <div>
        <p style={{ textAlign: 'left' }}>{props.postText}</p>
      </div>
    </div>
  );
}
