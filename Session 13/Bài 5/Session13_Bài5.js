let arr = [23,12,45,543,3,44,52,2,45,7,243,65,74,5,23,9,6,64,3442,423]
let sumOdd= 0;
let sumEven= 0;

for (let i = 0; i < arr.length ; i++){
    if (arr[i] % 2 === 0 ){
        sumOdd += arr[i];
    } else {
        sumEven += arr[i];
    }
    
}console.log(sumOdd);
console.log(sumEven);