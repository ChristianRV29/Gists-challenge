import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import GithubApi from '../api/github';

import AuthContext from './../context/auth-context';

const staticUrl = '?code=';

export const LoginScreen = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({ errorMessage: '', isLoading: false });
    const { authState, dispatchAuth } = useContext(AuthContext);
    const { clientId, clientSecret, isLoggedIn, redirectUri } = authState;


    useEffect(() => {
        const url = window.location.href;
        const hasCode = url.includes(staticUrl);

        if (hasCode) {
            const newUrl = url.split(staticUrl);

            window.history.pushState({}, null, newUrl[0]);
            setData({ ...data, isLoading: true });

            // const requestData = {
            //     code: newUrl[1],
            //     client_id: clientId,
            //     client_secret: clientSecret,
            //     redirect_uri: redirectUri,
            // };

            dispatchAuth({ type: 'LOGIN', payload: { user: { userName: 'ChristianRV29' }, isLoggedIn: true, code: newUrl[1] }});
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authState, dispatchAuth, data]);

    if (isLoggedIn) {
        navigate('/gists/mygists');
    }

    return (
        <div className={'principal-login-container'}>
            <div className={'login-container'}>
                <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt={'git-image'} width={'100'} height={'80'} />
                {
                    data.isLoading ? (
                        <div className={'loader-container'}>
                            <div className={'loader'} ></div>
                        </div>
                    ) :
                        <a className={'login-link'} href={`https://github.com/login/oauth/authorize?scope=user&client_id=${clientId}&redirect_uri=${redirectUri}`}>
                            <button className={'btn btn-lg btn-primary btn-block'} onClick={() => {
                                setData({ ...data, errorMessage: 'Loading' });
                            }}>
                                Sign in with Github
                            </button>
                        </a>
                }
            </div>
        </div>
    )
};
