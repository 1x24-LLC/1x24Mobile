import * as React from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar, Badge, IconButton } from 'react-native-paper';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GlobalStyles } from './../styles/globalStyles';

const AppHeader = () => (
    <View style={GlobalStyles.AppHeader.container}>
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={GlobalStyles.Card.touchable}>
                <Image
                    source={require('./../../../assets/images/logo32.png')}
                    style={[GlobalStyles.AppHeader.logoContainer]}
                />
            </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={GlobalStyles.Card.touchable}>
                <IconFontAwesome name="camera-retro" size={32} />
            </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={GlobalStyles.Card.touchable}>
                <IconMaterialCommunityIcons
                    name="message-text-outline"
                    size={32}
                />
                <Badge style={GlobalStyles.AppHeader.badge}>69</Badge>
            </TouchableOpacity>
            <TouchableOpacity style={GlobalStyles.Card.touchable}>
                <IconMaterialCommunityIcons name="login" size={32} />
            </TouchableOpacity>
        </View>
    </View>
);

export default AppHeader;
