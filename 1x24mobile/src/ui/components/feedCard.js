import React, { useState } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { GlobalStyles } from './../styles/globalStyles';
import FeedCardMenu from './feedCardMenu';

const FeedCard = () => {
    const [layout, setLayout] = useState({
        width: 0,
        height: 0,
        maxHeight: 0,
        textHeight: 0
    });

    const [titleMenuLayout, setTitleMenuLayout] = useState({
        height: 0
    });

    let imgWidth = Math.floor(Math.random() * (800 - 300 + 1) + 300);
    let imgHeight = Math.floor(Math.random() * (800 - 300 + 1) + 300);
    let imgUri = 'https://picsum.photos/' + imgHeight + '/' + imgWidth;
    console.log('Loading: ' + imgUri);

    return (
        <View
            style={GlobalStyles.Card.container}
            onLayout={(event) => {
                const { width, height } = event.nativeEvent.layout;
                const maxHeight = height * 0.85;
                const textHeight = height - maxHeight;
                setLayout({ width, height, maxHeight, textHeight });
            }}
        >
            <Image
                style={{
                    flex: 1,
                    width: undefined,
                    maxHeight: layout.maxHeight,
                    height: undefined
                }}
                source={{
                    uri: imgUri
                }}
                resizeMode="contain"
            />
            <View
                onLayout={(event) => {
                    const { width, height } = event.nativeEvent.layout;
                    setTitleMenuLayout({ height });
                }}
            >
                <Text style={GlobalStyles.Card.title}>Title!</Text>
                <FeedCardMenu />
            </View>
            <ScrollView style={{ flex: 1 }}>
                <Text style={GlobalStyles.Card.description}>
                    Hello! Yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada{' '}
                </Text>
            </ScrollView>
        </View>
    );
};

export default FeedCard;
