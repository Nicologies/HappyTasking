import * as React from 'react';
import { WithStyles, Drawer, IconButton, Divider, Grid, AppBar, Button, Toolbar } from '@material-ui/core';
import withRoot from './WithRoot';
import withStyles, { StyleRulesCallback } from '@material-ui/core/styles/withStyles';
import { RouteComponentProps, withRouter } from 'react-router';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import { IState } from '../reducers';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as drawerActions from '../actions/drawerStateAction';
import { Link } from 'react-router-dom';

interface IAppProps extends RouteComponentProps<any> {
  drawerState: boolean;
  toggleDrawerDispatcher: () => void;
}

class App extends React.Component<WithStyles & IAppProps> {
  render() {
    const { classes, toggleDrawerDispatcher, drawerState } = this.props;
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
            <Link to="/new">
              <Button
                variant="fab" color="primary" aria-label="add">
                <AddIcon />
              </Button>
            </Link>
            <Button onClick={() => this.props.history.push("/")}>
              Home
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
        <div className={classes.mainContainer}>
          {this.props.children}
        </div>
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
  mainContainer: {
    'margin-top': '10px',
  },
});

function mapStateToProps(state: IState): Partial<IAppProps> {
  return {
    drawerState: state.drawerState,
  };
}

function mapDispatchToProps(dispatch: Dispatch<IState>): Partial<IAppProps> {
  return bindActionCreators({ ...drawerActions }, dispatch);
}

export default withRouter(withRoot(withStyles(styles)<{}>((connect(mapStateToProps, mapDispatchToProps)(App)))));
