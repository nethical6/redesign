var quoteText = document. getElementById("quote");

quoteText.innerHTML= "()";
if (document.readyState === 'interactive') {
fetch("./data/quotes.json")
          .then((res) => {
            return res.json();
            
          })
          .then((data) =>{
             quoteText.innerHTML= data[Math.floor(Math.random()*data.length)];
          
          }
          );
}

const audio = document.querySelector("audio");
const btn = document.querySelector("button");

      btn.addEventListener("click", function () {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
        btn.innerHTML= "Pause";
  } else {
    audio.pause();
    btn.innerHTML= "Play";
    }
 });

function playMusic() {
  
}