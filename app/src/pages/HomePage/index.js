import React from "react";
import TabBar from "antd-mobile-rn/lib/tab-bar/tabbar.android";
import TabOneView from "./TabOneView";
import TabTwoView from "./TabTwoView";
import TabThreeView from "./TabThreeView";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIdx: 0
    };
  }
  changeTab(idx) {
    this.setState({ tabIdx: idx });
  }
  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#ccc"
      >
        <TabBar.Item
          key="item_1"
          title="yige"
          selected={this.state.tabIdx === 0}
          onPress={this.changeTab.bind(this, 0)}
          badge={10}
        >
          <TabOneView />
        </TabBar.Item>
        <TabBar.Item
          key="item_2"
          title="liangge"
          selected={this.state.tabIdx === 1}
          onPress={this.changeTab.bind(this, 1)}
        >
          <TabTwoView />
        </TabBar.Item>
        <TabBar.Item
          key="item_3"
          title="sange"
          selected={this.state.tabIdx === 2}
          onPress={this.changeTab.bind(this, 2)}
        >
          <TabThreeView />
        </TabBar.Item>
      </TabBar>
    );
  }
}
