let randomNumber = prompt("Hãy nhập vào dãy số bất kì:");
let arrayNumber = randomNumber.split("");
 console.log(arrayNumber);

 // Tiến hành duyệt qua các mảng và so sánh giá trị so với giá trị 
 let max = arrayNumber[0]
for (let i = 0; i<=arrayNumber.length-1 ; i++){
    if (max<arrayNumber[i]){
        max=arrayNumber[i]
    } 
}   console.log(max)