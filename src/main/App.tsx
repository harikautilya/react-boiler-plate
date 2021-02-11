import React from 'react';

import 'main/App.css';
import LinearLayout, { MATCH_HEIGHT, MATCH_WIDTH } from 'layouts/linear/Linear';

function App() {
  const bodyContent = "App all set and working. Start the projects. It's all yours. Remember sky is not the limit";
  return (
    <LinearLayout
      gravity="center"
      height={MATCH_HEIGHT}
      width={MATCH_WIDTH}
      style={{ background: 'black' }}
      vertical
    >
      <p style={{ color: 'white' }}>{ bodyContent }</p>
    </LinearLayout>
  );
}

export default App;
