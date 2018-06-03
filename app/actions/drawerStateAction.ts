import { actionCreatorVoid } from './helpers';
import { IState } from '../reducers';
import { Dispatch } from 'redux';

export const toggleDrawerAction = actionCreatorVoid('TOGGLE_DRAWER');

export function toggleDrawerDispatcher() {
  return (dispatch: Dispatch<IState>, getState: () => IState) => {
    dispatch(toggleDrawerAction());
  };
}
