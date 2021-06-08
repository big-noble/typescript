let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;

const person = {
    name: {
        first: 'Jack',
        last: 'last',
    },
    age: 21
}
const fruits = ['Apple', 'Banana', 'Grape', 1]
fruits.forEach(v => {
    console.log(v)
})

const book: [string, number, boolean] = ['business', 1500, false]

enum CoffeeSize {
    SHORT,
    TALL,
    GRANDE,
    VENTI
}

const coffee = {
    hot: true,
    size: CoffeeSize.SHORT
}

coffee.size = CoffeeSize.GRANDE

console.log(CoffeeSize.SHORT);