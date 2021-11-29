import { useReducer } from 'react';
import PropTypes from 'prop-types';

import DataContext from './../context/data-context';

const initialState = {
    publicGists: [],
    ownGists: [],
    actualGist: { },
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_GISTS':
            return { ...state, publicGists: action.payload };

        case 'DELETE_GIST':
            return { ...state, publicGists: [] };

        case 'ADD_MY_GISTS':
            return { ...state, ownGists: action.payload };

        case 'ASSING_GIST_DETAIL':
            return { ...state, actualGist: action.payload };

        case 'DELETE_MY_GISTS':
            return { ...state, ownGists: [] };
        default: return { ...state };
    }
};

const DataHolder = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const values = { state, dispatch };

    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    );

};

DataHolder.propTypes = { children: PropTypes.node };

export default DataHolder;