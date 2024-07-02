import React from 'react';

const LikedSongs = ({ likedSongs, songs }) => {
  const likedSongsList = songs.filter(song => likedSongs.includes(song.id));

  return (
    <div>
      <h2>Liked Songs</h2>
      <ul>
        {likedSongsList.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default LikedSongs;
