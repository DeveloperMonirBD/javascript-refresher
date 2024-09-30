// ** Part-01-lexical scoping:
// // var lang = "Javascript"
// var lang = "bangla";

// function learn(topic) {
//     // var lang = topic;
//     lang = topic;
//     console.log(`I am learning ${topic}`);
// }

// learn("Javascript");

// console.log(`I know ${lang}`);

// ** part-02-function:
// ** regular function:
// function hello() {
//     console.log(("Hello world"))
//     // return undefined;
// }

// let msg = hello();
// console.log(msg)

// ** function expression:
// const hello = function () {
//     console.log("Hello World");
// }

// ** named function expression:
// const hello = function hello() {
//     console.log("Hello world")
// }

// ** arrow function:
// const hello = () => {
//     console.log("hello world")
// }

// ** arrow function 1 line:
// const hello = () => console.log("hello world");

// ** arrow function 1 line:
// const hello = (a, b) => a + b;

// ** arrow function multi-line:
// const hello = (a, b) => {
//     return {
//         a: 5,
//         b: 6
//     }
// }
// console.log(hello())

// ** anonymous function:
// function hello() {
//     return () => {
//         console.log("Hello World");
//     }
// }

// ** event handler:
// function hello() {
//     alert("Hello world")
// }

// ** select button with dom:
// document.getElementById("clickHandler").addEventListener('click', hello);

// ** Primitive vs Reference value:
// ** Primitives: string, number, boolean, null, undefine, '', nan
// ** Reference: array, object.

// ** Primitives:
// let x = 5;
// let y = 6;
// x = y
//  y = 7
// console.log(x)
// console.log(y)

// ** Reference:

// let a = ["Js", "Python"];
// let b = ["Html", "CSS"];
// b = a;
// a.push("Go");
// b.push("React")
// console.log(b);
// console.log(a);

// ** array methods :
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// ** find: 1st 1ta value return korea.  main array k change korea na.
// const result = fruits.find((f) => f === "Orange" || f === "Mango");
// console.log(result)

// ** findIndex: array element ar index return korea.
// const result = fruits.findIndex((f) => f === "Orange");
// console.log(result)

// ** filter: Multipal value return korea.  main array k change korea na.
// const result = fruits.filter((f) => f === "Orange" || f === "Mango");
// console.log(result)
// console.log(fruits)

// ** slice: specific value return korea. main array k change korea na.
// const result = fruits.slice(start, end);
// const result = fruits.slice(2, 4);
// console.log(result);
// console.log(fruits);

// ** splice: kono akta  specific jaiga thakea value remove korea return korea dai. Tobea, main array tea notun value add korea & main array k change korea dai.
// const result = fruits.splice(start index, number of remove items, add items);
// const result = fruits.splice(3, 2, "coconut");
// console.log(result);
// console.log(fruits);

// ** concat: new array ar last a items gula add kore dai. main array k change korea na.
// const result = fruits.concat(["Fruits 1", "Fruits 2"]);
// console.log(result);
// console.log(fruits);

// ** push: new array ar last a add korea but return korea array ar length. main array k change korea dai.
// const result = fruits.push("Fruits 1", "Fruits 2");
// console.log(result);
// console.log(fruits);

// ** map: main array k change korea na.
// const result = fruits.map((f) => {
//     if (f === "Apple") {
//         return "Apple";
//     } else {
//         return "N/A"
//     }
// })
// console.log(result);
// console.log(fruits);

// ** map: main array k change korea na.
// const result = fruits.map((f) => {
//     const result = fruits.map((f) => `${f} - `)
//     return result
// })
// console.log(result);
// console.log(fruits);

// ** for loop:
// const res = [];
// for (let i = 0; i <= fruits.length; i++) {
//     if (fruits[i] === "Apple") {
//         res.push("Apple");
//     } else {
//         res.push("N/A")
//     }
// }

// console.log(res);
// console.log(result)

// ** reduce: pura array k operation korea akta single value tea anea return korea. main array k change korea na.
// const numbers = [1, 2, 3, 5, 7, 9]
// const result = numbers.reduce((total, current) => {
//     return total + current;
// }, 0)
// console.log(result)

// ** reduce short-cut: pura array k operation korea akta single value tea anea return korea. main array k change korea na.
// const numbers = [1, 2, 3, 5, 7, 9];
// const result = numbers.reduce((total, current) => total + current, 0);
// console.log(result);
// console.log(numbers);

// ** forEach : kono value return korea na.

// const numbers = [1, 2, 3, 5, 7, 9];

// numbers.forEach(myFunction);
// function myFunction(x) {
//     console.log(x)
// }

// ** forEach short-cut :
// numbers.forEach((n) => console.log(n))

