// 'this' is a keyword used to reference the object that is executing the current function.
// Example. If you have a function that is attached to an object, 'this' is going to reference that object itself.

// function test() {
//     console.log(this);
// }
// test();

// Another Example:

// const user = {
//     firstName: "Patrick",
//     lastName: "Scott",
//     fullName: function() {
//         console.log(this.firstName + " " + this.lastName);
//     }
// }

// user.fullName();

// Arrow functions and the 'this' keyword: arrow functions don't have their own 'this' keyword. An arrow function will inherit the 'this' scope of the nearest surrounding regular function. In order to make an arrow function work with a 'this' scope in the example above:

//     const user = {
//         firstName: "Patrick",
//         lastName: "Scott",
//         fullName: function() {
//             const arrowFunction = () => {
//                 console.log(this);
//                 console.log(this.firstName + " " + this.lastName);
//         }
//         arrowFunction();
//     }
// }
//     user.fullName();

// const user = {
//     firstName: "Patrick",
//     lastName: "Scott",
//     hobbies: ["programming", "piano"],
//     listHobbies: function() {

//         this.hobbies.forEach(function(hobby) {
//             console.log(this.firstName) // the forEach function is not attached to the user, so it can't pull the firstName. It's being pulled from the global scope.
//             console.log(hobby)
//         }, this); // forEach can take in a 2nd parameter after the callback function & this parameter can represent some object that you want to use as the 'this' reference.
//     }
// }

// user.listHobbies();

// It's important to note that not all methods are going to allow you to pass in your own 'this' reference. forEach is one of the few that does.

// How the 'this' keyword works with constructor functions

// function User(name) {
//     this.name = name;
//     console.log(this);
// }

// const devsage = new User("DevSage"); // Whenever you create a new object using the 'new' keyword, the 'this' keyword is going to reference that new object that was created.
// const codingphase = new User("CodingPhase");