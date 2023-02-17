

function playMusic() {
  const audio = document.querySelector("audio");
const btn = document.querySelector("button");
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
        btn.innerHTML= "Pause";
  } else {
    audio.pause();
    btn.innerHTML= "Play";
    }
}