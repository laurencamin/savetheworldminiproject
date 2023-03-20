//Save the World Mini Project

//Welcome to USS Per Scholas!


//set USS Per Scholas hull to 20
//set USS Per Scholas firepower to 5
//set Uss Per Scholas accuracy to 0.7
function Submit() {
class SpaceShip {
    constructor(name, color, _hull, _firePower, _accuracy){
        this.name = name;
        this.color = color;
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
}
//Attack Alien space ship
attack() {
console.log("You are attacking an alien ship!")

}
//Retreat if player chooses to do so
retreat() {
console.log("Game Over! You have chosen to retreat.")

}
//Attack again after alien attacks
attackAgain() {
console.log("You are attacking an alien ship again!")


}
//If uss_per_scholas is destroyed by alien space ships, this will appear on the screen.
destroyed() {
    console.log("Game Over! Your ship has been destroyed!")
}

}

const uss_per_scholas = new SpaceShip("uss_per_scholas", "silver", 20, 5, 0.7)
//Create sub class of SpaceShip and create Alien space ship properties
class Alien extends SpaceShip {
         constructor(name, color, hull, firePower, accuracy){
           super(color, hull, firePower, accuracy)
         this.color = color;
         this.hull = hull;
         this.firepower = firePower;
         this.accuracy = accuracy;
         this.alien = Alien;
}

alienShipAttack() {
    const random_hull = Math.floor(Math.random() * 6) + 3; //Bettween 3 and 6
    console.log('You have been hit!');
    console.log(random_hull)
    const random_firePower = Math.floor(Math.random() * 4)  + 2; //Between 2 and 4
    console.log('Damage has been done!')
    console.log(random_firePower)
    if (Math.random() < `"${Alien}"`[0].accuracy) {
        console.log('You are being attacked!');
    }
    }

alienShipDestroyed() {
    if (Math.random() < `"${Alien}"`[0].accuracy) {
        console.log('You destroyed the alien ship!');
    } 
}
nextAlienShip() {
    console.log("You have chosen to continue the game!")
}
}

const alien_1 = new Alien("alien_1", "green", 4, 3, 0.7)
const alien_2 = new Alien("alien_2", "yellow", 5, 3, 0.65)
const alien_3 = new Alien("alien_3", "orange", 5, 4, 0.75)
const alien_4 = new Alien("alien_4", "red", 5, 4, 0.8)
const alien_5 = new Alien("alien_5", "pink", 6, 4, 0.6)
const alien_6 = new Alien("alien_6", "purple", 6, 4, 0.8)


//randomly assign alien ship ranged properties
//hull- between 3 and 6
const random_hull= Math.floor(Math.random() * 6) + 3; //Bettween 3 and 6
//firepower- between 2 and 4
const random_firePower= Math.floor(Math.random() * 4)  + 2; //Between 2 and 4
//accuracy- between 0.6 and 0.8 
if (Math.random() < `"${Alien}"`[0].accuracy) {
	console.log('You have been hit!');
}

console.log(uss_per_scholas)
console.log(alien_1)
uss_per_scholas.attack(alien_1)
alien_1.alienShipAttack(uss_per_scholas)
uss_per_scholas.attackAgain(alien_1)
alien_1.destroyed(uss_per_scholas)
uss_per_scholas.destroyed(alien_1)

alert("A hord of alien ships is heading your way!");
    alert("Will you save the world or wil you retreat?");
    alert("The choice is yours!");
  
      var Name = prompt("Name your ship!");
      while (Name === "") {
      alert("Please type a name in the field!")
      var Name = prompt("Name your ship!");
      } 
  
    alert("Hello " + Name);
  
  
    var start = prompt("Type start to begin the mission");
  
    if (start === "") {
      alert("Please type start to begin the space mission!")
      throw new Error("you did not save the world!"); 
  
  
    } else {
      alert("Mission Started " + start);
    }

    alert("The first alien space ship is approaching!" + "According to our intel, it should be a green alien ship.");
  
    alert("The first alien ship finally arrives." + "Lo and behold, it is a green space ship.");

    alert("The green alien ship is getting closer!");
    var roundZero = prompt("Attack or Retreat")
    var roundOne;
    var roundTwo;
    var roundThree;
    var roundFour;
    var roundFive;
    var roundSix;

    


 function roundZero()  {
    alert("What will you do?");
    roundOne = prompt("Attack or Retreat").toLowerCase(); 
}

if (roundZero === "attack") {
    alienShipTwo();
} else {
    retreat();
}

function alienShipTwo() {
    alert("You continue your journey in space.")
    alert("Suddenly, a yellow alien ship approaches you.")
    alert("Now what?")
    roundTwo = prompt("Attack or Retreat").toLowerCase(); 
}

if (roundTwo === "attack") {
    alienShipThree();
} else {
    retreat();
}

function alienShipThree() {
    alert("You are almost half way through the mission!")
    alert("An orange ship is getting closer!")
    roundThree = prompt("Attack or Retreat").toLowerCase(); 
}

if (roundThree === "attack") {
    alienShipFour();
} else {
    retreat();
}

function alienShipFour() {
    alert("The fourth alien ship approaches!")
    alert("The red alien ship will be harder to defeat.")
    alert("What's your plan?")
    roundFour = prompt("Attack or Retreat").toLowerCase(); 
}

if (roundFour === "attack") {
    alienShipFive();
} else {
    retreat();
}

function alienShipFive() {
    alert("Oh no! Another alien ship approaches.")
    alert("It's the pink alien ship!")
    roundFive = prompt("Attack or Retreat").toLowerCase(); 
}

if (roundFive === "attack") {
    alienShipSix();
} else {
     retreat();
}

function alienShipSix() {
    alert("The final alien ship is approaching!")
    alert("It's the dreaded purple alien ship!!")
    alert("This is your last chance to save the planet!")
    roundSix = prompt("Attack or Retreat").toLowerCase(); 
}

if (roundSix === "attack") {
    winGame();
} else {
   retreat();
}
function winGame() {
    alert("Congratulations! You saved the world!!!!")
}
}
