import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {ActivityIndicator} from "antd-mobile-rn";
import Api from '../../constants/api';

const TAG = "StarredView"
export default class StarredView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        animating:false
    };
  }

  componentDidMount(){

    this.setState({
      animating: true
    })
    fetch(Api.starred)
    .then(response=>response.json())
    .then(response=>{
        this.setState({response, animating: false});
    })
    .catch(reason=>{
        this.setState({
          animating: false
        })
        logger.e(reason, TAG);
    });
  }

  render() {
    const repos = this.state.response;
    return (
      <View>
        <ActivityIndicator
          animating={this.state.animating}
          size="small"
          text="Loading..."
        />
        {
          repos && repos.map((repo, idx)=>{
            return <Text key={`starred_repo_${idx}`}>{`${idx}-${repo.name}`}</Text>
          })
        }
      </View>
    );
  }
}
