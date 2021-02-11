import React from 'react';

import 'main/App.css';
import LinearLayout, { MATCH_HEIGHT, MATCH_WIDTH } from 'layouts/linear/Linear';

function App() {
  const bodyContent = 'Remember sky is not the limit';
  const projectContent = 'Start the project';
  return (
    <LinearLayout
      gravity="center"
      height={MATCH_HEIGHT}
      width={MATCH_WIDTH}
      style={{ background: 'black' }}
      vertical
    >
      <LinearLayout
        gravity="center"
        height={MATCH_HEIGHT}
        width={MATCH_WIDTH}
        style={{ background: 'black' }}
        className="container"
        vertical
      >
        <p style={{ color: 'white', fontSize: '60px' }}>K</p>
        <p style={{ color: 'white', fontSize: '12px' }}>{ projectContent }</p>
        <p style={{ color: 'white', fontSize: '12px' }}>{ bodyContent }</p>
      </LinearLayout>

    </LinearLayout>
  );
}

export default App;
