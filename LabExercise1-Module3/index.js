console.log("" + 1 + 0) // 10 
console.log("" - 1 + 0) // -1 
onsole.log(true + false) // 1 
onsole.log(!true) // false 
console.log(6 / "3") // 2 
console.log("2" * "3") // 6 
console.log(4 + 5 + "px") // 9px 
console.log("$" + 4 + 5) // $45 
console.log("4" - 2) // 2 
console.log("4px" - 2) // NaN 
console.log(" -9 " + 5) // -9 5 
console.log(" -9 " - 5) // -14 
console.log(null + 1) // 1 
console.log(undefined + 1) // NaN 
console.log(undefined == null) // true 
console.log(undefined === null) // false 
console.log(" \t \n" - 2) // -2 

let three = "3" 
let four = "4" 
let thirty = "30" 
//what is the value of the following expressions? 
let addition = three + four; // 34 WRONG because + concatenates two strings let addition2 = Number(three) + Number(four); //fixed - converted strings to numbers let addition3 = parseInt(three) + parseInt(four); //fixed – converted strings to ints let multiplication = three * four; // 12 RIGHT because * converts strings to numbers let division = three / four; // 0.75 RIGHT because / converts strings to numbers let subtraction = three - four; // -1 RIGHT because - converts strings to numbers 
let lessThan1 = three < four; // true RIGHT because 3 comes before 4 alphabetically let lessThan2 = thirty < four; //true WRONG because 30 comes before 4 alphabetically let lessThan2_fixed = Number(thirty) < Number(four); //fixed - converted strings to  numbers 
let lessThan2_fixed2 = parseInt(thirty) < parseInt(four); //fixed - converted strings  to ints

if (0) console.log('#1 zero is true') //zero equivalent to false, doesn't print 
if ("0") console.log('#2 zero is true') //strings equivalent to true, prints 
if (null) console.log('null is true') //null equivalent to false, doesn't print 
if (-1) console.log('negative is true') //non-zero number equivalent to true, prints 
if (1) console.log('positive is true') //non-zero number equivalent to true, prints 

let a = 6, b = 8; 
let result = `${a} + ${b} is `; 
result += (a + b < 10) ? 'less than 10' : 'greater than 10'; 
//+= adds on to the existing value 
console.log(result)

function getGreeting(name) {
    return 'Hello ' + name + '!';
    }
const getGreetingA = function(name) {return 'Hello ' +name+ '!'};
const getGreetingB = (name) => 'hello ' + name+ '!';

console.log(getGreeting('Jonathan Alleman'))
console.log(getGreetingA('Jonathan Alleman') )
console.log(getGreetingB('Jonathan Alleman'))


const westley = {
    name: 'Westley',
    numFingers: 5
    }
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya'
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) => person.numFingers == 6 ? 
    "You Killed my father. Prepare to die" : "Nice to meet you.;
    
    }
    inigo.greeting(westley)
    inigo.greeting(rugen)

const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;

    },
    threePointer() {
        this.score += 3;
        return this;

    },
    halfTime() {
        console.log('Halftime score is '+this.score' ('this.fouls+' fouls'));
        return this;

    }
    }
    fullTime()
        console.log('Final score is '+this.score+' ('+this.fouls+' fouls).')
    //modify each of the above object methods to enable function chaining as below:
    basketballGame.basket().fouls().freeThrow().freeThrow().basket().threePointer().halfTime().basket().basket().foul().threePointer().fullTime();


const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

const melbourne = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'

}

function printCityProps(cityObj) {
    for(cityProp in cityObj){
        console.log(cityProp + ' = ' + cityObj[cityProp])
    }
}
printCityProps(sydney)

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = teamSports;
moreSports.push('Soccer', 'Tennis')
moreSports.unshift('Football')

let dog1 = 'Bingo';
let dog2 = dog1.replace('Bingo','Spot');


let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = cat1
let cat2.name = 'Steve'


console.log(moreSports)
console.log(dog2)
console.log(cat2)

console.log(dog1)
console.log(teamSports)
console.log(cat1)

let moreSports2 = {...teamSports}
moreSports2.push('Netball')
console.log(teamSports)

let cat3= {...cat1}
cat3.name= 'Hump'
console.log(cat1)


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive= () => this.age >=16

}

let person1 = new Person('John', 30)
let person2 = new Person('Jane', 24)

class PersonClass{
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true
    }
    canDrive(){
        return this.age >= 16;
    }
}
let person3 = new Person('James', 14)
console.log(person1)
console.log(person2)
console.log(person3)


if (person1.canDrive()) console.log(person1.name + ' is ' +person1.age+' and is old enough to drive')
if (person2.canDrive()) console.log(person2.name + ' is ' +person2.age+' and is old enough to drive')
if (person3.canDrive()) console.log(person3.name + ' is ' +person3.age+' and is old enough to drive')