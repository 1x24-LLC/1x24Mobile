import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconsFontisto from 'react-native-vector-icons/Fontisto';
import { GlobalStyles } from './../styles/globalStyles';

const FeedCardMenu = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={GlobalStyles.Card.touchable}>
                    <IconMaterialCommunityIcons
                        name="flag-outline"
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyles.Card.touchable}>
                    <IconMaterialIcons
                        name="delete-outline"
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyles.Card.touchable}>
                    <IconMaterialIcons
                        name="query-stats"
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyles.Card.touchable}>
                    <IconMaterialIcons
                        name="edit-note"
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={GlobalStyles.Card.touchable}>
                    <IconMaterialCommunityIcons
                        name="account-cash-outline"
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyles.Card.touchable}>
                    <IconMaterialCommunityIcons
                        name="share-outline"
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyles.Card.touchable}>
                    <IconMaterialCommunityIcons
                        name="link-variant"
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyles.Card.touchable}>
                    <IconMaterialCommunityIcons
                        name="message-text-outline"
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyles.Card.touchable}>
                    <IconsFontisto
                        name="heart-alt"
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FeedCardMenu;
