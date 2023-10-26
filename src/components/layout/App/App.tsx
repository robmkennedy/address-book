import { Provider } from 'react-redux';
import Header from 'components/layout/Header/Header';
import MainPanel from 'components/layout/MainPanel/MainPanel';
import store from 'state/store';
import './App.scss';

/**
 * The top-level app component. It consists of two sections - the header at the top 
 * and the main panel taking up the rest of the body.
 * It is wrapped in a Provider used by react-redux for state handling.
 */
const App = () => {

    return (
        <Provider store={store}>
            <div id='app'>
                <Header />
                <MainPanel />
            </div>
        </Provider>
    );
}

export default App;
