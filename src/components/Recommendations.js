import React from 'react';
import './Recommendations.css';

const Recommendations = ({ songs }) => {
  return (
    <div className="recommendations">
      <h2>Recommended Songs</h2>
      <div className="songs">
        {songs.map(song => (
          <div key={song.id} className="song">
            <img src={song.cover} alt={song.title} className="song-cover" />
            <div className="song-info">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
