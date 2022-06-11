import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
function onTimeUpdate ({seconds, duration}) {
  localStorage.setItem("videoplayer-current-time", seconds)
};

player.on("timeupdate", throttle(onTimeUpdate, 1000));

window.addEventListener("load", () => {
  const videoPlayerCurrentTime = localStorage.getItem("videoplayer-current-time");
  if(videoPlayerCurrentTime && player.getDuration() > videoPlayerCurrentTime && videoPlayerCurrentTime > 0) {
    player.setCurrentTime(videoPlayerCurrentTime);
  }
})
