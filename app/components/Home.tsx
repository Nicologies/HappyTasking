import * as React from 'react';
import { Link } from 'react-router-dom';
import withRoot from '../containers/WithRoot';
import { Typography } from '@material-ui/core';

const styles = require('./Home.scss');

class Home extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Material-UI
        </Typography>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}

export default withRoot(Home);
