import * as ApiService from './apiService';
import * as JwtService from './jwtService';

export const loginUser = (username, password) => {
    const apiURL = '/account/login';
    const dataToPost = {
        username: username,
        password: password
    };

    ApiService.postData(apiURL, dataToPost, 'POST').then((data) => {
        JwtService.jwtSetToken(data.token);
    });
};
