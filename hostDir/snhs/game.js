var gameList = [
    {
        "name": "Online Uno | Uno Freak",
        "description": "Juego Online de Uno organizado por Uno Freak.",
        "link": "https://play.unofreak.com/"
    },
    {
        "name": "Lotería",
        "description": "El juego de Lotería se conmemora en este doodle de Google.",
        "link": "https://www.google.com/doodles/celebrating-loteria"
    },
    {
        "name": "Scattergories | Scattergoriesonline.net",
        "description": "Un juego en línea de scattegories en español.",
        "link" : "https://scattergoriesonline.net/new-game.xhtml#lang=es"
    },
    {
        "name": "Online BattleShip",
        "description": "Un juego en línea de Battleship para jugar con sus amigos.",
        "link": "https://papergames.io/en/battleship"
    },
    {
        "name": "Pictionary",
        "description": "Genera palabras para jugar pictionary sobre Zoom.",
        "link": "https://www.randomlists.com/spanish-words?dup=false&qty=1"
    },
    {
        "name": "Online Dominoes | playdrift.com",
        "description": "Juega al dominó en línea con sus amigos.",
        "link": "https://dominoes.playdrift.com/"
    },
    {
        "name": "Random Trivia | randomtriviagenerator.com",
        "description": "Diviértase jugando trivia con sus amigos.",
        "link": "https://www.randomtriviagenerator.com/#!/"
    },
    {
        "name": "Settlers of Catan Online | catanuniverse.com",
        "description": "Juega el juego de Settlers of Catan en línea",
        "link": "https://catanuniverse.com/es/game/"
    },
    {
        "name": "Card Games | cardgames.io",
        "description": "Un montón de juegos de cartas en línea. Para empezar, elige un juego y crea un \'cuarto\' para que tú y tus amigos pueden jugar.",
        "link": "https://cardgames.io"
    }
]

var old = 0;
function getGame() {
    var temp = Math.floor(Math.random() * gameList.length);

    if(temp === old && old != null) {
        return getGame();
    } else {
        old = temp;
        return gameList[temp];
    }
}

function set_text() {
    let log = document.getElementById("log");
    log.innerHTML = jsToHTML();
}

function jsToHTML() {

    game = getGame();
    var out = "<!-- The following code was injected by game.js => jsToHTML-->";
    var i;
    out += '<p>Name: ' + game.name + '</p> <p>Description: ' + game.description + '</p>';
    out += '<p><a href=' + game.link + ' target="_blank" rel="noopener noreferrer">link</a></p> <!-- End of injected HTML -->';
    // console.log(out);
    return out;
}
