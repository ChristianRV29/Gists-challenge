
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import GithubApi from '../../api/github';
import AuthContext from '../../context/auth-context';
import DataContext from '../../context/data-context';
import { useSearch } from '../../hooks/useSearch';


export const Search = () => {
    
    const { authState } = useContext(AuthContext);
    const { dispatch } = useContext(DataContext);
    const [valueSearch, handleInputSearch] = useSearch();


    const { isLoggedIn } = authState;

    const navigate = useNavigate();

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
            console.log('busca por usuario');
            getGistByUser();
        } else {
            console.log('busca por todos');
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
        <form onSubmit={handleSearch}>
            <div className="input-group">
                <input type="search" className="form-control rounded"
                    placeholder="Search a gist by user name..." aria-label="Search"
                    aria-describedby="search-addon" onChange={handleInputSearch} value={valueSearch} />
                <button type="submit" className="btn btn-outline-primary">Search</button>
                {isLoggedIn ?  <button className={'btn btn-outline-success'}>+ Create gist</button> : <></>}
            </div>
        </form>
    )
}
