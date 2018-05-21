

var quotes = [
    "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires",
   "Great things in business are never done by one person. They're done by a team of people", 
    "A business that makes nothing but money is a poor business",
    "Ideas pull the trigger, but instinct loads the gun",
    "We're all working together; that's the secret" 
  ];
  
 var button = document.getElementById("quoteBtn");

 // this event listener listens to a click and executes two functions changeQuote and Randomcolor. 
    button.addEventListener("click", changeQuote);

//function to chnage the Quote inside the "P" element in the HTML
  
 function changeQuote(){
    var newQuote = quotes[Math.floor((Math.random()* quotes.length))] ;

    document.getElementById("quoteBox").innerHTML = newQuote;
// grabs another function to change the color of the background
    document.querySelector('.background').style.background = randomColor();
  };

 
 //code to change the color of the body every time a click is made makes sure the transition is smooth. 
 var red ;
 var blue ;
 var green ;
 
 function randomColor(){
   var randomColors ;
   red = Math.floor(Math.random() * 256);
   blue = Math.floor(Math.random() * 256);
   green = Math.floor(Math.random() * 256);
   randomColors = 'rgb(' + red + ',' + blue + ',' + green +')';
   return randomColors ; 

 }

  






