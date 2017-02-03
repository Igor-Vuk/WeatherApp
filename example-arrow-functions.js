var names = ["Igor", "Zrinka", "Hrvoje"];

// names.forEach(function(name) {
//     console.log(name);
// });

// names.forEach((name) => {
//     console.log(name);
// });

// names.forEach((name)=> console.log(name));


// var returnMe = function(name) {
//     console.log(name)
// }

// returnMe("Igor")


// var returnMe = (name) => console.log(name);
// returnMe("Igor");

// var person = {
//     name: "Igor",
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + " says hi to " + name)
//         })
//     }
// }

// person.greet();


function add(a, b) {
    return a + b;
}

var addStatement = (num1, num2) => {
    return num1 + num2
}

var addExpression = (num3, num4) => num3 + num4

console.log (addStatement(1,3));
console.log (addExpression(3,-2));