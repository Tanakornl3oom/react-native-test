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
  FlatList,
  TextInput,
  Keyboard
} from "react-native";

import Storage from "../../Utils/AsyncStorage";
import DisMissKeyBoard from "../dismissKeyBoard/DismissKeyBoard";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "",
      value: ""
    };
  }

  handleKey = text => {
    this.setState({ key: text });
  };
  handleValue = text => {
    this.setState({ value: text });
  };

  pressSave = async () => {
    const { key, value } = this.state;
    if (key && value) {
      Keyboard.dismiss();
      await Storage.setItem(key, value);
      this.setState({ key: "", value: "" });
      Alert.alert("save to local storage");
    } else {
      Alert.alert("please fill key or value");
    }
  };

  goToGetLocalStorage = () => {
    this.props.navigation.navigate("getAsyncStorage");
  };

  render() {
    return (
      <DisMissKeyBoard>
        <View style={styles.container}>
          <Text style={styles.textKey}>Key :</Text>
          <TextInput
            onSubmitEditing={Keyboard.dismiss}
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              color: "black"
            }}
            onChangeText={text => this.handleKey(text)}
            value={this.state.key}
          />

          <Text style={styles.textKey}>Value :</Text>
          <TextInput
            onSubmitEditing={Keyboard.dismiss}
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              color: "black"
            }}
            onChangeText={text => this.handleValue(text)}
            value={this.state.value}
          />

          <TouchableHighlight style={styles.button} onPress={this.pressSave}>
            <Text style={styles.text}>Save To Local Storage</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonbuttom}
            onPress={this.goToGetLocalStorage}
          >
            <Text style={styles.text}>Get Data From Local Storage</Text>
          </TouchableHighlight>
        </View>
      </DisMissKeyBoard>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 3,
    backgroundColor: "#0391D7",
    padding: 5,
    alignItems: "center",
    marginTop: 10
  },
  buttonbuttom: {
    borderRadius: 5,
    backgroundColor: "#0391D7",
    padding: 5,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    color: "#fff",
    padding: 10
  },
  textKey: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    padding: 5
  },
  container: {
    margin: 20,
    flex: 1,
    backgroundColor: "#fff"
  }
});
