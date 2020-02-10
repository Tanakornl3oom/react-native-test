import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight
} from "react-native";
import Storage from "../../Utils/AsyncStorage";

export default class GetAsyncStorage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [],
      mount: true
    };
  }

  async componentDidMount() {
    if (this.state.mount) {
      const keys = await Storage.getAllKeys();
      let values = [];
      for (let i = 0; i < keys.length; i++) {
        values.push({ key: keys[i], value: await Storage.getItem(keys[i]) });
      }
      this.setState({ values, mount: false });
    }
  }

  clearData = async () => {
    await Storage.clear();
    this.setState({ values: [], mount: true });
  };

  clearDataByItem = async item => {
    await Storage.removeItem(item.key);
    let newValue = this.state.values.filter(
      itemOld => itemOld.key !== item.key
    );
    this.setState({ values: newValue, mount: true });
  };

  render() {
    const { values, keys } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={values}
          keyExtractor={item => item.key}
          renderItem={({ item, index }) => (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-start"
              }}
            >
              <View style={{ width: "80%" }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "flex-start"
                  }}
                >
                  <View style={{ width: "50%" }}>
                    <Text style={styles.GridViewTextLayout}>
                      Key :{item.key}
                    </Text>
                  </View>
                  <View style={{ width: "50%" }}>
                    <Text style={styles.GridViewTextLayout}>
                      Value :{item.value}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ width: "20%" }}>
                <TouchableHighlight
                  style={styles.button}
                  onPress={() => {
                    this.clearDataByItem(item);
                  }}
                >
                  <Text style={styles.GridViewTextLayout}>Clear</Text>
                </TouchableHighlight>
              </View>
            </View>
          )}
          numColumns={1}
        />
        <TouchableHighlight
          style={styles.buttonbuttom}
          onPress={this.clearData}
        >
          <Text style={styles.text}>Clear Data From Local Storage</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  },
  GridViewTextLayout: {
    fontWeight: "bold",
    justifyContent: "center",
    color: "#000",
    padding: 10
  },
  button: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "red",
    margin: 5,
    alignItems: "center",
    position: "absolute"
  }
});
