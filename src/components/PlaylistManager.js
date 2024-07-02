import React, { useState } from 'react';
import './PlaylistManager.css';

const PlaylistManager = () => {
  const [playlists, setPlaylists] = useState([
    { id: 1, name: 'My Playlist 1', songs: ['Song 1', 'Song 2'] },
    { id: 2, name: 'My Playlist 2', songs: ['Song 3', 'Song 4'] },
  ]);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [newSongName, setNewSongName] = useState('');
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);

  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim() !== '') {
      const newPlaylist = {
        id: playlists.length + 1,
        name: newPlaylistName,
        songs: [],
      };

      setPlaylists([...playlists, newPlaylist]);
      setNewPlaylistName('');
    }
  };

  const handleAddSong = () => {
    if (newSongName.trim() !== '' && selectedPlaylistId !== null) {
      const updatedPlaylists = playlists.map((playlist) => {
        if (playlist.id === selectedPlaylistId) {
          return {
            ...playlist,
            songs: [...playlist.songs, newSongName.trim()],
          };
        }
        return playlist;
      });

      setPlaylists(updatedPlaylists);
      setNewSongName('');
    }
  };

  const handleDeletePlaylist = (playlistId) => {
    const updatedPlaylists = playlists.filter((playlist) => playlist.id !== playlistId);
    setPlaylists(updatedPlaylists);
    setSelectedPlaylistId(null); // Clear selected playlist after deletion
  };

  const handlePlaylistSelect = (playlistId) => {
    setSelectedPlaylistId(playlistId);
  };

  return (
    <div className="playlist-manager">
      <div className="playlist-form">
        <input
          type="text"
          placeholder="Enter playlist name"
          value={newPlaylistName}
          onChange={(e) => setNewPlaylistName(e.target.value)}
        />
        <button onClick={handleCreatePlaylist}>Create Playlist</button>
      </div>

      <div className="playlist-list">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="playlist-item">
            <button onClick={() => handlePlaylistSelect(playlist.id)}>{playlist.name}</button>
            <button onClick={() => handleDeletePlaylist(playlist.id)}>Delete</button>
          </div>
        ))}
      </div>

      {selectedPlaylistId !== null && (
        <div className="song-form">
          <input
            type="text"
            placeholder="Enter song name"
            value={newSongName}
            onChange={(e) => setNewSongName(e.target.value)}
          />
          <button onClick={handleAddSong}>Add Song</button>
        </div>
      )}

      {selectedPlaylistId !== null && (
        <div className="playlist-songs">
          <h3>Songs in Selected Playlist</h3>
          <ul>
            {playlists
              .find((playlist) => playlist.id === selectedPlaylistId)
              .songs.map((song, index) => (
                <li key={index}>{song}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlaylistManager;
