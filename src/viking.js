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


receiveDamage(damage){
  this.health = this.health - damage; //this.health -= damage
  if(this.health >= 0){
    return `${this.name} has died in act of combat`;
  } else { return `${this.name} has received ${damage} points of damage`; }
}
}

battleCry(){
  return "Odin Owns You All!";
}


// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health > 0){
      return `A saxon has received ${damage} points of damage`;
      } else { return `A saxon has died in combat`; }
      
  attack(){
    return this.strength;
      }
  }
}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
