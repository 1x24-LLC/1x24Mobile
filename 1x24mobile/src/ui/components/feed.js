import * as React from 'react';
import { View, ScrollView } from 'react-native';
import PagerView from 'react-native-pager-view';
import FeedCard from './feedCard';
import { GlobalStyles } from './../styles/globalStyles';

const Feed = () => (
    <PagerView style={GlobalStyles.Feed.container} initialPage={0}>
        <View style={GlobalStyles.Card.container} key="1">
            <FeedCard />
        </View>
        <View style={GlobalStyles.Card.container} key="2">
            <FeedCard />
        </View>
        <View style={GlobalStyles.Card.container} key="3">
            <FeedCard />
        </View>
        <View style={GlobalStyles.Card.container} key="4">
            <FeedCard />
        </View>
        <View style={GlobalStyles.Card.container} key="5">
            <FeedCard />
        </View>
        <View style={GlobalStyles.Card.container} key="6">
            <FeedCard />
        </View>
        <View style={GlobalStyles.Card.container} key="7">
            <FeedCard />
        </View>
        <View style={GlobalStyles.Card.container} key="8">
            <FeedCard />
        </View>
        <View style={GlobalStyles.Card.container} key="9">
            <FeedCard />
        </View>
        <View style={GlobalStyles.Card.container} key="10">
            <FeedCard />
        </View>
        <View style={GlobalStyles.Card.container} key="11">
            <FeedCard />
        </View>
        <View style={GlobalStyles.Card.container} key="12">
            <FeedCard />
        </View>
        <View style={GlobalStyles.Card.container} key="13">
            <FeedCard />
        </View>
        <View style={GlobalStyles.Card.container} key="14">
            <FeedCard />
        </View>
        <View style={GlobalStyles.Card.container} key="15">
            <FeedCard />
        </View>
        <View style={GlobalStyles.Card.container} key="16">
            <FeedCard />
        </View>
        <View style={GlobalStyles.Card.container} key="17">
            <FeedCard />
        </View>
        <View style={GlobalStyles.Card.container} key="18">
            <FeedCard />
        </View>
        <View style={GlobalStyles.Card.container} key="19">
            <FeedCard />
        </View>
        <View style={GlobalStyles.Card.container} key="20">
            <FeedCard />
        </View>
    </PagerView>
);

export default Feed;
