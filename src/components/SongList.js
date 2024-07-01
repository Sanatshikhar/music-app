import React from 'react';

const SongList = ({ songs, setCurrentSongIndex }) => {
  return (
    <div className="song-list">
      <h2>Song List</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index} onClick={() => setCurrentSongIndex(index)}>
            {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
