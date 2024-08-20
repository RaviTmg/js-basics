// All about Objects - just another datatype

//This is one way to define variables
const myName = "Ravi";
const myAge = 28;
const myProfession = "Software Engineer";

// This is an object
const aboutMe = {
    name: "Ravi",
    age: 28,
    myProfessions: ["Software Engineer", "Tutor"],
    hair: {
        color: "black and white and brown",
        straight: false,
    },
    isFree: (time) => {
        if (time > 10) {
            return true;
        } else {
            return false;
        }
    }
};

// accessing a value of a property
console.log(aboutMe.name); // returns Ravi
console.log(aboutMe.age); // returns 28
//accessing nested value
console.log(aboutMe.hair.color); //returns "black and white and brown"
//calling function
console.log(aboutMe.isFree(11)); // returns true

// Mutation
// aboutMe cannot be reassigned, but its properties can be
aboutMe.age = "30";
console.log(aboutMe.age);

// adding a new property
aboutMe.hobbies = [ "gaming" ];
console.log(aboutMe.hobbies);

// deleting a property
console.log(aboutMe.hair); // returns "black and white and brown"
delete aboutMe.hair;
console.log(aboutMe.hair); // returns undefined

// array of objects
const books = [
    {
        name: "kitaab",
        price: 1000
    },
    {
        name: "it ends with us",
        price: 200
    },
];
console.log(books[0]) // kitaab
console.log(books[1]) // "it ends with us"