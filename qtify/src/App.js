import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import NewAlbums from './components/NewAlbums/NewAlbums';
import SongsSection from './components/SongsSection/SongSection';
import TopAlbums from './components/TopAlbums/TopAlbums';

function App() {
  return (
    <div className='App' >
      <Navbar />
      <Hero />
      <TopAlbums />
      <NewAlbums />
      <SongsSection/>
    </div>
  );
}

export default App;
