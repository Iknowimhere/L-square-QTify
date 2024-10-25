import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import TopAlbums from './components/TopAlbums/TopAlbums';

function App() {
  return (
    <div className='App' >
      <Navbar />
      <Hero />
      <TopAlbums />
    </div>
  );
}

export default App;
