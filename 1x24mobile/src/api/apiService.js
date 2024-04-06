import { API_BASE_URL } from './../config';
import { jwtGetToken } from './jwtService';

export const postData = async (url = '', data = {}, method) => {
    url = API_BASE_URL + url;
    jwtToken = jwtGetToken();

    console.log(method + 'ing to ' + url + ' data ' + JSON.stringify(data));

    try {
        const response = await fetch(url, {
            method: method,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                ...(jwtToken !== '' && { Authentication: 'Bearer ' + jwtToken })
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        // Check if the response was ok (status in the range 200-299)
        if (!response.ok) {
            // Make the promise be rejected if we cannot resolve the response into a JSON object

            if (response.status === 401) {
                console.log('Unauthorized');
            }
        }

        return await response.json();
    } catch (error) {
        // Handle errors that occur during the fetch
        console.error('There was a problem with your fetch operation:', error);
    }
};
