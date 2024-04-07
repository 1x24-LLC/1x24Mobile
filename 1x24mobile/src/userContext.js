import React, { createContext, useState, useContext } from 'react';
import * as AccountApi from './api/accountApi';

const UserContext = createContext();

export const UserProvider = ({ children }, { navigation }) => {
    const [user, setUser] = useState(null);

    const signIn = async (username, password) => {
        let loginSuccess = await AccountApi.loginUser(username, password);
        console.log('Login success: ' + loginSuccess);

        if (loginSuccess) {
            let currentUser = await AccountApi.getCurrentUser();
            console.log('Current user: ' + JSON.stringify(currentUser));
            setUser(currentUser);
            return true;
        }

        return false;
    };

    const signOut = () => {
        setUser(null);
    };

    const updateCurrentUser = async () => {
        let currentUser = await AccountApi.getCurrentUser();
        setUser(currentUser);
    };

    return (
        <UserContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
