let cl = console.log;

let arr = [20, 30, 40, 50, 60, 70, 80, 90]

// let doubleArr = [];

// for (let i = 0; i < arr.length; i++){
//     //cl(arr[i] * 2);
//     doubleArr.push(arr[i] * 2)
// }

// arr.forEach(function(array){
//     doubleArr.push(array * 2)
// })

// arr.forEach((array) => {
//     doubleArr.push(array * 2)
// })

// arr.forEach(array => doubleArr.push(array * 2))
// cl(doubleArr);

// Map
// let doubleArr = arr.map(function(array){
//     return array * 2
// })

// let doubleArr = arr.map((array) => {
//     return array * 2
// })

let doubleArr = arr.map(array => array * 2)
cl(doubleArr);



//sqrt

let sqrtArray = []

// for(let i = 0; i < arr.length; i++){
//     sqrtArray.push(Math.sqrt(arr[i]))
// }

// arr.forEach(function(array){
//     sqrtArray.push(Math.sqrt(array))
// })

// arr.forEach((array) => {
//     sqrtArray.push(Math.sqrt(array))
// })


// arr.forEach(array => sqrtArray.push(Math.sqrt(array)))

// sqrtArray = arr.map(function(array){
//     return Math.sqrt(array)
// })

sqrtArray = arr.map(array => Math.sqrt(array))
cl(sqrtArray)



// 2

let numArray = [15, 25, 35, 45, 55, 65, 75, 85, 95]

let doubleNum = []

// for(let i = 0; i < numArray.length; i++){
//     doubleNum.push(numArray[i] * 2)
// }

// numArray.forEach(function(num){
//     doubleNum.push(num * 2)
// })

// numArray.forEach(num => doubleNum.push(num * 2))

// doubleNum = numArray.map(function(num){
//     return num * 2
// })

doubleNum = numArray.map(num => num * 2)
cl(doubleNum)

//sqrt

sqrtNum = []

// for(let i = 0; i < numArray.length; i++){
//     sqrtNum.push(Math.sqrt(numArray[i]))
// }

// numArray.forEach(function(num){
//     sqrtNum.push(Math.sqrt(num))
// })

// numArray.forEach(num => sqrtNum.push(Math.sqrt(num)))

// sqrtNum = numArray.map(function(num){
//     return Math.sqrt(num)
// })

sqrtNum = numArray.map(num => Math.sqrt(num))
cl(sqrtNum)



// 3

ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

agesArray = []

// for(let i = 0; i < ages.length; i++){
//     agesArray.push(ages[i] * 2)
// }

// ages.forEach(function(age) {
//     agesArray.push(age * 2)
// });

// ages.forEach(age => agesArray.push(age * 2))

// agesArray = ages.map(function(age){
//     return age * 2
// })

agesArray = ages.map(age => age * 2)
cl(agesArray)


// sqrt

sqrtAges = []

// for (let i = 0; i < agesArray.length; i++){
//     sqrtAges.push(Math.sqrt(ages[i] * 2))
// }

// ages.forEach(function(age){
//     sqrtAges.push(Math.sqrt(age))
// });

// ages.forEach(age => sqrtAges.push(Math.sqrt(age)))

sqrtAges = ages.map(age => Math.sqrt(age))
cl(sqrtAges)



// 4

date = [13, 25, 47, 78, 94, 88, 35, 20, 50]

dateArray = []

// for(let i = 0; i < date.length; i++){
//     dateArray.push(date[i] * 2)
// }

// date.forEach(function(da){
//     dateArray.push(da *2)
// });

// date.forEach(da => dateArray.push(da * 2));

dateArray = date.map(da => da * 2)
cl(dateArray)

// sqrt

sqrtDate = []

// for(let i = 0; i < date.length; i++){
//     sqrtDate.push(Math.sqrt(date[i] * 2))
// }

// date.forEach(function(da){
//     sqrtDate.push(Math.sqrt(da))
// });

// date.forEach(da => sqrtDate.push(Math.sqrt(da)));

// sqrtDate = date.map(function(da){
//     return Math.sqrt(da)
// })

sqrtDate = date.map(da => Math.sqrt(da))
cl(sqrtDate);

