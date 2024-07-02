import React, { useState } from 'react';
import PlayerControls from './components/PlayerControls';
import PlaylistManager from './components/PlaylistManager';
import ChatRoom from './components/ChatRoom';
import LikedSongs from './components/LikedSongs';
import './App.css';

const songs = [
    { id: 1, title: '1989', src: 'public/audio/_Soulmate_64(PagalWorld.com.sb).mp3' },
    { id: 2, title: 'Lover', src: 'public/audio/O Mahi O Mahi_64(PagalWorld.com.sb).mp3' },
    { id: 3, title: 'For You', src: 'public/audio/O Sajni Re(PagalWorld.com.sb).mp3' },
];

const App = () => {
  const [currentView, setCurrentView] = useState('home'); // State to manage the current view
  const [likedSongs, setLikedSongs] = useState([]);

  const toggleLikeSong = (songId) => {
    setLikedSongs((prevLikedSongs) =>
      prevLikedSongs.includes(songId)
        ? prevLikedSongs.filter((id) => id !== songId)
        : [...prevLikedSongs, songId]
    );
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <div>Home Content</div>;
      case 'playlists':
        return <PlaylistManager />;
      case 'chat':
        return <ChatRoom />;
      case 'liked':
        return <LikedSongs likedSongs={likedSongs} songs={songs} />;
      default:
        return <div>Home Content</div>;
    }
  };

  return (
    <div className="app">
      <div className="navbar">
        <ul className="nav">
          <li><a href="#" onClick={() => setCurrentView('home')}>Home</a></li>
          <li><a href="#" onClick={() => setCurrentView('explore')}>Explore</a></li>
          <li><a href="#" onClick={() => setCurrentView('genres')}>Genres</a></li>
          <li><a href="#" onClick={() => setCurrentView('profile')}>Your Profile</a></li>
        </ul>
      </div>
      <div className="sidebar">
        <ul className="sidebar-menu">
          <li><a href="#" onClick={() => setCurrentView('playlists')}>Playlists</a></li>
          <li><a href="#" onClick={() => setCurrentView('podcasts')}>Podcasts</a></li>
          <li><a href="#" onClick={() => setCurrentView('liked')}>Liked Songs</a></li>
          <li><a href="#" onClick={() => setCurrentView('recent')}>Recently Played</a></li>
          <li><a href="#" onClick={() => setCurrentView('chat')}>Chat</a></li>
        </ul>
      </div>
      <div className="main-content">
        <PlayerControls likedSongs={likedSongs} toggleLikeSong={toggleLikeSong} songs={songs} />
        {renderView()}
      </div>
    </div>
  );
};

export default App;
