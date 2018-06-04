import { actionCreator } from './helpers';
import { IState } from '../reducers';
import { Dispatch } from 'redux';
import { IPipeline } from '../models/pipeline';

export const NewPipelineAction = actionCreator<IPipeline>('CREATE_PIPELINE');

export function newPipelineActionDispatcher(pipeline: IPipeline) {
  return (dispatch: Dispatch<IState>, getState: () => IState) => {
    dispatch(NewPipelineAction(pipeline));
  };
}
