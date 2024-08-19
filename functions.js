let a = "100";
b = Number(a);
c = Boolean(a)
console.log(typeof a);
console.log(typeof b);
console.log(c);
console.log(typeof c);

// Functions

function add(x, y) {
    return x + y;
}


const subtract = (x, y) => {
    return x - y;
}

const divide = (x, y) => x / y;

const addOne = x => x + 1;

const e = add(1, 1);
const f = add(1, 2);
console.log(e);
console.log(f);

const g = subtract(5,1);
console.log(g);

const h = divide(4,2);
console.log(h);

const i = addOne(2);
console.log(i);

//Default values 
const addValue = (a, b = 10) => {
    return a + b;
}

console.log(addValue("20")) // Prints 20
console.log(addValue(10, 20)) // prints 30

console.log(addValue("20", undefined)); // Prints 2010 
console.log(addValue("20", null)) // Prints 20null

// ... rest operator
const printArgs = (...arguments) => {
    console.log(arguments);
}
printArgs("Hi");
printArgs("hi", "bonjour");
printArgs("hi", "bonjour", 1, 1.5, null, undefined, true);

