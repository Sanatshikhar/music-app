import React, { useState, useEffect, useRef } from 'react';
import './PlayerControls.css';

const songs = [
    { id: 1, title: '1989', src: '/audio/_Soulmate_64(PagalWorld.com.sb).mp3' },
    { id: 2, title: 'Lover', src: '/audio/O Mahi O Mahi_64(PagalWorld.com.sb).mp3' },
    { id: 3, title: 'For You', src: '/audio/O Sajni Re(PagalWorld.com.sb).mp3' },
];

const PlayerControls = ({ likedSongs, toggleLikeSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.src = songs[currentSongIndex].src;
      if (isPlaying) {
        audio.play().catch(error => console.error('Error playing audio:', error));
      } else {
        audio.pause();
      }
    }
  }, [currentSongIndex, isPlaying]);

  const playSong = () => {
    setIsPlaying(true);
  };

  const pauseSong = () => {
    setIsPlaying(false);
  };

  const nextSong = () => {
    if (isShuffle) {
      const nextIndex = Math.floor(Math.random() * songs.length);
      setCurrentSongIndex(nextIndex);
    } else {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    }
  };

  const previousSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };

  const repeatSong = () => {
    setIsRepeat((prevRepeat) => !prevRepeat);
  };

  const shuffleSongs = () => {
    setIsShuffle((prevShuffle) => !prevShuffle);
  };

  const handleEnded = () => {
    if (isRepeat) {
      audioRef.current.play();
    } else {
      nextSong();
    }
  };

  return (
    <div className="player-controls">
      <audio ref={audioRef} onEnded={handleEnded} />
      <button onClick={previousSong}>Previous</button>
      <button onClick={isPlaying ? pauseSong : playSong}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <button onClick={nextSong}>Next</button>
      <button onClick={repeatSong} className={isRepeat ? 'active' : ''}>Repeat</button>
      <button onClick={shuffleSongs} className={isShuffle ? 'active' : ''}>Shuffle</button>
      <button onClick={() => toggleLikeSong(songs[currentSongIndex].id)}
        className={likedSongs.includes(songs[currentSongIndex].id) ? 'liked' : ''}>
        Like
      </button>
    </div>
  );
};

export default PlayerControls;
