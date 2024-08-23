const man = {
    scientificName: "homo sapiens",
    canRun: function (hasLegs) {
        if (hasLegs) return true;
        else return false;
    }
}

const lizard = {
    scientificName: "Lorem Ipsum",
    canRun: function (hasLegs) {
        if (hasLegs) return true;
        else return false;
    }
}

class Animal {
    constructor (scientificName, limbs) {
        this.scientificName = scientificName;
        this.limbs = limbs;
    }

    canRun () {
        if (this.limbs > 0) return true;
        else return false;    
    }
}

const man2 = new Animal("homop sapiebns", 4);
console.log(man2.canRun()) // true
console.log(man2.scientificName); //homo sapiens

const fish = new Animal("Pisces", 0);
console.log(fish.canRun()); //false