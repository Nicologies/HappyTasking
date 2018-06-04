import { actionCreatorVoid } from './helpers';
import { IState } from '../reducers';
import { Dispatch } from 'redux';

export const ToggleDrawerAction = actionCreatorVoid('TOGGLE_DRAWER');

export function toggleDrawerDispatcher() {
  return (dispatch: Dispatch<IState>, getState: () => IState) => {
    dispatch(ToggleDrawerAction());
  };
}
