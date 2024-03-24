var cardList = [
    {id:0,
        character: '爱',
        pinyin: 'ài',
        definition: 'to love; love; affection'
    },

    {id:1, 
        character: '八',
        pinyin: 'bā',
        definition: 'eight; 8'
    },

    {id:2,
        character: '爸爸',
        pinyin: 'bà ba',
        definition: 'father (informal); classifier: 个，位'
    },

    {id:3,
        character: '杯子',
        pinyin: 'bēi zi',
        definition: 'cup; glass; classifier:  个， 支'
    },

    {id:4,
        character: '北京',
        pinyin: 'běi jīng',
        definition: 'Beijing (capital of China)'
    },

    {id:5,
        character: '本',
        pinyin: 'běn',
        definition: 'origin; source; roots or stems of plants; this; the current; root; foundation; basis; classifier for books, files, etc.; originally'
    },

    {id:6,
        character: '不客气',
        pinyin: 'bú kè qi',
        definition: 'you are welcome'
    },

    {id:7,
        character: '不',
        pinyin: 'bù',
        definition: 'not (negative prefix); no'
    },

    {id:8,
        character: '菜',
        pinyin: 'cài',
        definition: 'dish (type of food); vegetables; cusine; classifier: 盘，道'
    },

    {id:9,
        character: '茶',
        pinyin: 'chá',
        definition: 'tea; tea plant; classifier: 杯，壶'
    }
]
var originalCardNumber = 0;
var originalFlipNumber = 0;

function nextButton() {
    originalCardNumber++;
    var actualCardNumber = originalCardNumber % cardList.length;
    var character = cardList[actualCardNumber].character;
    var primary = document.getElementById('primary');
    var secondary = document.getElementById('secondary');
    primary.innerHTML = character;
    secondary.innerHTML = "";
}

function cardCount() {
    var actualCardNumber = originalCardNumber % cardList.length;
    var cardCount = document.getElementById('cardCount');
    cardCount.innerHTML = 'Card Count: ' + (actualCardNumber + 1).toString() + '/' + (cardList.length).toString();
}

function flipButton() {
    originalFlipNumber++;
    var actualCardNumber = originalCardNumber % cardList.length;
    var actualFlipNumber = originalFlipNumber % 2;
    console.log(actualFlipNumber);
    if (actualFlipNumber == 0) {
        var character = cardList[actualCardNumber].character;
        var primary = document.getElementById('primary');
        var secondary = document.getElementById('secondary');
        primary.innerHTML = character;
        secondary.innerHTML = "";
        console.log('Question side');
    } else {
        var pinyin = cardList[actualCardNumber].pinyin;
        var definition = cardList[actualCardNumber].definition;
        var primary = document.getElementById('primary');
        var secondary = document.getElementById('secondary');
        primary.innerHTML = pinyin;
        secondary.innerHTML = definition;
        console.log('Answer side');
    }
    console.log("flip");
}

setInterval(cardCount, 500);