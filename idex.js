 const userInputOld = +prompt('Введите свой возраст: ');


const isAdult = function(year){
  if(!isNaN(year)){
    if(year >= 18){
      return true;
    }else{
      return false;
    }
  }else { 
    console.log('Введите число');
  }

}

const verdict = isAdult(userInputOld);

console.log(verdict); 

const chekMultiplisiti = function (a, b) {
  if (a % b === 0) {
    return true;
  } else {
    return false;
  }
};



console.log(chekMultiplisiti(25,5));
console.log(chekMultiplisiti(15,3));
console.log(chekMultiplisiti(15,5));
console.log(chekMultiplisiti(15,4));

