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

