function makeCounter(){
    let currentCount = 0;

    return function(){
        currentCount++;
        console.log(currentCount)
        return currentCount;
    };
}

let counter1 = makeCounter();
let counter2 = makeCounter()

counter1();
counter1();
counter2();
counter2();

function makeCounterB(startFrom){
    let currentCount=startFrom;

    return function(){
        currentCount++;
        console.log (currentCount)
        return currentCount;
    };
}

let counter3 = makeCounterB(5)

counter3();
counter3();
counter3();

function makeCounterC(startFrom,incrementBy){
    let currentCount=startFrom;
    return function(){
        currentCount+= incrementBy;
        console.log(currentCount)
        return currentCount
    };
}

let counter4 = makeCounterC(10,5)

counter4();
counter4();
counter4();

//Number 2
//test prints 4, 3,2,1 because delayMsg doesn't us setTimeout and runs first, then the others according to their delays

const delayMsg = (msg) => console.log(`This message will be printed after a delay: ${msg}`);

setTimeout(delayMsg, 100, '#1; Delayed by 100ms');
setTimeout(delayMsg, 20, '#2; Delayed by 20ms');
setTimeout(delayMsg, 0, '#3; Delayed by 0ms');
delayMsg('#4: Not delayed at all');
let fifthTimerRef = setTimeout(delayMsg,10 * 1000, '#5:Longest Delay')
clearTimeout(fifthTimerRef)


function printMe(){
    console.log ('printing debounced message')
}

printMe=debounce(printMe);

setTimeout(printMe,100);
setTimeout(printMe,200);
setTimeout(printMe,300);

function debounce(func){
    let timeout;
    return function(){
        clearTimeout(timeout);
        timeout= setTimeout(func, 1000);
    };
}
function debounceB(func, ms){
    let timeout;
    return function(){
        clearTimeout (timeout);
        timeout = setTimeout(func,ms);
    };
}
function printMe(msg){
    console.log(`printing debounced message c: ${msg}`)
}
printMeC = debounceC(printMeC, 1200)

setTimeout(printMeC, 100, 'msg #1');
setTimeout(printMeC, 200, 'msg #2');
setTimeout(printMeC, 300, 'msg #3');

function debounceC(func, ms) {
    let timeout;
    return function(msg){
        clearTimeout(timeout);
        timeout = setTimeout(func, ms, msg);
    };
}


function printFibonacci(){
    let first = 1;
    let second = 1;

    console.log(first)
    console.log(second)

    setInterval(function printNext(){
        let next = first + second;
        console.log(next)
        first = second;
        second= next;
    },1000)
}
function printFibonacciTimeouts(){
    let [first, second] = [1,1]
    console.log(first)
    console.log(second)

    setTimeout(function printNext(first, second){
        let next = first+second;
        console.log(next);
        setTimeout(printNext, 1000, second, next);
    },1000, first, second);
}

function printFibonacciLimit(limit) {
    let first = 1;
    let second = 1;
    console.log(first)
    console.log(second)

    let counter = 2;

    let intervalRef= setInterval(function printNext(){
        let next = first + second;
        console.log(next)

        first = second;
        second = next;
        counter++;

        if(counter == limit) clearInterval(intervalRef)
    },1000)


}


let car = {
    make: "Porsche"
    model: '911',
    year: 1964,
    description(){
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

car.description();

setTimeout(()=> car.description(), 200);
car = {...car, year: 2015}
let describeCar = car.description.bind(car);
setTimeout(describeCar,400);
car = {...car, year:2020}