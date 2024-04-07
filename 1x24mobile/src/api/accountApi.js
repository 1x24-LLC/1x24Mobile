import * as ApiService from './apiService';
import * as JwtService from './jwtService';

export const loginUser = async (username, password) => {
    const apiURL = '/account/login';
    const dataToPost = {
        username: username,
        password: password
    };

    JwtService.jwtKillToken();

    return ApiService.postData(apiURL, dataToPost).then((data) => {
        if (data.token == undefined) {
            return false;
        }

        JwtService.jwtSetToken(data.token);
        return true;
    });
};

export const getCurrentUser = async () => {
    return await JwtService.jwtGetUserId().then((userIdData) => {
        console.log(
            'Getting current user with id: ' + JSON.stringify(userIdData)
        );
        const apiURL = '/account/' + userIdData;

        return ApiService.getData(apiURL).then((data) => {
            if (data.isCurrentUser === true) {
                return data;
            }

            return null;
        });
    });
};
