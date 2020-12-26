import React from 'react';
import logo from 'images/logo.svg';
import 'main/App.css';
import LinearLayout, { MATCH_HEIGHT,MATCH_WIDTH } from 'layouts/linear/Linear'

function App() {
  return (
    <LinearLayout  
        gravity="center"
        height={MATCH_HEIGHT} 
        width={MATCH_WIDTH} 
        vertical>

        

    </LinearLayout>
  );
}

export default App;
