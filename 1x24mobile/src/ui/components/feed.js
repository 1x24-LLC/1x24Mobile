import * as React from "react";
import { View, ScrollView, Image, Text } from "react-native";
import { Appbar, Badge, IconButton } from "react-native-paper";
import FeedCard from "./feedCard";
import { GlobalStyles } from "./../styles/globalStyles";

const Feed = () => (
  <ScrollView
    style={GlobalStyles.Feed.container}
    //stickyHeaderIndices={[1]}
    showsVerticalScrollIndicator={true}
  >
    <FeedCard />
    <FeedCard />
    <FeedCard />
    <FeedCard />
    <FeedCard />
    <FeedCard />
    <FeedCard />
    <FeedCard />
    <FeedCard />
    <FeedCard />
  </ScrollView>
);

export default Feed;
