import React, { Component } from "react";
import PushNotification from "react-native-push-notification";

export default class Notification extends Component {
  componentDidMount() {
    PushNotification.configure({
      onNotification: function(notification) {
        console.log("NOTIFICATION:", notification);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },
      popInitialNotification: true,
      requestPermissions: true
    });
  }

  render() {
    return null;
  }
}
