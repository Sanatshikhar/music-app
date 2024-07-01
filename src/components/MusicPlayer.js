import React, { useState, useRef, useEffect } from 'react';
import Controls from './Controls';
import SongList from './SongList';

const MusicPlayer = () => {
  const [songs] = useState([
    { title: '1989', src: '/music/song1.mp3' },
    { title: 'Lover', src: '/music/song2.mp3' },
    { title: 'For You', src: '/music/song3.mp3' }
  ]);
   

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSongIndex]);

  const playSong = () => {
    setIsPlaying(true);
  };

  const pauseSong = () => {
    setIsPlaying(false);
  };

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src={songs[currentSongIndex].src} onEnded={nextSong}></audio>
      <SongList songs={songs} setCurrentSongIndex={setCurrentSongIndex} />
      <Controls
        isPlaying={isPlaying}
        playSong={playSong}
        pauseSong={pauseSong}
        nextSong={nextSong}
        prevSong={prevSong}
      />
    </div>
  );
};

export default MusicPlayer;

