import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';

import * as LoginApi from './../../../api/accountApi';
import { GlobalStyles } from '../../styles/globalStyles';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginPress = () => {
        // Implement login logic here
        console.log('Login pressed', { username, password });
        LoginApi.loginUser(username, password);
    };

    const handleCreateAccountPress = () => {
        // Navigate to create account screen or logic
        console.log('Create Account pressed');
    };

    const handleForgotPasswordPress = () => {
        // Navigate to forgot password screen or logic
        console.log('Forgot Password pressed');
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
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                autoCapitalize="none"
                style={GlobalStyles.input}
            />
            <Button title="Login" onPress={handleLoginPress} />
            <Button title="Create Account" onPress={handleCreateAccountPress} />

            <TouchableOpacity onPress={handleForgotPasswordPress}>
                <Text>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
