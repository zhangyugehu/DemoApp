
import { Dimensions } from "react-native";
import EmitterManager from "./manager/EmitterManager";
import Logger from "./log/Logger";

export const DESIGN_HEIGHT = 667;
export const DESIGN_WIDTH = 375;

global.LOG_ON = true;

global.width = Dimensions.get("window").width;
global.height = Dimensions.get("window").height;
global.ratio_width = DESIGN_WIDTH / Dimensions.get("window").width
global.ratio_height = DESIGN_HEIGHT / Dimensions.get("window").height;
global.font_scale = Dimensions.get("screen").fontScale;

emitterManager = EmitterManager.getInstance();
logger = Logger.getInstance();

if (!__DEV__) {
  const VoidFunc = () => {};
  global.console = {
    info: VoidFunc,
    log: VoidFunc,
    warn: VoidFunc,
    error: VoidFunc
  };
  global.LOG_ON = false;
}
