//solution 1
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
    } else if (i % 3 == 0) {
        console.log("fizz")
    } else if (i % 5 == 0) {
        console.log("buzz")
    } else {
        console.log(i);
    }
}

//solution 2
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
        continue;
    }
    if (i % 3 == 0) {
        console.log("fizz")
        continue
    }
    if (i % 5 == 0) {
        console.log("buzz")
        continue
    }
    console.log(i);
}
