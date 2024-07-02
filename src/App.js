import React, { useState } from 'react';
import PlayerControls from './components/PlayerControls';
import PlaylistManager from './components/PlaylistManager';
import ChatRoom from './components/ChatRoom';
import Recommendations from './components/Recommendations';
import Suggestions from './components/Suggestions';
import LikedSongs from './components/LikedSongs';
import './App.css';

// const songs = [
//   { id: 1, title: '1989', src: 'public/audio/song1.mp3' },
//   { id: 2, title: 'Lover', src: 'public/audio/song2.mp3' },
//   { id: 3, title: 'For You', src: 'public/audio/song3.mp3' },
// ];

const recommendedSongs = [
    { id: 1, title: 'Song 1', artist: 'Artist 1', src: '/audio/song1.mp3', cover: '/images/song1.jpg' },
    { id: 2, title: 'Song 2', artist: 'Artist 2', src: '/audio/song2.mp3', cover: '/images/song2.jpg' },
    { id: 3, title: 'Song 3', artist: 'Artist 3', src: '/audio/song3.mp3', cover: '/images/song3.jpg' },
];

const suggestionMixes = [
    { id: 1, title: 'Mix 1', description: 'Mix description 1', cover: '/images/mix1.jpg' },
    { id: 2, title: 'Mix 2', description: 'Mix description 2', cover: '/images/mix2.jpg' },
    { id: 3, title: 'Mix 3', description: 'Mix description 3', cover: '/images/mix3.jpg' },
];

const App = () => {
  const [currentView, setCurrentView] = useState('home');
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
        return (
          <>
            <Recommendations songs={recommendedSongs} />
            <Suggestions mixes={suggestionMixes} />
          </>
        );
      case 'playlists':
        return <PlaylistManager />;
      case 'chat':
        return <ChatRoom />;
      case 'liked':
        return <LikedSongs likedSongs={likedSongs} songs={recommendedSongs} />;
      default:
        return (
          <>
            <Recommendations songs={recommendedSongs} />
            <Suggestions mixes={suggestionMixes} />
          </>
        );
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
        <PlayerControls likedSongs={likedSongs} toggleLikeSong={toggleLikeSong} songs={recommendedSongs} />
        {renderView()}
      </div>
    </div>
  );
};

export default App;
