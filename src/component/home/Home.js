import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  AppState,
  Platform,
  TouchableHighlight,
  FlatList
} from "react-native";
import TouchID from "react-native-touch-id";
import Notification from "../notification/Notification";
import PushNotification from "react-native-push-notification";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

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

  GetGridViewItem(item) {
    switch (item) {
      case "send notification":
        this.sendNotification();
        break;
      case "gallery":
        this.props.navigation.navigate("gallery");
        break;
      case "async storage":
        this.props.navigation.navigate("asyncStorage");
        break;
      default:
        break;
    }
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
        <FlatList
          data={GridListItems}
          renderItem={({ item }) => (
            <TouchableHighlight
              style={styles.GridViewContainer}
              onPress={this.GetGridViewItem.bind(this, item.key)}
            >
              <Text style={styles.GridViewTextLayout}>{item.key}</Text>
            </TouchableHighlight>
          )}
          numColumns={2}
        />
        <Notification />
      </View>
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
    borderRadius: 3,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#0391D7"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  GridViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    margin: 5,
    backgroundColor: "#0391D7"
  },
  GridViewTextLayout: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    color: "#fff",
    padding: 10
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

const GridListItems = [
  { key: "send notification" },
  { key: "gallery" },
  { key: "async storage" }
];
