
let rand;
let count = 0;
do {
    rand = Math.floor(Math.random() * 6 + 1);
    count++;
    console.log("dice rolled", rand);
} while(rand !== 6);

console.log("it took", count, "times");
