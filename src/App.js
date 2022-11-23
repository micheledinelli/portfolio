import './App.css';
import MainPanel from './components/MainPanel';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className="AppContainer">
            <Sidebar />
            <MainPanel />
        </div>
    );
}

export default App;