// ** forEach another way : kono value return korea na.
// **squire value using forEach:
// const numbers = [1, 2, 3, 5, 7, 9];

// const squareNumbers = [];
// numbers.forEach(function (x) {
//     squareNumbers.push(x * x)
// })
// console.log(squareNumbers)

// ** forEach add 5:
// const numbers = [1, 2, 3, 5, 7, 9];
// numbers.forEach(function (x, index, arr) { // {value of item, index, array}
//     arr[index] = x + 5
// })
//     console.log(numbers)

// ** for of : []
// const numbers = [1, 2, 3, 5, 7, 9];
// for (num of numbers) {
//     console.log(num)
// }

// ** for of : []
// const name = "Monir";
// for (c of name) {
//     console.log(c)
// }

// ** for in : {}
// const language = {
//     name: "Javascript",
//     year: 1995,
//     creator: "Brendan Eich"
// }
// //key:
// for (key in language) {
//     console.log(key)
// }
// //value:
// for (value in language) {
//     console.log(language[value])
// }

// ** Object
// const a = "popularity";

// const language = {
//     name: "Javascript",
//     year: 1995,
//     creator: "Brendan Eich"
// }

// // console.log(Object.keys(language))
// // console.log(Object.values(language))
// // console.log(Object.entries(language))

// // language.popularity = "100%";
// language[a] = "100%"
// console.log(language)

// ** Array rest Operator :
// const fruits2 = ["banana", "Orange"];
// const result = [...fruits2];
// console.log(result)

// ** Object rest Operator :
//  const language = {
//     name: "Javascript",
//     year: 1995,
//     creator: "Brendan Eich"
// }

// const result = {
//     ...language
// }
// console.log(result)

// ** rest operator
// function sum(...rest) {
//     return rest.reduce((sum, cur) => sum + cur, 0);
// }
// console.log(sum(5, 6, 78, 36));

// ** another rest operator
// function sum(text, ...rest) {
//     const result = rest.reduce((sum, cur) => sum + cur, 0);
//     console.log(`${text} ${result}`);
// }
// sum("The sum is : ", 5, 6, 78, 36);

// ** truthy value : falsy bade r sob truthy
// ** falsy value : false, 0, undefined, null, '', NaN
// const result = NaN;

// if (result) {
//     //true
// } else {
//     //false
// }

// ** ternary operator

const a = 6;

// let result;
// if (a % 2 === 0) {
//     result = "Even"
// } else {
//     result = "Odd"
// }
// console.log(result)

// ternary:
// console.log(a % 2 === 0 ? "Even" : "Odd");

// ** destructuring
// const user = {
//     id: 339,
//     name: "Monir",
//     age: 26,
//     education: {
//         degree: "MBA",
//         college: {
//             clName: "MM College, Jashore.",
//         },
//     },
// };

// const {
//     name,
//     age,
//     education: { degree } = {},
//     education: { college: { clName } } = {}, // default value
// } = user;

// console.log(name, age, degree, clName);

// //  ** another way :
// // const {
// //     education: { degree } = {},
// //     education: { college: name } = {}// default value
// // } = user;
// // console.log(degree, name);

// ** optional chaining : without destructuring

// const user = {
//     id: 339,
//     name: "Monir",
//     age: 26,
//     education: {
//         degree: "MBA",
//         college: {
//             clName: "MM College, Jashore.",
//         },
//     },
// };

// const result = user?.education?.college?.clName;
// console.log(result)

// ** nullish coalescing operator : null r undefine holo nullish. nullish mane null er moto. coalescing manea acotrito kora. ja null abong undefine k acotrito koreasea take nullish coalescing operator bole.

// let lang = null;
// // let lang = 7;
// // ** left side jode null or undefine hoi tahole right side return korea. na hole left side return korea.
// console.log(lang ?? "Javascript");

//  ** logical and, or operator: &&, ||, ?? ai 3ta k short circuit condition bole.
// // let lang = false;
// // let lang = true;
// let lang = "Python";
// // logical && : left side truthy hole return korbe left side,,, r right side truthy hole return korbe right side.
// console.log(lang || "Javascript");

// // logical || : left side truthy hole return korbe right side.
// console.log(lang && "Javascript")

// ** asynchronous js : axios r akhon baboher kora hoi na. so amra fetch api baboher korbo. async function aloways promice return korea.

// ** fetch Api:
async function getData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

// ai functio sob kaj karber ses korea akta promice return korea dai..
function bigWork() {
    // oneak kaj korchi
    return getData();
}

// jode data ta pate sai tahole a vabe return korte hobe : ja function promice return korea takei amra await korte parbo. a jonno ai function ta k await korea data nite hobe
(async function () {
    const result = await bigWork();
})();

console.log("need to use the response");
