import { NavigationActions } from "react-navigation";
import { Logger } from "../components/log-view";

const TAG = "NavigatorService";

let _rootNavigator;

function setTopLevelNavigator(navigatorRef){
  _rootNavigator = navigatorRef;
}

function navigateTo(routeName, params){
  Logger.i(TAG, `navigateTo "${routeName}", with ${JSON.stringify(params)}`)
  _rootNavigator.dispatch(
    NavigationActions.navigate({
      type: NavigationActions.NAVIGATE,
      routeName,
      params
    })
  );
}

export {
  setTopLevelNavigator,
  navigateTo
}