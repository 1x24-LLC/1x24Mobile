import * as React from "react";
import { Image, View, StyleSheet, Touchable } from "react-native";
import { GlobalStyles } from "./ui/styles/globalStyles";
import AppHeader from "./ui/components/appHeader";
import Feed from "./ui/components/feed";

const App = () => (
  <View style={GlobalStyles.appContainer}>
    <AppHeader />
    <Feed />
  </View>
);

export default App;
