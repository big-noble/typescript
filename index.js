var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
var person = {
    name: {
        first: 'Jack',
        last: 'last'
    },
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape', 1];
fruits.forEach(function (v) {
    console.log(v);
});
var book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.SHORT
};
coffee.size = CoffeeSize.GRANDE;
console.log(CoffeeSize.SHORT);
