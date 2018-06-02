import * as React from 'react';
import { WithStyles, Drawer, IconButton, Divider } from '@material-ui/core';
import withRoot from './WithRoot';
import withStyles, { StyleRulesCallback } from '@material-ui/core/styles/withStyles';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Routes from '../routes';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';

class IAppState {
  drawerOpen: boolean = false;
}

const history = createBrowserHistory();

class App extends React.Component<WithStyles, IAppState> {
  state: IAppState = {
    drawerOpen: false,
  };
  toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }
  render() {
    const classes = this.props.classes;
    return (
      <div>
        <IconButton
          aria-label="open drawer"
          onClick={() => this.toggleDrawer()}
        >
          <MenuIcon color='action' />
        </IconButton>
        <Drawer
          variant="persistent"
          anchor='left'
          open={this.state.drawerOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => this.toggleDrawer()}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
        </Drawer>
        <Router history={history}>
          {Routes()}
        </Router>
      </div>
    );
  }
}

const styles: StyleRulesCallback = theme => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    "min-width": '200px',
  },
});

export default withRoot(withStyles(styles)<{}>((App)));
