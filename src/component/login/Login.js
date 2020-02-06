import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add Login here!</Text>
        <Button
          title="go to home"
          onPress={() => this.props.navigation.navigate("home")}
        />
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
  }
});
