import { IAction } from "../actions/helpers";
import { ToggleDrawerAction } from "../actions/drawerStateAction";

export default function drawerStateReducer(state: boolean = false, action: IAction): boolean {
  if (ToggleDrawerAction.test(action)) {
    return !state;
  } else {
    return state;
  }
}
