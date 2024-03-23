import * as React from "react";
import { Image, View, StyleSheet, Touchable } from "react-native";
import { Appbar, Badge, IconButton } from "react-native-paper";

const App = () => (
    <Appbar.Header>
        <IconButton
            icon={({ size }) => (
                <Image
                    source={require('./../assets/images/logo32.png')}
                    style={{ width: 66, height: 32 }}
                />
            )}
            size={66}
            onPress={() =>
            {
                alert("Main menu!");
            }}
        />
        <Appbar.Action
      icon="camera"
      onPress={() => {
        alert("Add photo!");
      }}
    />
    <Appbar.Content title="" subtitle="" />

    <View style={styles.iconContainer}>
      <IconButton
        icon="message-outline"
        onPress={() => {
          alert("Messages!");
        }}
      />
      <Badge style={styles.badge}>420</Badge>
    </View>

    <Appbar.Action
      icon="login"
      onPress={() => {
        alert("Login!");
      }}
    />
  </Appbar.Header>
);

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row", // to align IconButton and Badge in one line
    justifyContent: "center", // to center them on the main axis
    alignItems: "center", // to center them on cross-axis
    //padding: 10, // to give some space around
  },
  badge: {
    backgroundColor: "red", // to make the badge pop out
    color: "white", // to make the text color white
    marginLeft: -25, // to give some space between the IconButton and Badge
    top: -25, // to move the Badge a bit higher
    //marginTop: 50, // to give some space between the IconButton and Badge
  },
});

export default App;
