// Practice

//  Creating Objects with Constructor Functions:

function BellBoy(name, age, city, language) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.language = language;
}

var BellBoy1 = new BellBoy("clay", 24, "Hyd", ["english", "Telugu"]);

console.log(BellBoy1);

//  bellboy move suitcase function with dot operator:

function BellMan(name, age, city, language) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.language = language;
  this.moveSuitCase = function () {
    alert("May I move your suitcase ?");
    pickupSuitCase();
    move();
  };
}
