var cardList = [
    {id:0,
        question: 'hello',
        answer: 'bye'
    },

    {id:1, 
        question: 'hehe',
        answer: 'katsu'
    }
]

var originalCardNumber = 0;
var originalFlipNumber = 0;

function nextButton() {
    originalCardNumber++;
    var actualCardNumber = originalCardNumber % cardList.length;
    var displayCard = cardList[actualCardNumber].question;
    var element = document.getElementById('cardContent');
    element.textContent = displayCard;
}

function flipButton() {
    originalFlipNumber++;
    var actualCardNumber = originalCardNumber % cardList.length;
    var actualFlipNumber = originalFlipNumber % 2;
    console.log(actualFlipNumber);
    if (actualFlipNumber == 0) {
        var displayCard = cardList[actualCardNumber].answer;
        var element = document.getElementById('cardContent');
        element.textContent = displayCard;
        console.log('Question side');
    } else {
        var displayCard = cardList[actualCardNumber].question;
        var element = document.getElementById('cardContent');
        element.textContent = displayCard;
        console.log('Answer side');
    }
    console.log("flip");
}