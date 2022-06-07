// Soldier
class Soldier {

  // No entiendo porque no se me printea verde en la consola
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

attack(){
  return this.strength;
}

receiveDamage(damage){
  this.health = this.health - damage; // this.health -= damage 
}
}

// Viking
class Viking extends Soldier {
constructor(name, health, strength){
  super(health,strength);
  this.name = name;
}

receivedDamage(){}

battleCry(){}

}

// Saxon
class Saxon {}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
