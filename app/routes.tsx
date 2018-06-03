import * as React from 'react';
import { Route } from 'react-router';
import HomePage from './containers/HomePage';

export default function Routes() {
  return (
    <div>
      <Route path="/" component={HomePage} />
    </div>
  );
}
