class Ninja {
    constructor(name) {
        this.speed = 3;
        this.strength = 3;
        this.health = 100;
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log("Name: " + this.name + " Health: " + this.health + " Speed: " + this.speed + " Strength: " + this.strength);
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        super.speed = 10;
        super.strength = 10;
        super.health = 200;
        super.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
