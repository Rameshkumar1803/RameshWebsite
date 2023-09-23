const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const seekBar = document.getElementById('seek-bar');
const volumeBar = document.getElementById('volume-bar');
const currentTimeDisplay = document.querySelector('.current-time');
const durationDisplay = document.querySelector('.duration');

let isPlaying = false;

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseButton.innerHTML = '&#9658;';
    } else {
        audio.play();
        playPauseButton.innerHTML = '&#9646;&#9646;';
    }
    isPlaying = !isPlaying;
}

function updateProgressBar() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progress = (currentTime / duration) * 100;

    seekBar.value = progress;
    currentTimeDisplay.textContent = formatTime(currentTime);
    durationDisplay.textContent = formatTime(duration);
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function seek() {
    const seekTo = (seekBar.value / 100) * audio.duration;
    audio.currentTime = seekTo;
}

function adjustVolume() {
    audio.volume = volumeBar.value;
}

playPauseButton.addEventListener('click', togglePlayPause);
prevButton.addEventListener('click', () => {
    // Implement logic to play the previous song
});
nextButton.addEventListener('click', () => {
    // Implement logic to play the next song
});
seekBar.addEventListener('input', seek);
volumeBar.addEventListener('input', adjustVolume);
audio.addEventListener('timeupdate', updateProgressBar);
audio.addEventListener('ended', () => {
    // Implement logic for when the song ends (e.g., auto-play the next song)
});
