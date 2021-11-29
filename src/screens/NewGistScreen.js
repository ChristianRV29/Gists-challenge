import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from './../context/auth-context';
export const NewGistScreen = () => {

    const { authState } = useContext(AuthContext);
    const { isLoggedIn } = authState;

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn === false) {
            navigate('/');
        }
    }, [authState]);
    return (
        <div className="container">
            <div className={'new-gist-container'}>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Gist description</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a description git" />
                        <small id="emailHelp" className="form-text text-muted">Please enter a small description.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Content of gists</label>
                        <textarea style={{ height: '450px' }} className="form-control" id="exampleFormControlTextarea1" rows="3" defaultValue={''} />
                    </div>
                    <div className="form-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="customFile" />
                            <label className ="custom-file-label" for="customFile">Choose file</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
