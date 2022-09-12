const isAboveTheThreshold = (currentValue) => currentValue > 30;

const array1 = [5, 15, 25, 41, 48, 60];

console.log(array1.every(isAboveTheThreshold));