import React, { useState } from 'react';
import './design.css';
import SongList from './components/SongList';
import Controls from './components/Controls';

const App = () => {
  const songsList = [
    { title: '1989', src: '/music/O Sajni Re(PagalWorld.com.sb).mp3' },
    { title: 'Lover', src: '/music/O Mahi O Mahi_64(PagalWorld.com.sb).mp3' },
    { title: 'For You', src: '_Soulmate_64(PagalWorld.com.sb).mp3' }
  ];

  const [songs] = useState(songsList);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <div className="navbar">
        <ul className="nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Genres</a></li>
          <li><a href="#">Your Profile</a></li>
        </ul>
      </div>

      <div className="sidebar">
        <ul className="sidebar-menu">
          <li><a href="#">Playlists</a></li>
          <li><a href="#">Podcasts</a></li>
          <li><a href="#">Liked Songs</a></li>
          <li><a href="#">Recently Played</a></li>
        </ul>
      </div>
      

      <div className="main-content">
        <div className="content-header">
          <h2>Featured Playlist</h2>
        </div>
        <SongList songs={songs} />
        <Controls
          songs={songs}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>

      <div className="footer">
        <p>© 2024 EchoPlay </p>
      </div>
    </div>
  );
};

export default App;
