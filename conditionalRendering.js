let color = 'green'
let size = 'l'
// if.. else if... else
if (color === 'red') {
    console.log('color is red');
} else if (color === 'blue' && size === 'l') {
    console.log('color is blue');
} else if (color === 'black') {
    console.log('color is black');
} else {
    console.log('color is pink');
}

// switch case
switch(color) {
    case 'red':
        console.log('color is red');
    break;
    case 'blue':
        console.log('color is blue');
    break;
    case 'green':
        console.log('color is green');
    break;
    default:
        console.log('color is pink');
    break
}

// ternary operator
const condition = color === 'red' ? 'red' : 'pink'