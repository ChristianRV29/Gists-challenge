import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import AuthContext from './../../context/auth-context';

export const Navbar = () => {

    const { authState, dispatchAuth } = useContext(AuthContext);
    const { isLoggedIn } = authState

    const handleLogout = () => {
        dispatchAuth({ type: 'LOGOUT' });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className={'navbar-brand me-2'} to={'/'}>
                    <img
                        src="https://img2.freepng.es/20180716/tza/kisspng-github-computer-icons-clip-art-gits-5b4d20ab1f4131.145288281531781291128.jpg"
                        height="45"
                        alt=""
                        loading="lazy"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarButtonsExample"
                    aria-controls="navbarButtonsExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarButtonsExample">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={'nav-link'} to={'/'}>
                                Public gists
                            </NavLink>
                        </li>
                        {isLoggedIn && (
                            <li>
                                <NavLink className={'nav-link'} to={'/gists/mygists'}>
                                    Your gists
                                </NavLink>
                            </li>
                        )}
                    </ul>

                    <div className="d-flex align-items-center">
                        {isLoggedIn ? 
                            <button className='btn btn-outline-danger my-2 my-sm-0' type="submit"
                                onClick={handleLogout}>
                                Logout
                            </button> :
                            <NavLink className={'btn btn-outline-dark my-2 my-sm-0'} to={'/login'}>
                                <i className="fab fa-github"></i>
                                <span>Login</span>
                            </NavLink>}
                    </div>
                </div>
            </div>

        </nav>
    );
};
