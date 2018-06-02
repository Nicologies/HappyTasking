import * as React from 'react';
import { Route } from 'react-router';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';

export default function Routes() {
  return (
    <div>
      <Route path="/counter" component={CounterPage} />
      <Route path="/" component={HomePage} />
    </div>
  );
}
