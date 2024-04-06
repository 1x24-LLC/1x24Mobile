import * as ApiService from './apiService';
import * as JwtService from './jwtService';

export const loginUser = (username, password) => {
    const apiURL = '/account/login';
    const dataToPost = {
        username: username,
        password: password
    };

    console.log('Logging in user', dataToPost);

    ApiService.postData(apiURL, dataToPost, 'POST').then((data) => {
        if (data.token == undefined) {
            console.log('Login failed');
            return;
        }

        console.log('Login response', data);
        JwtService.jwtSetToken(data.token);
    });
};
