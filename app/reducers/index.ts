import { combineReducers, Reducer } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import drawerState from '../reducers/drawerState';

const rootReducer = combineReducers({
  drawerState,
  routing: routing as Reducer<any>,
});

export interface IState {
  drawerState: boolean;
}

export default rootReducer;
