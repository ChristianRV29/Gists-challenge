import { useReducer } from 'react';
import PropTypes from 'prop-types';

import AuthContext from './../context/auth-context';

const initialState = {
    isLoggedIn: false,
    user: null,
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET,
    redirectUri: process.env.REACT_APP_REDIRECT_URI,
    code: null,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                user: action.payload.user,
                code: action.payload.code,
            };
        case 'LOGOUT':
            return { ...state, isLoggedIn: false, user: null };
        default: return state;
    }
};

const AuthHolder = ({ children }) => {

    const [authState, dispatchAuth] = useReducer(reducer, initialState);

    const values = { authState, dispatchAuth };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );

};

AuthHolder.propTypes = { children: PropTypes.node };

export default AuthHolder;