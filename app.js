const hund = document.getElementsByClassName("hund")[0];
const fifty = document.getElementsByClassName("fifty")[0];
const twen = document.getElementsByClassName("twen")[0];
const ten = document.getElementsByClassName("ten")[0];
const five = document.getElementsByClassName("five")[0];
const one = document.getElementsByClassName("one")[0];
const sum = document.getElementsByClassName("sum")[0];
const oneDollarCoin = document.getElementsByClassName("oneDollarCoin")[0]; // Add this line
const quarter = document.getElementsByClassName("quarter")[0];
const dime = document.getElementsByClassName("dime")[0];
const nickel = document.getElementsByClassName("nickel")[0];
const penny = document.getElementsByClassName("penny")[0];
const totalmoney = document.getElementsByClassName("totalmoney")[0];

sum.addEventListener("click", total);

function total() {
  const totalsum =
    (parseInt(hund.value) || 0) * 100 +
    (parseInt(fifty.value) || 0) * 50 +
    (parseInt(twen.value) || 0) * 20 +
    (parseInt(ten.value) || 0) * 10 +
    (parseInt(five.value) || 0) * 5 +
    (parseInt(one.value) || 0) +
    (parseInt(oneDollarCoin.value) || 0) * 1 +
    (parseInt(quarter.value) || 0) * 0.25 +
    (parseInt(dime.value) || 0) * 0.1 +
    (parseInt(nickel.value) || 0) * 0.05 +
    (parseInt(penny.value) || 0) * 0.01;
  totalmoney.innerHTML = totalsum.toFixed(2);
}
