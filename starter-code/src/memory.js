var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {

  var deckLength = this.cards.length

  for (var i = 0; i<deckLength; i++) {

    var randomIndex = Math.floor(Math.random() * deckLength)

    var swap = this.cards[randomIndex];

    this.cards[randomIndex] = this.cards[deckLength - 1];

    this.cards[deckLength - 1] = swap;

    deckLength--;
  }

return undefined;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  if (firstCard == secondCard) {
    this.pairsGuessed += 1;
    return true;
  }
  else return false;
}

MemoryGame.prototype.isFinished = function () {
<<<<<<< HEAD
  if (this.pairsGuessed === cards.length) return true;
=======
  if (this.pairsGuessed === 8) return true;
>>>>>>> 9482be08b28df2ed6a0bb7cf23340d6d7ee5f177
  else return false;
};