import { useEffect, useContext, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from '../components/molecules/Search';

import GithubApi from './../api/github';
import { Post } from './../components/organisms/Post';
import DataContext from './../context/data-context';
import AuthContext from './../context/auth-context';
import { useSearch } from './../hooks/useSearch';

export const OwnGists = () => {

    const navigate = useNavigate();

    const { authState } = useContext(AuthContext);
    const { isLoggedIn } = authState;
    const { state, dispatch } = useContext(DataContext);
    const { publicGists } = state;

    const [valueSearch, handleInputSearch] = useSearch();

    useEffect(() => {
        if (isLoggedIn === false) {
            navigate('/');
        } else {
            getGistByUser();
        }
    }, [authState]);


    const handleSearch = (e) => {
        e.preventDefault();
        if (valueSearch && valueSearch.length > 0) {
            getGistByUser();
        }
    }

    const getGistByUser = async () => {
        await GithubApi.getGistsByUser('ChristianRV29')
        .then((resp) => {
            dispatch({ type: 'ADD_GISTS', payload: resp });
        }).catch((err) => console.log(err));
    };
    return (
        <Fragment>
            <div className="container">
                <Search />
                <div className="col-md-12 col-lg-12">
                    {(publicGists || []).map((it, i) => (
                        <Post gist={it} key={`post-${i + 1}-gist`} />
                    ))}
                    <div className="clearfix"></div>
                </div>
            </div>
        </Fragment>
    )
};

