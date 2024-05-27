import React, { useState } from 'react';
import {
    View,
    ScrollView,
    TextInput,
    Button,
    Pressable,
    Text,
    TouchableOpacity
} from 'react-native';

import { GlobalStyles } from '../../styles/globalStyles';
import { useUser } from './../../../userContext';
import { CheckBox } from 'react-native-elements';
import * as UserApi from '../../../api/accountApi';

const CreateAccountScreen = ({ navigation }) => {
    const { user, signIn, signOut } = useUser();

    // Display fields
    const [email, setEmail] = useState('');
    const [displayname, setDisplayname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [birtdate, setBirthdate] = useState('');
    const [location, setLocation] = useState('');
    const [portfolioUrl, setPortfolioUrl] = useState('');
    const [bio, setBio] = useState('');
    const [smsPhoneNumber, setSmsPhoneNumber] = useState('');
    const [emailOptIn, setEmailOptIn] = useState(false);
    const [smsOptIn, setSmsOptIn] = useState(false);

    // Error fields
    const [createAccountFailed, setCreateAccountFailed] = useState(false);
    const [emailError, setEmailError] = useState(null);
    const [displaynameError, setDisplaynameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState(null);
    const [birthdateError, setBirthdateError] = useState(null);
    const [locationError, setLocationError] = useState(null);
    const [portfolioUrlError, setPortfolioUrlError] = useState(null);
    const [bioError, setBioError] = useState(null);
    const [smsPhoneNumberError, setSmsPhoneNumberError] = useState(null);

    const handleCreateAccountPress = async () => {
        if (validateForm()) {
            let loginSuccess = await signIn(username, password);
            console.log('Login was successful: ' + loginSuccess);

            if (loginSuccess) {
                navigation.navigate('Home');
            }

            setLoginFailed(() => !loginSuccess);
        }
    };

    const handleLoginPress = () => {
        navigation.navigate('Account.Login');
    };

    validateEmailOnChange = (email) => {
        validateEmail(email, true);
    };

    validateEmailOnBlur = (email) => {
        validateEmail(email, false);
    };

    const validateEmail = (email, allowPartial) => {
        UserApi.isEmailAvailable(email, allowPartial, (isAvailable) => {
            console.log('Email is available: ' + isAvailable);

            if (!isAvailable) {
                setEmailError(() => 'This email is not available');
            } else {
                setEmailError(() => null);
            }
        });

        setEmail(email);
    };

    const validateDisplayName = (displayName) => {
        UserApi.isDisplayNameAvailable(displayName, (isAvailable) => {
            console.log('Display name is available: ' + isAvailable);

            if (!isAvailable) {
                setDisplaynameError(() => 'This display name is not available');
            } else {
                setDisplaynameError(() => null);
            }
        });

        setDisplayname(displayName);
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
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={validateEmailOnChange}
                    onBlur={() => {
                        validateEmailOnBlur(email);
                    }}
                    autoCapitalize="none"
                    style={GlobalStyles.input}
                />
                {!!emailError && (
                    <Text style={{ color: 'red' }}>{emailError}</Text>
                )}

                <TextInput
                    placeholder="Display Name"
                    value={displayname}
                    onChangeText={validateDisplayName}
                    autoCapitalize="none"
                    style={GlobalStyles.input}
                />
                {!!displaynameError && (
                    <Text style={{ color: 'red' }}>{displaynameError}</Text>
                )}

                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    style={GlobalStyles.input}
                />
                {!!passwordError && (
                    <Text style={{ color: 'red' }}>{passwordError}</Text>
                )}

                <TextInput
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    autoCapitalize="none"
                    style={GlobalStyles.input}
                />
                {!!confirmPasswordError && (
                    <Text style={{ color: 'red' }}>{confirmPasswordError}</Text>
                )}

                <TextInput
                    placeholder="Your Birthdate"
                    value={birtdate}
                    onChangeText={setBirthdate}
                    autoCapitalize="none"
                    style={GlobalStyles.input}
                />
                {!!birthdateError && (
                    <Text style={{ color: 'red' }}>{birthdateError}</Text>
                )}

                <TextInput
                    placeholder="Your Location"
                    value={location}
                    onChangeText={setLocation}
                    autoCapitalize="none"
                    style={GlobalStyles.input}
                />
                {!!locationError && (
                    <Text style={{ color: 'red' }}>{locationError}</Text>
                )}

                <TextInput
                    placeholder="URL to Your Portfolio"
                    value={portfolioUrl}
                    onChangeText={setPortfolioUrl}
                    autoCapitalize="none"
                    style={GlobalStyles.input}
                />
                {!!portfolioUrlError && (
                    <Text style={{ color: 'red' }}>{portfolioUrlError}</Text>
                )}

                <TextInput
                    placeholder="Your Bio"
                    value={bio}
                    onChangeText={setBio}
                    autoCapitalize="none"
                    style={GlobalStyles.input}
                />
                {!!bioError && <Text style={{ color: 'red' }}>{bioError}</Text>}

                <View style={GlobalStyles.separator} />

                <Text style={GlobalStyles.Card.title}>
                    We won't share your contact info with third parties.
                </Text>
                <Text style={GlobalStyles.Card.description}>
                    With your consent, we'll use it for system messages and
                    notifications. Phone numbers are optional, required only for
                    SMS alerts and two-factor authentication.
                </Text>

                <TextInput
                    placeholder="Your SMS Phone Number"
                    value={smsPhoneNumber}
                    onChangeText={setSmsPhoneNumber}
                    autoCapitalize="none"
                    style={GlobalStyles.input}
                />
                {!!smsPhoneNumberError && (
                    <Text style={{ color: 'red' }}>{smsPhoneNumberError}</Text>
                )}

                <CheckBox
                    title="Email Opt In"
                    checked={emailOptIn}
                    onPress={() => setEmailOptIn(!emailOptIn)}
                />

                <CheckBox
                    title="SMS Opt In"
                    checked={smsOptIn}
                    onPress={() => setSmsOptIn(!smsOptIn)}
                />

                {createAccountFailed && (
                    <Text style={{ color: 'red' }}>
                        Couldn't create account right now
                    </Text>
                )}

                <Pressable
                    style={GlobalStyles.button}
                    onPress={handleCreateAccountPress}
                >
                    <Text style={GlobalStyles.buttonText}>Create Account</Text>
                </Pressable>

                <Button
                    title="Already have an account? Login"
                    onPress={handleLoginPress}
                />
            </ScrollView>
        </View>
    );
};

export default CreateAccountScreen;
