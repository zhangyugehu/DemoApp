import React from "react";
import { TabBar } from "antd-mobile-rn";
import Icon from "react-native-vector-icons/Feather";
import TabOneView from "./TabOneView";
import TabTwoView from "./TabTwoView";
import TabThreeView from "./TabThreeView";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this._initIcons();
    this.state = {
      tabIdx: 0
    };
  }

  componentDidMount(){

  }
  changeTab(idx) {
    this.setState({ tabIdx: idx });
  }

  _initIcons() {
    const size = 15;
    const icons=[
      Icon.getImageSource("home", size, "gray"),
      Icon.getImageSource("home", size, "blue"),
      Icon.getImageSource("archive", size, "gray"),
      Icon.getImageSource("archive", size, "blue"),
      Icon.getImageSource("user", size, "gray"),
      Icon.getImageSource("user", size, "blue"),
    ]
    Promise.all(icons)
    .then(([icHome, icHomeStd, icFavorite, icFavoriteStd, icUser, icUserStd])=>{
      this.setState({
        icHome,
        icHomeStd,
        icFavorite,
        icFavoriteStd,
        icUser,
        icUserStd
      })
    })
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
          icon={this.state.icHome}
          selectedIcon={this.state.icHomeStd}
          selected={this.state.tabIdx === 0}
          onPress={this.changeTab.bind(this, 0)}
        >
          <TabOneView />
        </TabBar.Item>
        <TabBar.Item
          key="item_2"
          icon={this.state.icFavorite}
          selectedIcon={this.state.icFavoriteStd}
          selected={this.state.tabIdx === 1}
          onPress={this.changeTab.bind(this, 1)}
        >
          <TabTwoView />
        </TabBar.Item>
        <TabBar.Item
          key="item_3"
          icon={this.state.icUser}
          selectedIcon={this.state.icUserStd}
          selected={this.state.tabIdx === 2}
          onPress={this.changeTab.bind(this, 2)}
        >
          <TabThreeView />
        </TabBar.Item>
      </TabBar>
    );
  }
}

export default HomePage;
