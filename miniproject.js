//Save the World Mini Project

//Welcome to USS Per Scholas! Click on a Mission to begin!


//set USS Per Scholas hull to 20
//set USS Per Scholas firepower to 5
//set Uss Per Scholas accuracy to 0.7

class SpaceShip {
    constructor(name, color, hull, firePower, accuracy){
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
    console.log('You destroyed the alien ship!')
    //if (Math.random() < `"${Alien}"`[0].accuracy) {
    //}
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




//window.prompt(‘sth’)
//1. Player clicks begin mission button to begin

//2. Screen reads Round 1

//3. Player begins round by shooting green alien ship.

//4. Green alien ship shoots back.

//5. If player survives, shoot green alien ship again.

//6. If green alien ship survives, shoot player again.

//7. Loop through round until player or alien ship is
//eliminated first.

//8. If player destroys the ship, they can end the 
//round by choosing to attack next alien ship or retreat.

//9. If player chooses to attack the next alien ship,
//the game contiues. If player decides to retreat,
//the game is over. 

//10. If player destroys all alien ships, he wins.

//11. Else, player loses the game if destroyed. 
