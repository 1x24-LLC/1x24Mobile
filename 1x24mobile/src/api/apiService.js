import { API_BASE_URL } from './../config';
import { jwtGetToken } from './jwtService';

export const postData = async (url = '', data = {}) => {
    url = API_BASE_URL + url;
    jwtToken = await jwtGetToken();

    try {
        const response = await fetch(url, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                ...(jwtToken !== '' && { Authentication: 'Bearer ' + jwtToken })
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            if (response.status === 401) {
                console.log('Unauthorized');
            }
        }

        return await response.json();
    } catch (error) {
        console.error('There was a problem with your POST operation:', error);
    }
};

export const getData = async (url = '') => {
    url = API_BASE_URL + url;
    jwtToken = await jwtGetToken();

    try {
        const response = await fetch(url, {
            method: 'GET',
            cache: 'no-cache',
            ...(jwtToken !== '' && {
                headers: {
                    Authentication: 'Bearer ' + jwtToken
                }
            }),
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        });
        if (!response.ok) {
            if (response.status === 401) {
                console.log('Unauthorized');
            }
        }

        return await response.json();
    } catch (error) {
        console.error('There was a problem with your GET operation:', error);
    }
};
