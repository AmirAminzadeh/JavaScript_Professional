var markMass = 78; 
var johnMass = 1.69;
var markHeight = 92;
var johnHeight = 1.95;

var markBMI = markMass / (markHeight ^ 2);
var johnBMI = johnMass / (johnHeight ^ 2);

var compare = markBMI > johnBMI;
console.log(markBMI, johnBMI);

console.log('Is Mark\'s BMI higher than John\'s?' + compare);