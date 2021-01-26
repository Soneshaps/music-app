import './main.css';
import LogoArea from './logoArea';
import MusicMenu from './musicMenu'
import MusicLibaray from './musicLibaray'
import TitleBarMain from './titleBarMain'
import MainContent from './mainContent'

function App() {
  return (
    <div className="main d-flex flex-row ">
      <div className="music-nav-main pl-4 d-flex flex-column">
          <LogoArea/>
          <MusicMenu/>
          <MusicLibaray/>

      </div>
      <div className="music-content-main flex-grow-1 pl-5 pr-5">
      <TitleBarMain/>
      <MainContent/>
      </div>
    </div>
  );
}

export default App;
