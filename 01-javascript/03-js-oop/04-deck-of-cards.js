class Card {
    constructor(suit, value) {
        this._suit = suit;
        this._value = value;
    }

    get suit() {
        return _suit;
    }

    set suit(new_suit) {
        if(new_suit == "Hearts" || new_suit == "Clubs" || new_suit == "Diamonds" || new_suit == "Spades") {
            this._suit = new_suit;
        }
    }

    get value() {
        return this._value;
    }

    set value(new_value) {
        if(new_value >= 1 && new_value <= 13) {
            this._value = value;
        }
    }

    stringValue() {
        var string_values = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];

        return(string_values[this._value-1]);
    }
}

class Deck {
    constructor() {
        this._deck = this.reset();
    }

    reset() {
        var suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
        var new_deck = [];

        for(let suit of suits) {
            for(let value = 1; value <= 13; value++) {
                new_deck.push(new Card(suit, value));
            }
        }
        
        return new_deck;
    }

    shuffle() {
        var m = this._deck.length, t, i;
      
        // While there remain elements to shuffle…
        while (m) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = this._deck[m];
          this._deck[m] = this._deck[i];
          this._deck[i] = t;
        }
    }

    deal() {
        this.shuffle();
        var card = this._deck.pop();

        return card;
    }
}

class Player {
    constructor(name) {
        this._name = name;
        this._hand = [];
    }

    draw(card) {
        if(card instanceof Card) {
            this._hand.push(card);
        }
    }

    discard() {
        if(this._hand.length > 0) {
            this._hand.pop();
        }
    }
}