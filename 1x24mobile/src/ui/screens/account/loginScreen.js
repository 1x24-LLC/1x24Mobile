import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';

import { GlobalStyles } from '../../styles/globalStyles';
import { useUser } from './../../../userContext';

const LoginScreen = ({ navigation }) => {
    const { user, signIn, signOut } = useUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);
    const [usernameError, setUsernameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const handleLoginPress = async () => {
        if (validateForm()) {
            let loginSuccess = await signIn(username, password);
            console.log('Login was successful: ' + loginSuccess);

            if (loginSuccess) {
                navigation.navigate('Home');
            }

            setLoginFailed(() => !loginSuccess);
        }
    };

    const handleCreateAccountPress = () => {
        // todo: navigate to create account screen
        console.log('Create Account pressed');
    };

    const handleForgotPasswordPress = () => {
        // todo: navigate to forgot password screen
        console.log('Forgot Password pressed');
    };

    const validateForm = () => {
        let isValid = true;
        console.log('Validating form');
        if (username.trim() === '') {
            isValid = false;
            setUsernameError(() => 'Username required.');
        } else {
            setUsernameError(() => null);
        }

        if (password.trim() === '') {
            isValid = false;
            setPasswordError(() => 'Password required.');
        } else {
            setPasswordError(() => null);
        }

        return isValid;
    };

    return (
        <View>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                style={GlobalStyles.input}
            />
            {!!usernameError && (
                <Text style={{ color: 'red' }}>{usernameError}</Text>
            )}

            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                autoCapitalize="none"
                style={GlobalStyles.input}
            />
            {!!passwordError && (
                <Text style={{ color: 'red' }}>{passwordError}</Text>
            )}

            {loginFailed && <Text style={{ color: 'red' }}>Login failed</Text>}

            <Button
                title="Login"
                onPress={handleLoginPress}
            />
            <Button
                title="Create Account"
                onPress={handleCreateAccountPress}
            />

            <Button
                title="Forgot Password?"
                onPress={handleForgotPasswordPress}
            />
        </View>
    );
};

export default LoginScreen;
