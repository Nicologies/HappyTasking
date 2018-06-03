import * as React from 'react';
import { WithStyles, Drawer, IconButton, Divider, Grid, AppBar, Button, Toolbar } from '@material-ui/core';
import withRoot from './WithRoot';
import withStyles, { StyleRulesCallback } from '@material-ui/core/styles/withStyles';
import { Router, RouteComponentProps } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Routes from '../routes';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import { IState } from '../reducers';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as drawerActions from '../actions/drawerStateAction';
import * as showCreateNewPipelinePageActions from '../actions/showCreateNewPipelinePage';

interface IAppProps extends RouteComponentProps<any> {
  drawerState: boolean;
  toggleDrawerDispatcher: () => void;
  showCreateNewPipelinePageDispatcher: () => void;
}

const history = createBrowserHistory();

class App extends React.Component<WithStyles & IAppProps> {
  render() {
    const { classes, toggleDrawerDispatcher, drawerState, showCreateNewPipelinePageDispatcher } = this.props;
    return (
      <Grid>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              onClick={toggleDrawerDispatcher}
            >
              <MenuIcon color='action' />
            </IconButton>
            <Button variant="fab" color="primary" aria-label="add" onClick={showCreateNewPipelinePageDispatcher}>
              <AddIcon />
            </Button>
            <Button>
              Categories
            </Button>
            <Button>
              Pipelines
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          anchor='left'
          open={drawerState}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={toggleDrawerDispatcher}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
        </Drawer>
        <Router history={history}>
          {Routes()}
        </Router>
      </Grid>
    );
  }
}

const styles: StyleRulesCallback = theme => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-begin',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    "min-width": '200px',
  },
});

function mapStateToProps(state: IState): Partial<IAppProps> {
  return {
    drawerState: state.drawerState,
  };
}

function mapDispatchToProps(dispatch: Dispatch<IState>): Partial<IAppProps> {
  return bindActionCreators({ ...drawerActions, ...showCreateNewPipelinePageActions }, dispatch);
}

export default withRoot(withStyles(styles)<{}>((connect(mapStateToProps, mapDispatchToProps)(App))));
