import * as React from "react";
import { View, Image, Text } from "react-native";
import { Appbar, Badge, IconButton } from "react-native-paper";
import { GlobalStyles } from "./../styles/globalStyles";

const FeedCard = () => (
  <View>
    <Text>Title!</Text>
    <Image
      style={{ height: 300, width: 200 }}
      source={{
        uri: "https://picsum.photos/200/300",
      }}
    />
  </View>
);

export default FeedCard;
