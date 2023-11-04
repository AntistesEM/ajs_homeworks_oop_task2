import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

const BowmanHero = new Bowman('Hero1');
const SwordsmanHero = new Swordsman('Hero2');
const MagicianHero = new Magician('Hero3');
const DaemonHero = new Daemon('Hero4');
const UndeadHero = new Undead('Hero5');
const ZombieHero = new Zombie('Hero6');

BowmanHero.levelUp();
SwordsmanHero.damage(10);

console.log(BowmanHero);
console.log(SwordsmanHero);
console.log(MagicianHero);
console.log(DaemonHero);
console.log(UndeadHero);
console.log(ZombieHero);
