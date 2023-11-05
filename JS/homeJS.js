function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function homeQuote() {
    const genshinQuotes =
    [
        "Yesterday's experiences make me stronger today.",
        "If you lie on the grass, you can feel the heartbeat of the world.",
        "Reality is the stillness buried deep beneath the illusion."
    ]
    var randomQuoteIndex = getRandomInteger(0, genshinQuotes.length)
    document.getElementById("Quotes").innerHTML = genshinQuotes[randomQuoteIndex];
}
