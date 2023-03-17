const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};
  
const dragonDamage = () => Math.floor((Math.random() * dragon.strength) + 15);

const warriorDamage = () => {
  const dmg = warrior.strength * warrior.weaponDmg;
  return Math.floor((Math.random() * dmg) + warrior.strength);
};

const mageDamage = () => {
  const dmg = mage.intelligence;
  if (mage.mana > 15) {
    const dmgDone = Math.floor((Math.random() * dmg) + dmg);
    mage.mana -= 15;
    return { Damage: dmgDone, ManaSpent: 15 };
  };

return 'Não possui mana suficiente';
};

const gameActions = {
  // Crie as HOFs neste objeto.
  wrBattle: (wrdamage) => {
    wrdamage = warriorDamage();
    warrior.damage = warrior.damage === undefined ? wrdamage : + wrdamage;
    dragon.healthPoints -= wrdamage;
  },

  mageBattle: (mageDmg) => {
    // mageDmg = mageDamage();
    mage.damage = mage.damage === undefined ? mageDmg.Damage : + mageDmg.Damage;
    dragon.healthPoints -= mageDmg.Damage;
  },

  dragonBattle: (drgDmg) => {
    // drgDmg = dragonDamage();
    dragon.damage = dragon.damage === undefined ? drgDmg : + drgDmg;
    mage.healthPoints -= drgDmg;
    warrior.healthPoints -= drgDmg;
  },
  
};
gameActions.dragonBattle(dragonDamage())
gameActions.mageBattle(mageDamage());
gameActions.wrBattle(warriorDamage());

const battleMembers = { mage, warrior, dragon };

console.log(battleMembers);