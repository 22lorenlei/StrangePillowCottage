// HSK Definitions
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
    },

    {id:10,
        character: '吃',
        pinyin: 'chī',
        definition: 'to eat; to destroy; to absorb; to exhaust; to suffer'
    },

    {id:11,
        character: '出租车',
        pinyin: 'chū zū chē',
        definition: 'taxi'
    },

    {id:12,
        character: '打电话',
        pinyin: 'dǎ diàn huà',
        definition: 'to make a phone call'
    },

    {id:13,
        character: '大',
        pinyin: 'dà',
        definition: 'big; huge; major; deep; oldest'
    },

    {id:14,
        character: '的',
        pinyin: 'de',
        definition: 'of; structural particle: used before anoun, linking it to preceding possessive or descriptive attribute'
    },

    {id:15,
        character: '点',
        pinyin: 'diǎn',
        definition: 'a little; a bit; drop (of liquid); stain; spot; speck; jot; dot stroke (in Chinese characters); decimal point; point; mark (of degree or level); a place (with certain characteristics); iron bell; o’clock; some; (point) unit of measurement for type; to touch on briefly; to make clear; to light; to ignite; to kindle; period of time at night (24 minutes) (old); a drip; to dibble; classifier for small indeterminate quantities'
    },

    {id:16,
        character: '电脑',
        pinyin: 'diàn nǎo',
        definition: 'computer; classifier: 台' 
    },

    {id:17,
        character: '电视',
        pinyin: 'diàn shì',
        definition: 'TV; classifier: 个'
    },

    {id:18,
        character: '电影',
        pinyin: 'diàn yǐng',
        definition: 'movie; film; classifier: 部，墓，场'
    },

    {id:19,
        character: '东西',
        pinyin: 'dōng xi',
        definition: 'thing; stuff; person; 个，件'
    },

    {id:20,
        character: '都',
        pinyin: 'dōu',
        definition: 'all; both; entirely (due to); each; even; already'
    },

    {id:21,
        character: '读',
        pinyin: 'dú',
        definition: 'to read; to study; pronunciation (读音)'
    },

    {id:22,
        character: '对不起',
        pinyin: 'duì bu qǐ',
        definition: 'Sorry; excuse me; unworthy; to let down'
    },

    {id:23,
        character: '多',
        pinyin: 'duō',
        definition: 'Many; much; multi'
    },

    {id:24,
        character: '多少',
        pinyin: 'duō shǎo',
        definition: 'how much; how many'
    },

    {id:25,
        character: '儿子',
        pinyin: 'ér zi',
        definition: 'son'
    },

    {id:26,
        character: '二', 
        pinyin: 'èr',
        definition: 'two; 2; stupid'
    },

    {id:27,
        character: '饭店',
        pinyin: 'fàn diàn',
        definition: 'restaurant; hotel; classifier: 家，个'
    },

    {id:28,
        character: '飞机',
        pinyin: 'fēi jī',
        definition: 'airplane; classifier: 架'
    },

    {id:29,
        character: '分钟',
        pinyin: 'fēn zhōng',
        definition: 'minute'
    },

    {id:30,
        character: '高兴',
        pinyin: 'gāo xìng',
        definition: 'happy; willing (to do something)'
    },

    {id:31,
        character: '个',
        pinyin: 'gè',
        definition: 'classifier for people or objevcts in general; individual; size'
    },

    {id:32,
        character: '工作',
        pinyin: 'gōng zuò',
        definition: 'work; construction; job; task; classifier: 个，份，项'
    },

    {id:33, 
        character: '狗',
        pinyin: 'gǒu',
        definition: 'dog; classifier: 只，条'
    },

    {id:34,
        character: '汉语',
        pinyin: 'hàn yǔ',
        definition: 'chinese language'
    },

    {id:35,
        character: '好',
        pinyin: 'hǎo',
        definition: 'good; well; proper; good to; easy to; very; so; (suffix indicating completion or readiness)'
    },

    {id:36,
        character:'号',
        pinyin: 'hào',
        definition: 'day of a month; name of a ship; (ordinal) number'
    },

    {id:37,
        character: '喝',
        pinyin: 'hē',
        definition: 'to drink; to shout (a command)'
    },

    {id:38,
        character: '和',
        pinyin: 'hé',
        definition: 'and; with; sum; union; peace'
    },

    {id:39,
        character: '很',
        pinyin: 'hěn',
        definition: 'very; quite; awfully'
    },

    {id:40,
        character: '后面',
        pinyin: 'hòu miàn',
        definition: 'rear; back; behind; later; afterwards'
    },

    {id:41,
        character: '回',
        pinyin: 'huí',
        definition: 'to go back; to answer; to revolve; Hui ethnic group; classifier for acts of play, section of chapter (of a classic book)'
    },

    {id:42,
        character: '会',
        pinyin: 'huì',
        definition: 'can; be possible; likely to; be sure to; assemble; to meet; union; group; a moment'
    },

    {id:43,
       character: '几',
       pinyin: 'jǐ',
       definition: 'how much; how many; several; a few'
    },

    {id:44,
        character: '家',
        pinyin: 'jiā',
        definition: 'home; family; clasifier for businesses, families; noun suffix for specialists'
    },

    {id:45,
        character: '叫',
        pinyin: 'jiào',
        definition: 'to call; to shout; to be called'
    },

    {id:46,
        character: '今天',
        pinyin: 'jīn tiān',
        definition: 'today; present'
    },

    {id:47,
        character: '九',
        pinyin: 'jiǔ',
        definition: 'nine, 9'
    },

    {id:48,
        character: '开',
        pinyin: 'kāi',
        definition: 'to open; to start; to turn on; to operate (a vehicle)'
    },

    {id:49,
        character: '看',
        pinyin: 'kàn',
        definition: 'to look at'
    },

    {id:50,
        character: '看见',
        pinyin: 'kàn jiàn',
        definition: 'to see'
    }


]
var originalCardNumber = 0;
var originalFlipNumber = 0;
var cardIndexList = [];

for (let i = 0; i < cardList.length; i++) {
    cardIndexList.push(i);
}

function shuffle() {
    for (let i = 0; i < cardList.length; i++) {
        if ((Math.random() * 100) > 60) {
            var randomSwap = Math.floor((Math.random() * 100)) % cardList.length;
            var temp = cardIndexList[i];
            cardIndexList[i] = cardIndexList[randomSwap];
            cardIndexList[randomSwap] = temp;
        }
    }
    console.log(cardIndexList);
}

function nextButton() {
    originalCardNumber++;
    var actualCardNumber = originalCardNumber % cardList.length;
    var character = cardList[cardIndexList[actualCardNumber]].character;
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
        var character = cardList[cardIndexList[actualCardNumber]].character;
        var primary = document.getElementById('primary');
        var secondary = document.getElementById('secondary');
        primary.innerHTML = character;
        secondary.innerHTML = "";
        console.log('Question side');
    } else {
        var pinyin = cardList[cardIndexList[actualCardNumber]].pinyin;
        var definition = cardList[cardIndexList[actualCardNumber]].definition;
        var primary = document.getElementById('primary');
        var secondary = document.getElementById('secondary');
        primary.innerHTML = pinyin;
        secondary.innerHTML = definition;
        console.log('Answer side');
    }
    console.log("flip");
}

setInterval(cardCount, 100);