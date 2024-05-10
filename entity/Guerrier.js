function createWarrior(type) {
    let container = document.getElementById('container');
    let warrior = document.createElement('div');
    warrior.classList.add('warrior');
    let newWarrior;

    switch(type) {
      case 'guerrier-de-base':
        newWarrior = new Guerrier();
        break;
      case 'nain':
        newWarrior = new Nain();
        break;
      case 'elfe':
        newWarrior = new Elfe();
        break;
      case 'chef-nain':
        newWarrior = new ChefNain();
        break;
      default:
        newWarrior = new Guerrier(); // Default to GuerrierDeBase if type is unknown
        break;
    }

    warrior.textContent = `${type} [PV=${newWarrior.PV}]`;
    container.appendChild(warrior);
  }
// Guerrier de base
class Guerrier{
  constructor() {
    this.force = 10;
    this.PV = 100;
  }

  // Méthode pour calculer les dégâts lors d'un combat
  calculerDegats() {
    let degats = 0;
    for (let i = 0; i < this.force; i++) {
      degats += Math.floor(Math.random() * 3) + 1; // Lancer un dé de 3 faces
    }
    return degats;
  }
}

// Nain
class Nain extends Guerrier {
  constructor() {
    super();
    this.PV = 100;
  }

  // Les nains subissent 2x moins de dégâts
  calculerDegats() {
    return Math.floor(super.calculerDegats() / 2);
  }
}

// Elfe
class Elfe extends Guerrier {
  constructor() {
    super();
    this.force *= 2; // Les elfes ont une force 2x supérieure
    this.PV = 100;
  }
}

// ChefNain
class ChefNain extends Nain {
  constructor() {
    super();
    this.PV = 100;
  }
}

// ChefElfe
class ChefElfe extends Elfe {
  constructor() {
    super();
    this.PV = 100;
  }
}

// Exemple d'utilisation
let nain = new Nain();
let elfe = new Elfe();

console.log("Nain tape sur Elfe");
let degatsNainSurElfe = nain.calculerDegats();
elfe.PV -= degatsNainSurElfe;
console.log(`Elfe subit ${degatsNainSurElfe} de dégâts et voit ses PV descendre à ${elfe.PV}`);

console.log("Elfe tape sur Nain");
let degatsElfeSurNain = elfe.calculerDegats();
nain.PV -= degatsElfeSurNain;
console.log(`Nain subit ${degatsElfeSurNain} de dégâts et voit ses PV descendre à ${nain.PV}`);
