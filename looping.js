// for loop
let array = [1, 4, 6, 4, 3, 3]
let sum = 0
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum += element
}
console.log(sum);

// while loop
let i = 0
while (i < array.length) {
    sum += array[i]
    i++
}
console.log(sum, '2');

// do while loop
let t = 0
do {
    sum += array[t]
    t++   
} while (t < array.length);
console.log(sum, '3');

// for in loop
let obj = {key: 'value', key2: 'value2'}
let arr = []
for (const key in obj) {
    console.log(key);
    arr.push(obj[key])
}
console.log('arr', arr);

// for of loop
for (const element of arr) {
    console.log('element**', element);
    
}