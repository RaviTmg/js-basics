let num1 = 0;
let num2 = 1;
let nextTerm;
let count = 0;
console.log(num1);
console.log(num2);
while (count < 10) {
    nextTerm = num1 + num2;
    num1 = num2
    num2 = nextTerm;
    console.log(nextTerm)
    count++;
}
