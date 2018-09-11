import React from "react";
import { AppRegistry, Dimensions } from "react-native";
import CodePush, {
  SyncOptions,
  SyncStatusChangedCallback,
  DowloadProgressCallback,
  HandleBinaryVersionMismatchCallback,
  DownloadProgress,
  RemotePackage,
  CodePushOptions
} from "react-native-code-push";
import App from "./App";
require("./app/src/config");

class Root extends React.Component {
  componentWillMount() {
    Dimensions.addEventListener("change", ({ window, screen }) => {
      global.width = window.width;
      global.height = window.height;
      global.ratio_width = DESIGN_WIDTH / global.width;
      global.ratio_height = DESIGN_HEIGHT / global.height;
      global.font_scale = screen.fontScale;
      this.forceUpdate();
    });
    CodePush.disallowRestart();
    this._syncImmediate();
  }
  componentWillUnmount() {
    Dimensions.removeEventListener("change");
  }
  componentDidMount() {
    CodePush.allowRestart();
  }
  render() {
    return <App />;
  }

  _syncImmediate() {
    const options: SyncOptions = {
      installMode: CodePush.InstallMode.IMMEDIATE,
      updateDialog: {
        appendReleaseDescription: true,
        descriptionPrefix: "更新内容",
        mandatoryContinueButtonLabel: "立即更新",
        mandatoryUpdateMessage: "必须更新后才能使用",
        optionalIgnoreButtonLabel: "稍后",
        optionalInstallButtonLabel: "后台更新",
        optionalUpdateMessage: "有新版本，是否更新？",
        title: "更新提示"
      }
    };
    const syncStatusChangedCallback: SyncStatusChangedCallback = (
      status: CodePush.SyncStatus
    ) => {
      console.log(status);
    };
    const downloadProgressCallback: DowloadProgressCallback = (
      progress: DownloadProgress
    ) => {
      console.log(progress);
    };
    const handleBinaryVersionMismatchCallback: HandleBinaryVersionMismatchCallback = (
      update: RemotePackage
    ) => {
      console.log(update);
    };
    CodePush.sync(
      options,
      syncStatusChangedCallback,
      downloadProgressCallback,
      handleBinaryVersionMismatchCallback
    );
  }
}
const codePushOptions: CodePushOptions = {
  //设置检查更新的频率
  //ON_APP_RESUME APP恢复到前台的时候
  //ON_APP_START APP开启的时候
  //MANUAL 手动检查
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME
};

AppRegistry.registerComponent("DemoApp", () => CodePush(codePushOptions)(Root));
