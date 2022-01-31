// equilateral eşkenar
// isosceles   ikizkenar ve eşkenar
// scalene     farklı kenarlar
// x+y=z ise degenerate triangle

const checkTriangle = (a, b, c) => {
    if(a !== 0  && b !== 0 && c !== 0 ){
        if (a+b>c && b+c>a && c+a>b) {
            if (a === b && b === c) {
                console.log("Equilateral");
            } else if (a === b || b === c || a === b) {
                console.log("Isosceles");
            } else {
                console.log("Scalene");
            }
        } else {
            console.log("Sum of any two sides must be bigger than other one");
        }
    } else {
        console.log("Do not use 0");
    }
};

console.time("uzun")
checkTriangle(5,10,12)
console.timeEnd("uzun")

// function getTriangleType(a,b,c) {
//     return (a === b && b === c) && 'equilateral' ||
//     (a === b || a === c || b === c) && 'isosceles' ||
//     'scalene';
// }

// console.time("kısa")
// console.log(getTriangleType(5,10,12));
// console.timeEnd("kısa")

const triangleCheck = (a, b, c) => {
    return ( a === b && b === c) && "Equilateral" || ( a === b || b === c || a === c) && "Isosceles" || "Scalene"
}
console.log(triangleCheck(5,4,3));