import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Picker
} from "react-native";

export default class FlexBox extends Component {
  state = {
    data: "",
    choosenLabel: "",
    choosenIndex: ""
  };

  createStyle = () => {
    switch (this.state.data) {
      case "TopLeft":
        return {
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#FFFFFF"
        };
      case "MiddleLeft":
        return {
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          justifyContent: "center"
        };
      case "BottomLeft":
        return {
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          justifyContent: "flex-end"
        };
      case "TopCenter":
        return {
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          justifyContent: "flex-start",
          alignItems: "center"
        };
      case "MiddleCenter":
        return {
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
          alignItems: "center"
        };
      case "BottomCenter":
        return {
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          justifyContent: "flex-end",
          alignItems: "center"
        };
      case "TopRight":
        return {
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          alignItems: "flex-end"
        };
      case "MiddleRight":
        return {
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
          alignItems: "flex-end"
        };
      case "BottomRight":
        return {
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          justifyContent: "flex-end",
          alignItems: "flex-end"
        };
      default:
        return {};
    }
  };

  renderFlex = () => {
    return (this.state.data !== "" && (
      <View style={this.createStyle()}>
        <View style={{ width: 50, height: 50, backgroundColor: "#FF0000" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "#00FF00" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "#0000FF" }} />
      </View>
    ): null);
  };

  render() {
    return (
      <React.Fragment>
        <Picker
          itemStyle={{ height: 100 }}
          selectedValue={this.state.data}
          onValueChange={itemValue =>
            this.setState({
              data: itemValue
            })
          }
        >
          <Picker.Item label="-" value="" />
          <Picker.Item label="TopLeft" value="TopLeft" />
          <Picker.Item label="MiddleLeft" value="MiddleLeft" />
          <Picker.Item label="BottomLeft" value="BottomLeft" />
          <Picker.Item label="TopCenter" value="TopCenter" />
          <Picker.Item label="MiddleCenter" value="MiddleCenter" />
          <Picker.Item label="BottomCenter" value="BottomCenter" />
          <Picker.Item label="TopRight" value="TopRight" />
          <Picker.Item label="MiddleRight" value="MiddleRight" />
          <Picker.Item label="BottomRight" value="BottomRight" />
        </Picker>

        {this.renderFlex()}
      </React.Fragment>
    );
  }
}
