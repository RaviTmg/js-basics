
const givenString = "MyNameIsLakhhan";
let reverseString = "";
for (let i = givenString.length - 1; i>=0 ; i--) {
    reverseString = reverseString + givenString[i];
}
console.log(reverseString);