
const deck = ["S_1", "S_2", "S_3", "S_4", "S_5", "S_6", "S_7", "S_8", "S_9", "S_10", "S_J", "S_Q", "S_K",
    "C_1", "C_2", "C_3", "C_4", "C_5", "C_6", "C_7", "C_8", "C_9", "C_10", "C_J", "C_Q", "C_K",
    "H_1", "H_2", "H_3", "H_4", "H_5", "H_6", "H_7", "H_8", "H_9", "H_10", "H_J", "H_Q", "H_K",
    "D_1", "D_2", "D_3", "D_4", "D_5", "D_6", "D_7", "D_8", "D_9", "D_10", "D_J", "D_Q", "D_K"];

const numCardsPerPlayer = 10;

//Pick some number between 0-51
//Pick some number between 0-50
//Pick some number between 0-49

let gopalCards = [];
let ramCards = [];
let senthilCards = [];

function chooseCard(deck) {
    const cardIndex = Math.floor(Math.random() * deck.length);
    const card = deck[cardIndex];
    return [card,cardIndex];
}

function removeCardFromDeck(index,newDeck) {
    newDeck.splice(index, 1);
}

function takeDeck(){
    return [...deck]
}

function dealCard(roundIndex,card){
    const reminder = roundIndex % 3;

    if(reminder === 0){
        gopalCards.push(card);
    }
    if(reminder === 1){
        ramCards.push(card);
    }
    if(reminder === 2){
        senthilCards.push(card);
    }
}

function dealCardsToPlayer(newDeck){
    /*
      0 = gopal, 1 = ram, 2 = senthil,
      3 = gopal, 4 = ram, 5 = senthil,
      6 = gopal, 7 = ram, 8 = senthil,
      9 = gopal, 10 = ram, 11 = senthil
    */
    for (var i = 0; i < 30; i++) {
        const [card,cardIndex] = chooseCard(newDeck);
        dealCard(i,card);
        removeCardFromDeck(cardIndex,newDeck);
    }
}

function resetGame(){
    gopalCards=[];
    ramCards =[];
    senthilCards=[];
}

function startGame() {
    resetGame();
    const newDeck = takeDeck();
    dealCardsToPlayer(newDeck);
    console.log("gopalcards");
    console.log(gopalCards,ramCards,senthilCards);
}

startGame();
startGame();
startGame();
startGame();





