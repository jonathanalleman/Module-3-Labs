// const n = 1.23456
// console.log(n.toFixed(2))
// console.log(n.toPrecision(10))

// const hello = "hello world"
// console.log(hello.toUpperCase())
// console.log(hello.endsWith('world'))

// const user = {
//     name: 'John',
//     toString() {
//         return this.name
//     }
// }

// console.log ('User: ' + user);


// const apple = {
//     name: 'Apple' ,
//     category: 'Granny Smith',
//     price: 1.2,
//     valueOf() {
//         return this.price;
//     }
// }

// console.log (apple * 2)

// const billion1 = 1000000000
// const billion2 = 1_000_000_000
// const billion3 = 1e9

// console.log(billion1 === billion2)
// console.log(billion2 === billion3)

// const microSecs1 = 0.000001
// const microSecs2 = 0.000_001
// const microSecs3 = 1.e-6

// console.log(microSecs1 === microSecs2)
// console.log(microSecs2 === microSecs3)

// const r = 0xff;
// const g = 0xff;
// const b = 0xff;

// const white = `rgb(${r}, ${g}, ${b})`
// console.log(white)

// const arr1= new Array (1,2,3);
// const arr2= [1, 2, 3];
// console.log(arr1)
// console.log(arr2)

// const fruits = ["Apple","Orange","Pear"]
// const lastFruit = fruits.pop()
// // console.log(lastFruit)
// // console.log(fruits)

// fruits.push('banana')
// console.log(fruits)

// const firstFruit = fruits.shift()
// console.log(firstFruit)
// console.log(fruits)

// fruits.unshift('banana')
// console.log(fruits)

// const fruits1 = ['Apple','Orange','Pear']
// const fruits2 = fruits1

// fruits1.push('Banana')
// console.log(fruits2)


// console.log('fruit at index 0: '+fruits1[0])
// console.log('fruit at index 1: '+fruits1[1])

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// console.log(matrix[2][1])


// const numbers = [1, 2, 3]
// const strings = ['one', 'two', 'three']
// const empty = []

// console.log('Numbers: ' + numbers)
// console.log('Strings: ' + strings)
// console.log('empty: ' + empty)


// const spliceArray = ['I', 'study', 'Javascript', 'right', 'now']
// const removed = spliceArray.splice(0, 3, "Let's", "dance")
// console.log(removed)
// console.log(spliceArray)

// const now = new Date()

// console.log (now)
// console.log ( +now )


// const epoch = new Date (0)
// const jan2_1970 = new Date (1000 * 60 * 60 * 24)
// console.log(epoch)
// console.log (jan2_1970)

const christmas = new Date('2023-12-25')
// console.log(christmas)

// const nyeUTC = new Date('2024-12-31 23:59:59+00:00')
// console.log(nyeUTC)

// const boxingDay = new Date(2024, 11, 26)
// console.log(boxingDay)

// const remembranceDay = new Date(2024, 10, 11, 11, 11)
// console.log(remembranceDay)

// console.log(remembranceDay.getFullYear())
// console.log(remembranceDay.getMonth())
// console.log(remembranceDay.getMinutes())
// console.log(remembranceDay.getHours())
// console.log(remembranceDay.getDay())
// console.log(remembranceDay.getTime())
// console.log(remembranceDay.getTimezoneOffset())

// console.log(christmas.toLocaleDateString())
// console.log(christmas.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul'}))

// const student = {
//     name: 'Sita',
//     age: 28,
//     courses: ['HTML', 'CSS', 'JS'],
//     occupation: null
// }
// console.log(JSON.stringify(student))

const book = {
    title: "Gone With the Wind",
    printTitle(){
        console.log(this.title)
    },
    releaseDate: undefined
}

console.log(JSON.stringify(book))