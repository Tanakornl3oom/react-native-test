/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Alert
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

import {
  Scene,
  Router,
  Actions,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox
} from "react-native-router-flux";

import TouchID from "react-native-touch-id";
import Home from "./src/component/home/Home";
import Login from "./src/component/login/Login";
import Gallery from "./src/component/gallery/Gallery";
import AsyncStorage from "./src/component/asyncStorage/AsyncStorage";
import GetAsyncStorage from "./src/component/asyncStorage/GetAsyncStorage";
import FlexBox from "./src/component/layout/FlexBox";
import Notification from "./src/component/notification/Notification";
import Camera from "./src/component/camera/Camera";

const App: () => React$Node = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={Login} title="Login" />
        <Scene key="home" component={Home} title="Home" />
        <Scene key="gallery" component={Gallery} title="Gallery" />
        <Scene key="layout" component={FlexBox} title="Layout" />
        <Scene key="camera" component={Camera} title="Camera" />
        <Scene key="flexBox" component={FlexBox} title="FlexBox" />
        <Scene
          key="notification"
          component={Notification}
          title="Notification"
        />
        <Scene
          key="asyncStorage"
          component={AsyncStorage}
          title="AsyncStorage"
        />
        <Scene
          key="getAsyncStorage"
          component={GetAsyncStorage}
          title="GetAsyncStorage"
        />
      </Stack>
    </Router>
    // <>
    //   <StatusBar barStyle="dark-content" />
    //   <SafeAreaView>
    //     <ScrollView
    //       contentInsetAdjustmentBehavior="automatic"
    //       style={styles.scrollView}>
    //       <Header />
    //       {global.HermesInternal == null ? null : (
    //         <View style={styles.engine}>
    //           <Text style={styles.footer}>Engine: Hermes</Text>
    //         </View>
    //       )}
    //       <View style={styles.body}>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>Step One</Text>
    //           <Text style={styles.sectionDescription}>
    //             Edit <Text style={styles.highlight}>App.js</Text> to change this
    //             screen and then come back to see your edits.
    //           </Text>
    //         </View>
    //         <View>
    //           <TouchableHighlight style={styles.btn} onPress={pressHandler}>
    //             <Text>Authenticate with Touch ID</Text>
    //           </TouchableHighlight>
    //         </View>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>See Your Changes</Text>
    //           <Text style={styles.sectionDescription}>
    //             <ReloadInstructions />
    //           </Text>
    //         </View>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>Debug</Text>
    //           <Text style={styles.sectionDescription}>
    //             <DebugInstructions />
    //           </Text>
    //         </View>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>Learn More</Text>
    //           <Text style={styles.sectionDescription}>
    //             Read the docs to discover what to do next:
    //           </Text>
    //         </View>
    //         <LearnMoreLinks />
    //       </View>
    //     </ScrollView>
    //   </SafeAreaView>
    // </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  },
  btn: {
    borderRadius: 3,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#0391D7"
  }
});

export default App;
