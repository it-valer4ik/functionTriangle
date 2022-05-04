
const triangle = function (a = 2, b = 2, c = 2) {
    if (a === b && b === c && a === c) {
        return result = 'triangle sides are equal';
    }
    return result = 'not triangle sides are equal';
}
console.log(triangle())


//c ** 2=a ** 2 + b ** 2;
const triangle2 = function (a = 2, b = 2, c = 2) {
    if (c ** 2 === a ** 2 + b ** 2) {
        return result = 'not rectangular triangle';
    }
    return result = 'rectangular triangle';
}
console.log(triangle2())

//a+ c = b+ c

const triangle3 = function (a = 2, b = 2, c = 2) {
    if (a + c === b + c) {
        return result = 'not isosceles triangle';
    }
    return result = 'isosceles triangle';
}
console.log(triangle3())
