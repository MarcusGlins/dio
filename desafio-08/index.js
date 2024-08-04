class hero {
  constructor(name, age, heroClass) {
    this.name = name;
    this.age = age;
    this.heroClass = heroClass;
    this.attackType = '';
  }

  getAttackType(heroClass) {
    switch (heroClass) {
      case 'mago':
        this.attackType = 'magia';
        break;
      case 'guerreiro':
        this.attackType = 'espada';
        break;
      case 'monge':
        this.attackType = 'artes marciais';
        break;
      default:
        this.attackType = 'shuriken';
        break;
    }
  }

  attack() {
    this.getAttackType(this.heroClass);
    console.log(`O ${this.heroClass} atacou usando ${this.attackType}.`);
  }
}
// TESTE DE TODAS AS POSSIBILIDADES
// const heroi = new hero('Mark', 33, 'mago'.toLowerCase());
// const heroi = new hero('Mark', 33, 'guerreiro'.toLowerCase());
// const heroi = new hero('Mark', 33, 'monge'.toLowerCase());
const heroi = new hero('Mark', 33, 'ninja'.toLowerCase());

heroi.attack();