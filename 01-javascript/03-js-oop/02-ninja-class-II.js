function Ninja(name) {
    var speed = 3;
    var strength = 3;

    this.health = 100;
    this.name = name;

    this.sayName = function() {
        console.log("My ninja name is " + this.name);
    }

    this.showStats = function() {
       console.log("Name: " + this.name + " Health: " + this.health + " Speed: " + speed + " Strength: " + strength); 
    } 

    this.drinkSake = function() {
        this.health += 10;
        return this;
    }

    this.punch = function(ninja) {
        if(ninja instanceof Ninja) {
            ninja.health -= 5;
            console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
        }
    }

    this.kick = function(ninja) {
        if(ninja instanceof Ninja) {
            ninja.health -= (15 * strength);
            console.log(ninja.name + " was kicked by " + this.name + " and lost " + (15 * strength) + " Health!");
        }
    }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);

