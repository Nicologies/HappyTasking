import * as React from 'react';
import withRoot from '../containers/WithRoot';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Link to="/new">
          <Button
            variant="fab" color="primary" aria-label="add">
            <AddIcon />
          </Button>
        </Link>
      </Grid>
    );
  }
}

export default withRoot(Home);
