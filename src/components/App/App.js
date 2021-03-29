import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';

import Stock from '../Stock/Stock';

function App() {
    return (
        <div className="wrapper">
          <BrowserRouter>
            <nav>
              <ul>
                <li><Link to="/stock/SPY/5/day">Stock</Link></li>
              </ul>
            </nav>
            <Switch>
              <Route path="/stock/:ticker/:time/:timeUnit">
                <Stock />
              </Route>
              <Route path="/">
                Root
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
    );
}

export default App;