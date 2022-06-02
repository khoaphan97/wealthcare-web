import './App.scss';
import ContextArea from './containers/ContextArea';
import LeftMenu from './containers/LeftMenu';
import Navbar from './containers/Navbar';

function App() {
    return <div className='wtc-app'>
        <Navbar />
        <section className="wtc-dashboard-area">
            <LeftMenu />
            <div className="middle-content"></div>
            <ContextArea />
        </section>
    </div>
}

export default App;
