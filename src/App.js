document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = new Audio(); // Create a new HTML5 audio element
    const playPauseButton = document.getElementById('playPauseButton');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    const songs = [
        { name: '1989', file: '_Soulmate_64(PagalWorld.com.sb).mp3' },
        { name: 'Lover', file: 'O Mahi O Mahi_64(PagalWorld.com.sb).mp3' },
        { name: 'For You', file: 'O Sajni Re(PagalWorld.com.sb).mp3' }
    ];

    let currentSongIndex = 0;

    function playSong() {
        audioPlayer.src = songs[currentSongIndex].file;
        audioPlayer.play();
    }

    playPauseButton.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    prevButton.addEventListener('click', function() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        playSong();
    });

    nextButton.addEventListener('click', function() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        playSong();
    });

    playSong();
});
