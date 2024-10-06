let score = null
console.log(score, typeof score);

let valInNumber = Number(score)
console.log(valInNumber, typeof valInNumber);

// "33" => 33
// "33abc" => NaN (NaN is of type number)
// null => 0
// undefined => undefined
// "jassi" => NaN
// True => 1; False => 0

let bool = 33
console.log(bool, typeof bool)

let boolean = Boolean(bool)
console.log(boolean, typeof boolean)

// 1 => True; 0 => False
// "" => False
// "Jassi" => True