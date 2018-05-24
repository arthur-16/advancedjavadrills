let fruits = ["grapes", "banana", "apple"];
let favFruit;
let leastFav = fruits[1];
function printFruit() {
  console.log(fruits[0]);
  favFruit = fruits[2];
}
console.log(leastFav);
function printFav() {
  console.log(favFruit);
}
greeting();
function greeting() {
    console.log('Hello Arthur')
};
let alertText = function() {
    alert('I only eat apples')
}
alertText();
printFruit();
printFav();

