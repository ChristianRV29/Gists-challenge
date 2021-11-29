import { useContext } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navbar } from '../components/organisms/Navbar';
import AuthContext from '../context/auth-context';
import { DetailPostScreen } from '../screens/DetailPostScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { NotFoundScreen } from '../screens/NotFoundScreen';
import { OwnGists } from '../screens/OwnGists';
import { PostsScreen } from '../screens/PostsScreen';

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<PostsScreen />} />
                <Route path="/:owner" element={<PostsScreen />} />
                <Route path="/gists/mygists" element={<OwnGists />} /> 
                <Route path="/gist/:id"  element={<DetailPostScreen />}/>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="*" element={<NotFoundScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
