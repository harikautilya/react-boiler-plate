import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import 'main/App.css';

import { Neomorphic } from 'components/neomorphic/neomorphic';
import { Section } from 'layouts/section/section';
import { Row } from 'layouts/row/row';
import { Column } from 'layouts/column/column';
import { Home } from 'pages/home/home';

function App() {
  return (
    <Router>
      <div className="main_body">
        <div className="page">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
