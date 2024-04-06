import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
    MD3LightTheme as DefaultTheme,
    Provider as PaperProvider
} from 'react-native-paper';

import AppHeader from './src/ui/components/appHeader';
import Feed from './src/ui/components/feed';
import LoginScreen from './src/ui/screens/account/loginScreen';
import { GlobalStyles } from './src/ui/styles/globalStyles';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        secondary: 'yellow'
    }
};

const Stack = createNativeStackNavigator();

export default function Main() {
    return (
        <SafeAreaProvider>
            <PaperProvider theme={theme}>
                <View style={GlobalStyles.appContainer}>
                    <SafeAreaView
                        style={[
                            GlobalStyles.appContainer,
                            { paddingTop: 'safe' }
                        ]} // Adjusted for clarity, you will implement dynamic padding inside the component
                    >
                        <NavigationContainer>
                            <Stack.Navigator>
                                <Stack.Screen
                                    name="Home"
                                    component={Feed}
                                    options={({ navigation }) => ({
                                        headerTitle: (props) => (
                                            <AppHeader
                                                {...props}
                                                navigation={navigation}
                                            />
                                        )
                                    })}
                                />
                                <Stack.Screen
                                    name="Account.Login"
                                    component={LoginScreen}
                                    options={{
                                        title: 'Login'
                                    }}
                                />
                            </Stack.Navigator>
                        </NavigationContainer>
                    </SafeAreaView>
                </View>
            </PaperProvider>
        </SafeAreaProvider>
    );
}
