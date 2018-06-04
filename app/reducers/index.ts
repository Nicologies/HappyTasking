import { combineReducers, Reducer } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import drawerState from '../reducers/drawerState';
import pipelines from '../reducers/pipelines';
import { IPipeline } from '../models/pipeline';

const rootReducer = combineReducers({
  drawerState,
  pipelines,
  routing: routing as Reducer<any>,
});

export interface IState {
  drawerState: boolean;
  pipelines: IPipeline[];
}

export default rootReducer;
