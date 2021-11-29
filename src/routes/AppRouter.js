import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navbar } from '../components/organisms/Navbar';
import { LoginScreen } from '../screens/LoginScreen';
import { NotFoundScreen } from '../screens/NotFoundScreen';
import { PostsScreen } from '../screens/PostsScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<PostsScreen />} />
                <Route path="/:owner" element={<PostsScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="*" element={<NotFoundScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
