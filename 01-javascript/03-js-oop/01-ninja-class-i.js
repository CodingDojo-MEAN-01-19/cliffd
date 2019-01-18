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
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
