//Người chơi nhập vào một số bất kỳ
let guestNumber = Number(prompt("Hãy đoán xem một số trong dãy số loto dưới đây. Nếu đoán trúng bạn sẽ nhận được phần thưởng!!!"))
// Dưới đây là dãy số loto
let randomNum = [23,76,34,57,98,32,56,49,24,6]
// Đưa ra một biến nếu số nằm trong dãy
let isInArray = randomNum.includes(guestNumber)
// Kiểm tra số của người chơi có nằm trong dãy số loto hay không

if (isInArray === true){
    console.log("Bingo!!!Bạn đoán đúng rồi!!! Bạn sẽ nhận thưởng từ chương trình")
} else {
    console.log("Chúc bạn may mắn lần sau");
}