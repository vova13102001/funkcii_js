
// задание 1

let age = prompt("age");

function  isAdult() {
  let message = (age < 18) ? 'false' : 'true'
  alert(message);
}

isAdult()

//задание 2

let nomber1 = prompt("x");
let nomber2 = prompt("y");

function   checkMultiplicity() {
    let message = (nomber1 % nomber2 === 0) ? 'true' : 'false'
    alert(message);
  }
  
  checkMultiplicity()

// задание 3

let side1 = prompt("a");
let side2 = prompt("b");
let hypotenuse = prompt("c")


function   checkTriangle() {
    let message = (side1 + side2 > hypotenuse, hypotenuse + side2 > side1, hypotenuse + side1 > side2) ? 'true' : 'false'
    alert(message);
  }
  
  checkTriangle()

  // задание 4

 let c = prompt(" сторонa треуг a");

 let h = prompt("длинa высоты к стороне a");
 
function durian(){
let sq = (0.5 * c * h);
 
alert (sq);
}
 
durian()



let v = prompt(" сторонa 1 прям");
let z = prompt(" сторонa 2 прям");

function kvadrat(){
let sqa = (z * v );

alert (sqa);
}

kvadrat()



let q = prompt(" диагональ 1 ромб");
let w = prompt(" диагональ 2 ромб");

function romb(){
let sqad = (q * w / 2 );

alert (sqad);
}

romb()



let e = prompt(" высота цил");
let r = prompt(" радиус");

function cilindr(){
let sqadf = ( 2 * 3.14 * r * (e + r) );

alert (sqadf);
}

cilindr()