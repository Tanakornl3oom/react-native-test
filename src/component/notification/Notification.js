import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  AppState,
  Platform,
  TextInput,
  TouchableHighlight,
  FlatList
} from "react-native";
import PushNotification from "react-native-push-notification";
import DisMissKeyBoard from "../dismissKeyBoard/DismissKeyBoard";

export default class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sec: ""
    };
  }

  handleValue = text => {
    const numericRegex = /^([0-9]{1,100})+$/;
    if (numericRegex.test(text) || text === "") {
      this.setState({ sec: text });
    }
  };

  handleSchedule = () => {
    const { sec } = this.state;
    if (sec) {
      // noti
      let date = new Date(Date.now() + parseInt(sec) * 1000);

      PushNotification.localNotificationSchedule({
        message: "My Notification Message Schedule",
        date
      });

      this.setState({ sec: "" });
    } else {
      Alert.alert("please fill seconds");
    }
  };

  handleNotification = () => {
    PushNotification.localNotification({
      message: "My Notification Message"
    });
  };

  render() {
    const { sec } = this.state;
    return (
      <DisMissKeyBoard>
        <View style={styles.container}>
          <View style={{ margin: 10, paddingBottom: 10 }}>
            <TouchableHighlight
              style={styles.button}
              onPress={this.handleNotification}
            >
              <Text>click to send notification</Text>
            </TouchableHighlight>
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-start"
            }}
          >
            <View
              style={{
                width: "40%",
                flexWrap: "wrap",
                flexDirection: "row",
                paddingTop: 15
              }}
            >
              <Text
                style={{
                  paddingTop: 5,
                  paddingRight: 10,
                  paddingLeft: 5
                }}
              >
                seconds :
              </Text>
              <TextInput
                style={{
                  height: 30,
                  width: "50%",
                  borderColor: "gray",
                  borderWidth: 1,
                  color: "black"
                }}
                maxLength={2}
                keyboardType={"numeric"}
                value={sec}
                onChangeText={text => this.handleValue(text)}
              ></TextInput>
            </View>
            <View style={{ width: "60%" }}>
              <TouchableHighlight
                style={styles.button}
                onPress={this.handleSchedule}
              >
                <Text>click to send notification schedule</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </DisMissKeyBoard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    margin: 5,
    backgroundColor: "#0391D7"
  }
});
