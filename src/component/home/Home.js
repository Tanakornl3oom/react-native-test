import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  AppState,
  Platform,
  TouchableHighlight
} from "react-native";
import TouchID from "react-native-touch-id";
import Notification from "../notification/Notification";
import PushNotification from "react-native-push-notification";
export default class Home extends React.Component {
  componentDidMount() {
    TouchID.authenticate(
      "Unlock with your fingerprint",
      optionalConfigObject
    ).catch(error => {
      console.log(error);
      Alert.alert("Authentication Failed", "", [
        {
          text: "OK",
          onPress: () => this.props.navigation.navigate("login")
        }
      ]);
    });
  }

  sendNotification() {
    let date = new Date(Date.now() + 5 * 1000);

    PushNotification.localNotificationSchedule({
      message: "My Notification Message",
      date
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Add friends here!</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.sendNotification()}
        >
          <Text>send Notification</Text>
        </TouchableHighlight>
        <Notification />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    borderRadius: 3,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#0391D7"
  }
});

const optionalConfigObject = {
  title: "Authentication Required", // Android
  imageColor: "#e00606", // Android
  imageErrorColor: "#ff0000", // Android
  sensorDescription: "Touch sensor", // Android
  sensorErrorDescription: "Failed", // Android
  cancelText: "Cancel", // Android
  fallbackLabel: "", // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};
