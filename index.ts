//1

var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
// Answer: mystring has been assigned a type of string. To fix it you can change 9 to a string of 9 such as "9"    or assign a type of any to myString
myString = 9;

//2
function sayHello(name: string) { // change name: number
    return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
// Answer: name is set to string and 9 is a number.
console.log(sayHello(9));

function fullName(firstName: string, lastName: string, middleName?: string) {
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;

}

//3
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
// Answer: Mark middle name as optional as lastName?: string
console.log(fullName("Jimbo", "Jones"));


//4
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student) {
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4 // changer belt to belts
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
// Answer error in jay belt should be belts. 
console.log(graduate(jay));


//5
class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string) {
        this.fullName = `${firstName} ${lastName}`;
    }
    debug() {
        console.log("Console.log() is my friend.")
    }
}
// This is not making an instance of Ninja, for some reason:
// Answer: missing new keyword. also expecting 2 string arguments
const shane = new Ninja("Alan", "Turing");
// Since I'm having trouble making an instance of Ninja, I decided to do this:
// const turing = new Ninja {
//     fullName: "Alan Turing",
//     firstName: "Alan",
//     lastName: "Turing"
// }

const turing = new Ninja("Alen", "Turing")

// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja) {
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
// Answer: missing debug? 
// turing is not a Ninja instance?
console.log(study(turing));

// 6 
var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = (x:number) => { x * x };
// This is not showing me what I want:
// answer: missing type for parameters
console.log(square(4));

// This is not working:
// answer: missing type for parameters
var multiply = (x:number, y:number) => x * y;

// Nor is this working:
// Missing brackets from arrow function
var math = (x:number, y:number) => { 
    let sum =  x + y
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
};


//7
class Elephant {
    age : number
    constructor(age: number) { 
        this.age;
    }
    birthday = function () {
        this.age++;
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function () {
    console.log(`Babar's age is ${babar.age}.`)
}, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
// age is not initialized or declared in constructor ?