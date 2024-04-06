import * as SecureStore from 'expo-secure-store';
import { API_BASE_URL } from './../config';

const jwtTokenName = 'secureJwtToken';

export const jwtSetToken = async (token) => {
    try {
        console.log('Setting token: ' + token);
        await SecureStore.setItemAsync(jwtTokenName, token);
        return;
    } catch (error) {
        throw error;
    }
};

export const jwtGetToken = async () => {
    try {
        let token = await SecureStore.getItemAsync(jwtTokenName);

        console.log('Token is ' + token);

        if (
            token == undefined ||
            token == 'undefined' ||
            token == null ||
            token == ''
        ) {
            return '';
        }

        if (isJwtTokenExpired(token)) {
            console.log('Token is expired, refreshing');
            token = jwtRefreshToken(token);
        }

        return token;
    } catch (error) {
        console.error('Ah shit ' + error);
        throw error;
    }
};

export const jwtRefreshToken = async (token) => {
    let url = API_BASE_URL & '/account/refresh';

    let tokenValue = await SecureStore.getItemAsync(jwtTokenName);

    if (tokenValue == '') {
        return "Token is undefined, won't refresh";
    }

    if (isJwtTokenExpired(tokenValue)) {
        let data = {
            jwtToken: tokenValue
        };
        console.log('Refreshing token: ' + json.stringify(data));

        return fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        })
            .then((response) => {
                console.log(json.stringify('response is: ' + response));
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((json) => {
                console.log(json.stringify('json is: ' + json));
                let newToken = json.token;
                jwtSetToken(newToken);
                return newToken;
            })
            .catch((error) => {
                console.error('There was a problem refreshing token:', error);
            });
    }
};

export const isJwtTokenExpired = async (token) => {
    try {
        const bufferSeconds = 30;
        const jwtPayload = JSON.parse(window.atob(token.split('.')[1]));
        const jwtExpiration = jwtPayload.exp - bufferSeconds;
        const timeNow = Math.floor(Date.now() / 1000);

        return timeNow >= jwtExpiration;
    } catch (error) {
        return true;
    }
};
