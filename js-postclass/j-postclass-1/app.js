// ? atamada büyük kücük harf önemli
// let deneme = 5;
// let Deneme = 6;
// const myVar1 = 7;
​
// ?ciktiyi console da degilde html live server de görmek istiyorsak
// console.log(deneme);
// document.getElementById("aritmetik").innerHTML = "deneme = " + deneme;
​
// ?önceki yazilanlar silinmesin altina devam etsin istiyorsak += kullanmaliyiz
// document.getElementById("aritmetik").innerHTML +=
//   "<br/>" +
//   "Deneme = " +
//   Deneme +
//   "<br/>" +
//   "veli" +
//   "<br>" +
//   "Deneme =" +
//   Deneme +
//   "<br/>" +
//   "myVar = " +
//   myVar1;
​
//! Aritmetik Operatörler
// ? toplama(+)
// const num1 = 10;
// const num2 = 69;
​
// const toplam = num1 + num2;
// num1 ve num2 operand , + operator olark adlandırılıyor.
​
// document.getElementById("aritmetik").innerHTML += "toplam =" + toplam;
​
// const msg1 = "Hello ";
// const msg2 = "World!";
​
// const mesaj = msg1 + msg2;
// document.getElementById("aritmetik").innerHTML = mesaj;
​
// const firstName = "Koray";
// const lastName = "Koksal";
// const fullName = firstName + " " + lastName;
// console.log(firstName, lastName);
// console.log(firstName + " " + lastName);
// document.getElementById("aritmetik").innerHTML = fullName;
// document.getElementById("aritmetik").innerHTML = firstName + " " + lastName;
​
// *örnekler
// let x = 1 + 1;
// let x = "1" + 1;
// let x = 1 + 1 + "1";
// let x = 1 + 1 + "1" + 1 + 2;
// let x = 1 + "a";
// let x = "a" + "b";
// document.getElementById("aritmetik").innerHTML = x + " " + typeof x;
​
// ? cikarma(-)
// const x = 55;
// const y = 44;
// console.log(x - y);
​
// const x = 10;
// const y = "1";
​
// const a = "b";
// const z = x - y;
// const v = y - a;
// document.getElementById("aritmetik").innerHTML = typeof z;
// document.getElementById("aritmetik").innerHTML += v;
​
// *örnekler
// let x = 10 - 5;
// let x = 10 - "5";
// let x = "10" - 5;
// let x = "10" - "5";
// let x = 10 - "a";
// let x = "a" - "b";
​
// document.getElementById("aritmetik").innerHTML += x + " " + typeof x;
​
// ? *carpma(*)
// let carp1 = 7;
// let carp2 = 9;
// let carpma = carp1 * carp2;
// document.getElementById("aritmetik").innerHTML = carpma + " " + typeof carpma;
​
// let x = "a" * "b";
// let y = "a" * 3;
​
// document.getElementById("aritmetik").innerHTML +=
//   x + " " + typeof x + "<br/>" + y + " " + typeof y;