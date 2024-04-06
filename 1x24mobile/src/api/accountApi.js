import * as ApiService from './apiService';
import * as JwtService from './jwtService';

export const loginUser = (username, password) => {
    const apiURL = '/account/login';
    const dataToPost = {
        username: username,
        password: password
    };

    JwtService.jwtKillToken();

    return ApiService.postData(apiURL, dataToPost, 'POST').then((data) => {
        if (data.token == undefined) {
            console.log('Login failed');
            return false;
        }

        console.log('Login succeeded');
        JwtService.jwtSetToken(data.token);
        return true;
    });
};
