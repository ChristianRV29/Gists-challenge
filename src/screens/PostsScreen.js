import { useEffect, useContext } from 'react';

import GithubApi from "./../api/github";
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
        <div className="container">
            <div className="col-md-12 col-lg-12">
                {(publicGists || []).map((it) => (
                    <Post gist={it} />
                ))}
                <div className="pagination-wrap">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    )
};

