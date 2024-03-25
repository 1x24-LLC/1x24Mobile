import * as React from "react";
import { Image, View, SafeAreaView, Text } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { GlobalStyles } from "./ui/styles/globalStyles";
import AppHeader from "./ui/components/appHeader";
import Feed from "./ui/components/feed";

const App = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={GlobalStyles.appContainer}>
      <SafeAreaView
        style={(GlobalStyles.appContainer, { paddingTop: insets.top })}
      >
        <AppHeader />
      </SafeAreaView>
      <Feed />
    </View>
  );
};

export default App;
