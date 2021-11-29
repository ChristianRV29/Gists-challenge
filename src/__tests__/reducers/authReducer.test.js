import { reducer as AuthReducer } from './../../data/AuthHolder';

describe('Test with AuthReducer', () => {
    test('Should return the initialState', () => {
        const state = AuthReducer({ isLoggedIn: false }, {});

        expect(state).toEqual({ isLoggedIn: false });
    });

    test('Should authenticate user', () => {
        const action = {
            type: 'LOGIN',
            payload: {
                user: {
                    userName: 'ChristianRV29',
                },
                isLoggedIn: true,
            }
        }

        const state = AuthReducer({ isLoggedIn: false }, action);

        expect(state).toEqual({
            isLoggedIn: true,
            user: {
                userName: 'ChristianRV29',
            },
        })
    });
});