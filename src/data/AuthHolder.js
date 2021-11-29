import { useReducer } from 'react';
import PropTypes from 'prop-types';

import AuthContext from './../context/auth-context';

const initialState = {
    isLoggedIn: false,
    user: null,
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET,
    redirectUri: process.env.REACT_APP_REDIRECT_URI,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'lOGIN':
            return {
                ...state,
                isLoggedIn: action.payload.isLogged,
                user: action.payload.user
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