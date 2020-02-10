import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

const DisMissKeyBoard = ({ children }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    {children}
  </TouchableWithoutFeedback>
);

export default DisMissKeyBoard;
