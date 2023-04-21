import GlobalOverview from '../GlobalOverview/GlobalOverview';
import TodayOverview from '../TodayOverview/TodayOverview';

import { useDispatch, useSelector } from 'react-redux';
import { actionReverseMode } from '../../actions/actions';

import './App.css';


function App() {

  const darkmode = useSelector((state) => state.darkMode);

  const dispatch = useDispatch();

  const cssClass = darkmode ? 'Filters Filters-dark' : 'Filters';

  const setDarkmode = () => {
    const body = document.querySelector(".App");
    body.classList.toggle('App-dark');
    dispatch(actionReverseMode());
  }

  return (
    <div className="App">
      <div className={cssClass}>
          <header className="App-header">
            <div className="App-Title">
              <h1>Social Media Dashboard</h1>
              <h2>Total followers : dynamic followers</h2>
            </div>
            <div className="App-DarkMode">
              Dark Mode
            <label className="Switch">
                <input type="checkbox" checked={darkmode} onChange={setDarkmode} />
                <span className="Slider"></span>
            </label>
        </div>
          </header>
          <main>
            <div className="App-GlobalOverview">
                <GlobalOverview/>
            </div>

            <div className="App-TodayOverview">
              <TodayOverview/>
            </div>
          </main>
        </div>
      
    </div>
  );
}

export default App;
