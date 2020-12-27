
// проверка на возраст

const userInputOld = +prompt("Введите свой возраст: ");

const isAdult = function (year) {
  if (!isNaN(year)) {
    if (year >= 18) {
      return true;
    } else {
      return false;
    }
  } else {
    console.log("Введите число");
  }
};

const verdict = isAdult(userInputOld);

console.log(verdict);



// кратность числа 

const chekMultiplisiti = function (a, b) {
  if (a % b === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(chekMultiplisiti(25, 5));
console.log(chekMultiplisiti(15, 3));
console.log(chekMultiplisiti(15, 5));
console.log(chekMultiplisiti(15, 4)); 




//проверка на треугольник

 const sideA = +prompt("Enter size side 1: ");
const sideB = +prompt("Enter size side 2: ");
const sideC = +prompt("Enter size side 3:");

const triangle = (a,b,c)=>{
  if (a + b > c && a + c > b && b +c >a){
    return true;
  }else{
    return false
  }
}

console.log( triangle(sideA,sideB,sideC));


//площадь ромба
const sideALength = +prompt('Введите длину любой из сторон : ');
const height = +prompt("Введите высоту ромба");

const rhombus = (a,h)=>{
  return a*h
}

console.log(rhombus(sideALength, height)); 



// площадь цилиндра

const radius = +prompt('enter radius: ');
const cilindrHeigth = +prompt('enter height:');

const cilindr = (r,h)=>{
  return 2*3.14*r * (h+r);
}

console.log(cilindr(radius,cilindrHeigth)); 



// площадь треугольника

 const lengthA = +prompt('Введите длину основания треугольника: ');
const heighTriangle = +prompt('Введите высоту треугольника: ');

const triangleS = (a,h)=>{
  return a*h/2;
}

console.log(triangleS(lengthA,heighTriangle)); 



// площадь прямоугольника

const lenghtRectangle = +prompt('Введите длину прямоугольника: ');
const widthRectangle = +prompt('Введите ширину прямоугольника: ');

const rectagleS = (a,b)=>{
  return a*b;
}

console.log(rectagleS(lenghtRectangle,widthRectangle));