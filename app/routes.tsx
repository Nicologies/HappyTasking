import * as React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from './containers/HomePage';
import NewPipelinePage from './containers/NewPipelinePage';
import App from './containers/App';
import { PipelinesPage } from './containers/PipelinesPage';

export default (): any => (
  <App>
    <Switch>
      <Route path="/new" component={NewPipelinePage} />
      <Route path="/pipelines" component={PipelinesPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
