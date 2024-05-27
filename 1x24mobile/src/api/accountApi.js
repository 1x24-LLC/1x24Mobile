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

export const isDisplayNameAvailable = ApiService.debounce(
    (displayName, callback) => {
        const apiURL = '/check/displayname/' + displayName;
        ApiService.getData(apiURL).then((data) => {
            callback(data.isAvailable);
        });
    },
    500
);

export const isEmailAvailable = ApiService.debounce(
    (email, allowPartial, callback) => {
        console.log(
            'Checking email availability for: ' + email + ' - ' + allowPartial
        );

        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            console.log('Email is valid, checking availability');
            const apiURL = '/check/email/' + email;
            ApiService.getData(apiURL).then((data) => {
                callback(data.isAvailable);
            });
        } else if (allowPartial) {
            console.log("Email is not valid but we're allowing partials");
            callback(true);
        } else {
            console.log('Email is not valid');
            callback(false);
        }
    },
    500
);
