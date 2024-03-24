import * as React from "react";
import { Image, View, StyleSheet, Touchable } from "react-native";
import { Appbar, Badge, IconButton } from "react-native-paper";
import { GlobalStyles } from "./../styles/globalStyles";

const AppHeader = () => (
  <Appbar.Header style={GlobalStyles.AppHeader.container}>
    <IconButton
      icon={({ size }) => (
        <Image
          source={require("./../../../assets/images/logo32.png")}
          style={[GlobalStyles.AppHeader.logoContainer]}
        />
      )}
      size={66}
      onPress={() => {
        alert("Main menu!");
      }}
      style={[GlobalStyles.AppHeader.logoContainer, GlobalStyles.shadow]}
    />
    <Appbar.Action
      icon="camera"
      onPress={() => {
        alert("Add photo!");
      }}
    />
    <Appbar.Content title="" subtitle="" />

    <View style={GlobalStyles.AppHeader.iconContainer}>
      <IconButton
        icon="message-outline"
        onPress={() => {
          alert("Messages!");
        }}
      />
      <Badge style={GlobalStyles.AppHeader.badge}>420</Badge>
    </View>

    <Appbar.Action
      icon="login"
      onPress={() => {
        alert("Login!");
      }}
    />
  </Appbar.Header>
);

export default AppHeader;
