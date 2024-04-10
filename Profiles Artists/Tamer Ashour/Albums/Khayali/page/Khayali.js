// قم بتحديد العناصر الفعلية للبطاقات في القائمة
const songCards = document.querySelectorAll('.song-card');

// تحديد العناصر الأخرى اللازمة
const audioPlayer = document.getElementById('audio-player');
const currentSongName = document.getElementById('current-song-name');
const currentSongImg = document.getElementById('current-song-img');
const progressBar = document.querySelector('.progress-bar .current-progress');
const volumeBar = document.querySelector('.volume-bar .current-volume');

let currentSongIndex = 0;

const playSong = (index) => {
    const songCard = songCards[index];
    const songName = songCard.querySelector('p').textContent;
    const songSrc = songCard.getAttribute('data-src');
    const songImg = songCard.getAttribute('data-img');
    
    currentSongName.textContent = songName;
    currentSongImg.src = songImg;
    audioPlayer.src = songSrc;
    audioPlayer.play();
};

songCards.forEach((card, index) => {
    card.addEventListener('click', function() {
        currentSongIndex = index;
        playSong(currentSongIndex);
    });
});

document.querySelector('.prev-btn').addEventListener('click', function() {
    currentSongIndex = (currentSongIndex - 1 + songCards.length) % songCards.length;
    playSong(currentSongIndex);
});

document.querySelector('.next-btn').addEventListener('click', function() {
    currentSongIndex = (currentSongIndex + 1) % songCards.length;
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

// Function for Play/Pause button
const playPauseButton = document.querySelector('.play-pause-btn');
const playPauseIcon = playPauseButton.querySelector('i');

playPauseButton.addEventListener('click', function () {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
    } else {
        audioPlayer.pause();
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
    }
});

// وظيفة زر Play Next
document.querySelector('.play-next-btn').addEventListener('click', function() {
    currentSongIndex = (currentSongIndex + 1) % songCards.length;
    playSong(currentSongIndex);
});

// وظيفة لعرض رسالة عند النقر على زر المشاركة
function shareSong() {
    alert('Share functionality is not implemented yet.');
}
