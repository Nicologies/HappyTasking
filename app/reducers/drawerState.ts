import { IAction } from "../actions/helpers";
import { toggleDrawerAction } from "../actions/drawerStateAction";

export default function drawerStateReducer(state: boolean = false, action: IAction): boolean {
  if (toggleDrawerAction.test(action)) {
    return !state;
  } else {
    return state;
  }
}
