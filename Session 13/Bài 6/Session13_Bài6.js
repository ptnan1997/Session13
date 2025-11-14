let arr = [23,12,45,53,3,44,52,2,45,7,43,65,74,5,23,45,9,6,45,64,42,23]
let k = Number(prompt("Nhập vào một số nguyên:"));
let occur = 0;
console.log (k)
for (let i = 0 ; i< arr.length; i++){
    if (arr[i] === k){
        occur = occur + 1;
    } 
    
}console.log (`Số lần lặp lại của ${k} trong dãy số là ${occur} `);