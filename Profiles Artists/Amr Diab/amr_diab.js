// JavaScript لجعل الأغاني تعمل وظهورها في الشريط السفلي
const playlistItems = document.querySelectorAll('.playlist-item');
const nowPlaying = document.querySelector('.now-playing');
const audioPlayer = document.getElementById('audio-player');
const currentSongName = document.getElementById('current-song-name');
const currentSongImg = document.getElementById('current-song-img');
const progressBar = document.querySelector('.progress-bar .current-progress');
const volumeBar = document.querySelector('.volume-bar .current-volume');

let currentSongIndex = 0;

const playSong = (index) => {
    const songItem = playlistItems[index];
    const songName = songItem.querySelector('span').textContent;
    const songSrc = songItem.getAttribute('data-src');
    const songImg = songItem.getAttribute('data-img');
    
    currentSongName.textContent = songName;
    currentSongImg.src = songImg;
    audioPlayer.src = songSrc;
    audioPlayer.play();
};

playlistItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        currentSongIndex = index;
        playSong(currentSongIndex);
    });
});

document.querySelector('.prev-btn').addEventListener('click', function() {
    currentSongIndex = (currentSongIndex - 1 + playlistItems.length) % playlistItems.length;
    playSong(currentSongIndex);
});

document.querySelector('.next-btn').addEventListener('click', function() {
    currentSongIndex = (currentSongIndex + 1) % playlistItems.length;
    playSong(currentSongIndex);
});

// تشغيل الأغنية الأولى بمجرد تحميل الصفحة
playSong(currentSongIndex);

// إضافة وظيفة لشريط التقدم
audioPlayer.addEventListener('timeupdate', function() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progress}%`;
});

// إضافة وظيفة لشريط التحكم في الصوت
audioPlayer.addEventListener('volumechange', function() {
    const volume = (audioPlayer.volume) * 100;
    volumeBar.style.width = `${volume}%`;
});

// تحكم في شريط التقدم عند النقر
progressBar.parentElement.addEventListener('click', function(event) {
    const rect = progressBar.parentElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = progressBar.parentElement.offsetWidth;
    const percentage = (x / width) * 100;
    audioPlayer.currentTime = (percentage / 100) * audioPlayer.duration;
});

// تحكم في شريط التحكم في الصوت عند النقر
volumeBar.parentElement.addEventListener('click', function(event) {
    const rect = volumeBar.parentElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = volumeBar.parentElement.offsetWidth;
    const percentage = (x / width);
    audioPlayer.volume = percentage;
});

// وظيفة زر Play/Pause
document.querySelector('.play-pause-btn').addEventListener('click', function() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
});

// وظيفة زر Play Next
document.querySelector('.play-next-btn').addEventListener('click', function() {
    currentSongIndex = (currentSongIndex + 1) % playlistItems.length;
    playSong(currentSongIndex);
});

// وظيفة لعرض رسالة عند النقر على زر المشاركة
function shareSong() {
    alert('Share functionality is not implemented yet.');
}

