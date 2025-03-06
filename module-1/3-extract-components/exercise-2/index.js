import React from 'react';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

function Button({borderColor = 'black', color = 'black', children}) {
  return (
    <button
      style={{
        border: '2px solid',
        color,
        borderColor,
        background: 'white',
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      {children}
    </button>
  );
}

root.render(
  <div>
    <Button color="red" borderColor="red">
      Cancel
    </Button>
    <Button>Confirm</Button>
  </div>,
);
