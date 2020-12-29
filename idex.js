const family = {};

const createKeyAndInfo = (familyObj) => {
  const nameKey = prompt("Введите своё имя :");
  const userInfo = prompt("Введите информацию о себе: ");
  const ageUser = +prompt("Введите свой возраст");
  const email = prompt("Введите свой email: ");
  
  
  
  function infoFamily (email, age, info) {
    this.info = info;
    this.email = email;
    this.age = age;
  }
  
  
  return (familyObj[nameKey] = [new infoFamily(email, ageUser, userInfo)]);
};

console.log(createKeyAndInfo(family));
 console.log(createKeyAndInfo(family));
console.log(createKeyAndInfo(family)); 
