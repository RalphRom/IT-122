
function randomQuote(){

    var quotes = [
        "All our dreams can come true, if we have the courage to pursue them. -Walt Disney",
        "If everything was perfect, you would never learn and you would never grow. -Beyonce",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
        "You will face many defeats in life, but never let yourself be defeated. -Maya Angelou",
        "I'm not concerned with your liking or disliking me... All I ask is that you respect me as a human being. -Jackie Robinson"
    ]
    
    var randomNumber = Math.floor(Math.random() * 5) + 1;

    console.log(quotes[randomNumber])
}

randomQuote();