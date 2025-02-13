// Methods of array

let array = ["Banana", "Orange", "Apple", "Mango", "Apple", 'strawberry']
let array2 = ['Turiyu', [[['Papaya']]]]
let arrOfNum = [3, 5, 65,6, 67, 45, 43]

const reducedValue = arrOfNum.reduce((acc, curr) => {
    console.log(acc, curr)
    return acc + curr
}, 0)

console.log(reducedValue);


// Basic methods
// document.write(array)
// console.log(array[2])
// console.log(array.join(' : '))
// console.log(array.pop())
// console.log(array.pop())
// console.log(array)
// console.log(array.push('Kiwi'))
// console.log(array.push('Guava'))
// console.log(array)
// console.log(array.shift())
// console.log(array)
// console.log(array.unshift('Watermelon'))
// console.log(array)
// // delete array[3]
// console.log(array.concat(array2, ['test'], ['testt', 'testset']))
// console.log(array.copyWithin(2, 1))
// console.log(array2.flat(3))
// console.log(array.splice(1, 2, 'Strawberry'));
// console.log(array.toSpliced(1, 2, 'Strawberry'));
// console.log(array.slice(1, 2))

// Search and find methods
// console.log(array.indexOf('Apple'))
// console.log(array.lastIndexOf('Apple'))
// console.log(array.includes('apple'))
const arrOfObj = [
    {        id: 1    },
    {        id: 3    },
    {        id: 4    },
    {        id: 2    },
]
// console.log(array.findLastIndex((element, index, array) => element === "Apple"));

// const data = arrOfObj.toSorted((a, b) => a.id - b.id)
// console.log(data, arrOfObj);

// let arr = []
// arrOfObj.forEach((el) => {
//     console.log(el);
//     arr.push(el.id)
// })
// console.log(arr);

const newArr = arrOfObj.map((el, i, array) => 'test')
// console.log('newArr(**', newArr);

// console.log(arrOfObj.filter((el, i , arr) => el.id == 5))

// console.log(arrOfNum.every((el, i, arr) => el > 3));
// console.log(arrOfNum.some((el, i, arr) => {
//     console.log(el);
//     return el > 50
// }));

