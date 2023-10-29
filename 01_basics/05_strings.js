const name = "Aman"
const repocount = 100

//console.log(name + repocount + "value");

//console.log(`hello i am ${name} and my repo count is ${repocount}`);

const gameName = new String('aman-verma')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

 /*console.log(gameName.length);
console.log(gameName.toUpperCase());


console.log(gameName.charAt(2));
console.log(gameName.indexOf('v')); */

const newstring = gameName.substring(0,5)

console.log(newstring)

const anotherstring = gameName.slice(-10,4)
console.log(anotherstring);

const newstringOne = "   Aman   "
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://Aman.com/aman%23verma"

console.log(url.replace('%23','$'));
console.log(url.includes('verma'));
console.log(url.includes('sharma'));

console.log(gameName.split('-'));

const contentString = "Hello, world";

document.body.innerHTML = contentString.blink();





