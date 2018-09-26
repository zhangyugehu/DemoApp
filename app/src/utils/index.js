import { Dimensions } from "react-native";
import { DESIGN_WIDTH, DESIGN_HEIGHT } from "../config";
const { width, height } = Dimensions.get("window");
const { fontScale } = Dimensions.get("screen");

const UIUtils= {
  width, height, fontScale,
  ratio_width: (DESIGN_WIDTH / width),
  ratio_height: (DESIGN_HEIGHT / height),
}

export {
  UIUtils
}