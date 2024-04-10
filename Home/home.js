var dropdownTimeout;

function toggleDropdown() {
    var dropdown = document.getElementById('userDropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

function closeDropdown() {
    dropdownTimeout = setTimeout(function () {
        var dropdown = document.getElementById('userDropdown');
        dropdown.style.display = 'none';
    }, 100000); // Adjust the delay as needed
}

function clearTimeout() {
    clearTimeout(dropdownTimeout);
}

// JavaScript to make songs work and display them in the footer bar
const playlistItems = document.querySelectorAll('.card');
const nowPlaying = document.querySelector('.now-playing');
const audioPlayer = document.getElementById('audio-player');
const currentSongName = document.getElementById('current-song-name');
const currentSongImg = document.getElementById('current-song-img');
const progressBar = document.querySelector('.progress-bar .current-progress');
const volumeBar = document.querySelector('.volume-bar .current-volume');

let currentSongIndex = 0;

const playSong = (index) => {
    const songItem = playlistItems[index];
    const songName = songItem.querySelector('h3').textContent;
    const songSrc = songItem.getAttribute('data-src');
    const songImg = songItem.getAttribute('data-img');

    currentSongName.textContent = songName;
    currentSongImg.src = songImg;
    audioPlayer.src = songSrc;
    audioPlayer.play();
};

playlistItems.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentSongIndex = index;
        playSong(currentSongIndex);
    });
});

document.querySelector('.prev-btn').addEventListener('click', function () {
    currentSongIndex = (currentSongIndex - 1 + playlistItems.length) % playlistItems.length;
    playSong(currentSongIndex);
});

document.querySelector('.next-btn').addEventListener('click', function () {
    currentSongIndex = (currentSongIndex + 1) % playlistItems.length;
    playSong(currentSongIndex);
});

// Play the first song once the page loads
playSong(currentSongIndex);

// Add functionality to progress bar
audioPlayer.addEventListener('timeupdate', function () {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progress}%`;
});

// Add functionality to volume control bar
audioPlayer.addEventListener('volumechange', function () {
    const volume = (audioPlayer.volume) * 100;
    volumeBar.style.width = `${volume}%`;
});

// Control progress bar on click
progressBar.parentElement.addEventListener('click', function (event) {
    const rect = progressBar.parentElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = progressBar.parentElement.offsetWidth;
    const percentage = (x / width) * 100;
    audioPlayer.currentTime = (percentage / 100) * audioPlayer.duration;
});

// Control volume bar on click
volumeBar.parentElement.addEventListener('click', function (event) {
    const rect = volumeBar.parentElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = volumeBar.parentElement.offsetWidth;
    const percentage = (x / width);
    audioPlayer.volume = percentage;
});

// Function for Play/Pause button
const playPauseButton = document.querySelector('.play-pause-btn');
const playPauseIcon = playPauseButton.querySelector('i');

function updatePlayPauseButton() {
    if (audioPlayer.paused) {
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
    } else {
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
    }
}

playPauseButton.addEventListener('click', function () {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
    updatePlayPauseButton(); // Update the button icon after play/pause
});

// Update button icon when the page loads
updatePlayPauseButton();
// Function to play the next song automatically when the current song ends
audioPlayer.addEventListener('ended', function() {
    currentSongIndex = (currentSongIndex + 1) % playlistItems.length;
    playSong(currentSongIndex);
});



// Function for Play Next button
document.querySelector('.play-next-btn').addEventListener('click', function () {
    currentSongIndex = (currentSongIndex + 1) % playlistItems.length;
    playSong(currentSongIndex);
});
// Function to display a message when clicking the share button
function shareSong() {
    alert('Share functionality is not implemented yet.');
}
/*-----------------------------------------------------------------*/
function scrollLeftFunction() {
    var songRows = document.getElementById('songRows');
    songRows.scrollLeft -= 400; // Adjust this value as needed
}

function scrollRightFunction() {
    var songRows = document.getElementById('songRows');
    songRows.scrollLeft += 400; // Adjust this value as needed
}
/*-----------------------------------------------------------------*/
function scrollLeftFunction2() {
    var songRows = document.getElementById('songRows2');
    songRows.scrollLeft -= 400; // Adjust this value as needed
}

function scrollRightFunction2() {
    var songRows = document.getElementById('songRows2');
    songRows.scrollLeft += 400; // Adjust this value as needed
}
/*-----------------------------------------------------------------*/
function scrollLeftFunction3() {
    var songRows = document.getElementById('songRows3');
    songRows.scrollLeft -= 400; // Adjust this value as needed
}

function scrollRightFunction3() {
    var songRows = document.getElementById('songRows3');
    songRows.scrollLeft += 400; // Adjust this value as needed
}
/*-----------------------------------------------------------------*/
function scrollLeftFunction4() {
    var songRows = document.getElementById('songRows4');
    songRows.scrollLeft -= 400; // Adjust this value as needed
}

function scrollRightFunction4() {
    var songRows = document.getElementById('songRows4');
    songRows.scrollLeft += 400; // Adjust this value as needed
}
/*-----------------------------------------------------------------*/
function scrollLeftFunction5() {
    var songRows = document.getElementById('songRows5');
    songRows.scrollLeft -= 400; // Adjust this value as needed
}

function scrollRightFunction5() {
    var songRows = document.getElementById('songRows5');
    songRows.scrollLeft += 400; // Adjust this value as needed
}