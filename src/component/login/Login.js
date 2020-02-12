import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from "react-native";

import SplashScreen from "react-native-splash-screen";
import Notification from "../../Utils/Notification";
import * as Keychain from "react-native-keychain";
export default class Login extends Component {
  async componentDidMount() {
    SplashScreen.hide();

    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        console.log("credentials", credentials);
        console.log(">1 lanuch");
      } else {
        console.log("first lanuch");
        await Keychain.setGenericPassword("firstLanuch", "true").catch(err => {
          console.log("error save password");
        });
      }
    } catch (err) {
      console.log("can't get credentials");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigation.navigate("home")}
        >
          <Text style={styles.text}>Login</Text>
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
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    color: "#fff",
    padding: 10
  }
});
