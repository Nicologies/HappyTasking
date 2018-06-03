import { actionCreatorVoid } from './helpers';
import { IState } from '../reducers';
import { Dispatch } from 'redux';

export const showCreateNewPipelinePageAction = actionCreatorVoid('SHOW_CREATE_NEW_PIPELINE_PAGE');

export function showCreateNewPipelinePageDispatcher() {
  return (dispatch: Dispatch<IState>, getState: () => IState) => {
    dispatch(showCreateNewPipelinePageAction());
  };
}
