import { IAction } from "../actions/helpers";
import { NewPipelineAction } from '../actions/newPipelineAction';
import { IPipeline } from "../models/pipeline";

export default function newPipelineReducer(state: IPipeline[] = [], action: IAction): IPipeline[] {
  if (NewPipelineAction.test(action)) {
    return [...state, action.payload];
  } else {
    return state;
  }
}
