import React from 'react';
import './App.css'; 

const App = () => {
  return (
    <div>
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
        <div className="music-section">
          <div className="album">
            <img src="Taylor1989.png" alt="Album Art" />
            <p>1989</p>
          </div>
          <div className="album">
            <img src="TaylorLover.jpeg" alt="Album Art" />
            <p>Lover</p>
          </div>
          <div className="album">
            <img src="SelenaForYou.png" alt="Album Art" />
            <p>For You</p>
          </div>
        </div>

        <div className="content-header">
          <h2>Trending Songs</h2>
        </div>
        <div className="music-section">
          <div className="album">
            <img src="Taylor1989.png" alt="Album Art" />
            <p>1989</p>
          </div>
          <div className="album">
            <img src="TaylorLover.jpeg" alt="Album Art" />
            <p>Lover</p>
          </div>
          <div className="album">
            <img src="SelenaForYou.png" alt="Album Art" />
            <p>For You</p>
          </div>
        </div>

        <div className="content-header">
          <h2>New Release</h2>
        </div>
        <div className="music-section">
          <div className="album">
            <img src="Taylor1989.png" alt="Album Art" />
            <p>1989</p>
          </div>
          <div className="album">
            <img src="TaylorLover.jpeg" alt="Album Art" />
            <p>Lover</p>
          </div>
          <div className="album">
            <img src="SelenaForYou.png" alt="Album Art" />
            <p>For You</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>© 2024 EchoPlay</p>
      </div>
    </div>
  );
};

export default App;
