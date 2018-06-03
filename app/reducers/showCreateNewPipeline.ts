import { IAction } from "../actions/helpers";
import { showCreateNewPipelinePageAction } from "../actions/showCreateNewPipelinePage";

export default function showCreateNewPipelinePage(state: boolean = false, action: IAction): boolean {
  if (showCreateNewPipelinePageAction.test(action)) {
    return !state;
  }
  return state;
}
