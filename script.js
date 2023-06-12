document.addEventListener("DOMContentLoaded", function() {
    var quoteContainer = document.getElementById("quote-container");
    var quoteText = document.getElementById("quote");
    var quoteAuthor = document.getElementById("author");
    var newQuoteBtn = document.getElementById("new-quote-btn");

    var quotes = [
        {
            text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "Nelson Mandela"
        },
        {
            text: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney"
        },
        {
            text: "If life were predictable it would cease to be life, and be without flavor.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "Life is what happens when you're busy making other plans.",
            author: "John Lennon"
        },
        {
            text: "The only limit to our realization of tomorrow will be our doubts of today.",
            author: "Franklin D. Roosevelt"
        }
    ];

    function getRandomQuote() {
        var randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function displayQuote() {
        var quote = getRandomQuote();
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = "- " + quote.author;
    }

    newQuoteBtn.addEventListener("click", displayQuote);

    // Display initial quote
    displayQuote();
});
