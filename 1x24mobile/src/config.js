let API_BASE_URL;

if (process.env.NODE_ENV === 'production') {
    API_BASE_URL = 'https://api.1x24.com';
} else {
    API_BASE_URL = 'https://1x24-test.azurewebsites.net';
    //API_BASE_URL = 'https://localhost:7287';
}

export { API_BASE_URL };
