import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Initialize the Vimeo player
const iframeEl = document.getElementById('vimeo-player');
const player = new Player(iframeEl);

// Event handler for time updates
const handleTimeUpdate = throttle(time => {
  // Save the current time to localStorage
  localStorage.setItem('videoplayer-current-time', time);
}, 1000);

// Load the saved time and play the video from that time
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime).then(() => {
    player.play();
  });
}

// Track time updates and save to localStorage
player.on('timeupdate', data => {
  const currentTime = data.seconds;
  handleTimeUpdate(currentTime);
  // console.log(currentTime);
});
