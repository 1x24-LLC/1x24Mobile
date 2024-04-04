import { API_BASE_URL } from '/src/config';
import { jwtGetToken } from '/src/api/jwtService';

export const postData = async (url = '', data = {}, method) => {
    url = API_BASE_URL + url;
    // Default options are marked with *
    try {
        const response = await fetch(url, {
            method: method,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                Authentication: 'Bearer ' + jwtGetToken()
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        // Check if the response was ok (status in the range 200-299)
        if (!response.ok) {
            // Make the promise be rejected if we cannot resolve the response into a JSON object
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        // Handle errors that occur during the fetch
        console.error('There was a problem with your fetch operation:', error);
    }
};
