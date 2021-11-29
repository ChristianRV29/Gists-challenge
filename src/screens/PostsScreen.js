import { useEffect, useContext, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

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
                <form onSubmit={handleSearch}>
                    <div className="input-group">
                        <input type="search" className="form-control rounded"
                            placeholder="Search a gist by user name..." aria-label="Search"
                            aria-describedby="search-addon" onChange={handleInputSearch} value={valueSearch} />
                        <button type="submit" className="btn btn-outline-primary">Search</button>
                    </div>
                </form>
                <div className="col-md-12 col-lg-12">
                    {(publicGists || []).map((it, i) => (
                        <Post gist={it} key={`post-${i + 1}-gist`} />
                    ))}
                    {/* <div className="pagination-wrap">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div> */}
                    <div className="clearfix"></div>
                </div>
            </div>
        </Fragment>
    )
};

