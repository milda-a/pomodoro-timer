import React, { useState } from 'react';

export default function TimerStartButton(props) {
  const [isMouseOver, setMouseOver] = useState(false);

  let style = { backgroundColor: '#AAA63E' };

  function handleMouseOver() {
    setMouseOver((prevValue) => !prevValue);
  }

  return (
    <div>
      <button
        className="input-style"
        type="button"
        style={
          isMouseOver
            ? {
                ...style,
                animationName: 'wobble',
                animationDuration: '100ms',
              }
            : style
        }
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOver}
      >
        Start timer
      </button>
    </div>
  );
}
