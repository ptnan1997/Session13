// Cho người dùng nhập vào dãy số
let randomNumber =(prompt("Hãy nhập vào dãy số bất kỳ"));
console.log(`Dãy số mà người dùng đã nhập ${randomNumber}`)
// Chuyển đổi kiểu dữ liệu từ string sang Array
let array = randomNumber.split("");
console.log(array);
// Tiến hành đảo ngược các phần tử trong mảng
array.reverse();
console.log(array);