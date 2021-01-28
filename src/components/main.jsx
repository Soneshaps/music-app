import './main.css';
import LogoArea from './logoArea';
import MusicMenu from './musicMenu'
import MusicLibaray from './musicLibaray'
import TitleBarMain from './titleBarMain'
import MainContent from './mainContent'
import Track from './track'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="main d-flex">
      <div className="music-nav-main pl-4 pr-5 d-flex flex-column">
          <LogoArea/>
          <MusicMenu/>
          <MusicLibaray/>

      </div>
      <div className="music-content-main pl-5 pr-5">
      
      
      <TitleBarMain/>
        <Switch>
          <Route path='/' exact component={MainContent}/>
          <Route path='/track' component={Track}/>
        </Switch>
      
      </div>
    </div>
    </Router>
  );
}

export default App;
