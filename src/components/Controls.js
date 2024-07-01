import React from 'react';

const Controls = ({ isPlaying, playSong, pauseSong, nextSong, prevSong }) => {
  return (
    <div className="controls">
      <button onClick={prevSong}>Previous</button>
      {isPlaying ? (
        <button onClick={pauseSong}>Pause</button>
      ) : (
        <button onClick={playSong}>Play</button>
      )}
      <button onClick={nextSong}>Next</button>
    </div>
  );
};

export default Controls;
