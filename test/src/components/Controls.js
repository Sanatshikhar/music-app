import React, { useEffect, useRef } from 'react';
import './Controls.css';

const Controls = ({ songs, currentSongIndex, setCurrentSongIndex, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(new Audio(songs[currentSongIndex].src));

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(songs[currentSongIndex].src);
    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error('Error playing the audio:', error);
      });
    }
  }, [currentSongIndex, isPlaying, songs]);

  const playPauseSong = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error('Error playing the audio:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  return (
    <div className="controls">
      <button onClick={prevSong}>Previous</button>
      <button onClick={playPauseSong}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={nextSong}>Next</button>
    </div>
  );
};

export default Controls;
