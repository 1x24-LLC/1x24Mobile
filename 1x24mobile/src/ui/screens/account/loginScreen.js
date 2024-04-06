import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';

import * as LoginApi from './../../../api/accountApi';
import { GlobalStyles } from '../../styles/globalStyles';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);
    const [usernameError, setUsernameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const handleLoginPress = async () => {
        let isValid = validateForm();

        console.log('isValid: ' + isValid);

        if (isValid) {
            console.log('Logging in user');
            let loginSuccess = await LoginApi.loginUser(username, password);

            if (loginSuccess) {
                navigation.navigate('Home');
            }

            setLoginFailed(() => !loginSuccess);
            console.log('Login success: ' + loginSuccess);
        }
    };

    const handleCreateAccountPress = () => {
        console.log('Create Account pressed');
    };

    const handleForgotPasswordPress = () => {
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
