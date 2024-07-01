import React from 'react';
import './SongList.css';

const SongList = ({ songs }) => {
  return (
    <div>
      <div className="music-section">
        {songs.map((song, index) => (
          <div key={index} className="album">
            <img src={`assets/${song.title.replace(' ', '')}.png`} alt="Album Art" />
            <p>{song.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongList;