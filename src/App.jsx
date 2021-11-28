import { AppRouter } from "./routes/AppRouter";
import DataHolder from './data/DataHolder';
import './styles/app.css';
const App = () => {
    return (
        <DataHolder>
            <AppRouter />
        </DataHolder>
    );
};

export default App;