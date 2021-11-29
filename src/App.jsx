import { AppRouter } from "./routes/AppRouter";
import DataHolder from './data/DataHolder';
import './styles/app.css';
import AuthHolder from "./data/AuthHolder";
const App = () => {
    return (
        <AuthHolder>
            <DataHolder>
                <AppRouter />
            </DataHolder>
        </AuthHolder>
    );
};

export default App;