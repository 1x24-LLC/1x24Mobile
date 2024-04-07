import * as SecureStore from 'expo-secure-store';
import { decode } from 'base-64';
import { API_BASE_URL } from './../config';

const jwtTokenName = 'secureJwtToken';

export const jwtSetToken = async (token) => {
    try {
        await SecureStore.setItemAsync(jwtTokenName, token);
        return;
    } catch (error) {
        throw error;
    }
};

export const jwtGetToken = async () => {
    try {
        let token = await SecureStore.getItemAsync(jwtTokenName);

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
        } else {
            console.log('Token is not expired');
        }

        return token;
    } catch (error) {
        throw error;
    }
};

export const jwtRefreshToken = async () => {
    let url = API_BASE_URL + '/account/refresh';
    let tokenValue = await SecureStore.getItemAsync(jwtTokenName);

    if (tokenValue == '') {
        return "Token is undefined, won't refresh";
    }

    if (isJwtTokenExpired(tokenValue)) {
        let data = {
            jwtToken: tokenValue
        };

        return fetch(url, {
            method: 'POST',
            //mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((json) => {
                let newToken = json.token;
                jwtSetToken(newToken);
                return newToken;
            })
            .catch((error) => {
                console.error('There was a problem refreshing token:', error);
            });
    }
};

export const isJwtTokenExpired = (token) => {
    try {
        const bufferSeconds = 30;
        const base64UrlPayload = token.split('.')[1];
        const base64Payload = base64UrlPayload
            .replace(/-/g, '+')
            .replace(/_/g, '/');
        const decodedPayload = decode(base64Payload);
        const jwtPayload = JSON.parse(decodedPayload);
        const jwtExpiration = jwtPayload.exp - bufferSeconds;
        const timeNow = Math.floor(Date.now() / 1000);

        return timeNow >= jwtExpiration;
    } catch (error) {
        console.error('There was a problem checking token expiration:', error);
        return true;
    }
};

export const jwtKillToken = async () => {
    await SecureStore.deleteItemAsync(jwtTokenName);
    return;
};

export const jwtGetUserId = async () => {
    let token = await SecureStore.getItemAsync(jwtTokenName);
    const base64UrlPayload = token.split('.')[1];
    const base64Payload = base64UrlPayload
        .replace(/-/g, '+')
        .replace(/_/g, '/');
    const decodedPayload = decode(base64Payload);
    const payload = JSON.parse(decodedPayload);
    const userId = getValueByPartialKey(payload, 'nameidentifier');

    return userId;
};

function getValueByPartialKey(object, partialKey) {
    const fullKey = Object.keys(object).find((key) => key.includes(partialKey));
    return fullKey ? object[fullKey] : undefined;
}
