import { useEffect, useContext, Fragment } from 'react';
import { Search } from '../components/molecules/Search';

import GithubApi from './../api/github';
import { Post } from './../components/organisms/Post';
import DataContext from './../context/data-context';

export const PostsScreen = () => {
    const { state, dispatch } = useContext(DataContext);
    const { publicGists } = state;

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

