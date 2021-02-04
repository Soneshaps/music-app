import './main.css';
import LogoArea from './logoArea';
import MusicMenu from './musicMenu'
import MusicLibaray from './musicLibaray'
import TitleBarMain from './titleBarMain'
import MainContent from './mainContent'
import Track from './track'
import Artist from './artist'
import Recent from './recent'
import MiniPlayer from './miniPlayer'
import Playlist from './playlist'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import {useDataLayerValue} from './DataLayer';



function App() {
  const windowWidth = window.innerWidth;
  const pathname = window.location.pathname;
  const [{current_playing_track}]= useDataLayerValue();


  return (
    <Router>
    <div className="main d-flex">
      {(windowWidth>775?
        <div className="music-nav-main pl-4 pr-5 d-flex flex-column">
          <LogoArea/>
          <MusicMenu/>
          <MusicLibaray/>
        </div>
        :'' )}
      
      <div className="music-content-main pl-5 pr-5">
      
      
      <TitleBarMain/>
        <Switch>
          <Route path='/' exact component={MainContent}/>
          <Route path='/track' component={Track}/>
          <Route path='/artist' component={Artist}/>
          <Route path='/recent' component={Recent}/>
          <Route path='/playlist' component={Playlist}/>
        </Switch>
        
      </div>
     {((pathname==='/' && windowWidth>1000) || current_playing_track==="" )?'':<MiniPlayer/>}
    </div>
    </Router>
  );
}

export default App;
