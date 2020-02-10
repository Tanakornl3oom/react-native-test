import AsyncStorage from "@react-native-community/async-storage";

export default class Storage {
  static async setItem(name, value) {
    try {
      await AsyncStorage.setItem(name, value);
    } catch (err) {
      console.log("error", err);
    }
  }

  static async getAllKeys() {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (err) {
      console.log("error", err);
    }
  }

  static async getItem(name) {
    try {
      const item = await AsyncStorage.getItem(name);
      return item;
    } catch (err) {
      console.log("error", err);
    }
  }

  static async removeItem(name) {
    try {
      await AsyncStorage.removeItem(name);
    } catch (err) {
      console.log("error", err);
    }
  }

  static async clear() {
    try {
      await AsyncStorage.clear();
    } catch (err) {
      console.log("error", err);
    }
  }
}
