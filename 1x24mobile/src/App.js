import * as React from "react";
import { Image, View, StyleSheet, Touchable } from "react-native";
import { GlobalStyles } from "./ui/styles/globalStyles";
import "./ui/components/appHeader";
import AppHeader from "./ui/components/appHeader";

const App = () => (
  <View style={ GlobalStyles.appContainer }>
    <AppHeader />
  </View>
);

export default App;
