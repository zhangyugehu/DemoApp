import Stacks from "./Stacks";
import { setTopLevelNavigator, navigateTo } from "./NavigatorService";
const NavigatorService={
  setRootNavigator: setTopLevelNavigator,
  navigate: navigateTo
}
export { Stacks, NavigatorService };
