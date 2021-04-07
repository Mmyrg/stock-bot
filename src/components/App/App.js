import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';

import StockWrapper from '../Stock/StockWrapper';

function App() {
    return (
        <div className="wrapper">
          <BrowserRouter>
            <Switch>
              <Route path="/stock/:ticker/:time/:timeUnit">
                <StockWrapper />
              </Route>
              <Route path="/stock/:ticker">
                <StockWrapper />
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