import { useEffect, useContext, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from '../components/molecules/Search';

import GithubApi from './../api/github';
import { Post } from './../components/organisms/Post';
import DataContext from './../context/data-context';
import { useSearch } from './../hooks/useSearch';

export const PostsScreen = () => {

    const navigate = useNavigate();

    const { state, dispatch } = useContext(DataContext);
    const { publicGists } = state;

    const [valueSearch, handleInputSearch] = useSearch();

    useEffect(() => {
        getGists();
    }, []);

    const getGists = async () => {
        await GithubApi.getGists().then((res) => {
            if (res && res.length > 0) {
                dispatch({ type: 'ADD_GISTS', payload: res });
            }
        }).catch((err) => console.log(err));
    };


    const handleSearch = (e) => {
        e.preventDefault();
        if (valueSearch && valueSearch.length > 0) {
            getGistByUser();
        } else {
            getGists();
        }
    }

    const getGistByUser = async () => {
        await GithubApi.getGistsByUser(valueSearch)
        .then((resp) => {
            dispatch({ type: 'ADD_GISTS', payload: resp });
            navigate(`/${valueSearch}`);
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

