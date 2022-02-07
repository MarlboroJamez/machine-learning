import './styles/App.css';
import Globe from './assets/video/hologram.mov';

function App() {
  return (
    <div className="App h-screen w-screen bg-zinc-900">
      <video loop  autoplay preload="none" class="video" src={Globe} type="video" ></video>
    </div>
  );
}

export default App;
