//ex -1
const parkWalkStr = 'I can walk in the park all day!';
console.log(parkWalkStr.slice('18','23'));


//ex-2
const helloStr = 'Hello World';
console.log(helloStr.toUpperCase());

//ex-3
const earthlingsStr='Hello Earthling';
const earthlingsStrLowerCase = earthlingsStr.toLowerCase();
console.log(earthlingsStrLowerCase);


//ex-4
const jsStr = 'JavaScript';
const jspartStr= jsStr.slice(3,6);
console.log(jspartStr);


//ex-5
const niceShoesStr='nice shoes';
const checknStr= niceShoesStr.includes('n');
const checkIStr= niceShoesStr.includes('I');
console.log('contains letter n',checknStr,'contains letter I',checkIStr);


//ex-6
const oldStr= 'Bananas';
const newStr= oldStr.charAt(0)+oldStr+oldStr.charAt(0);
console.log(newStr);

//ex-7
const scritcherStr='chill';
const lastThreeChars =scritcherStr.slice(-3);
const result7 = lastThreeChars + scritcherStr;
console.log(result7);

//ex-8
const boogieNightsStr ='BoogieWoogie';
const firstchar = boogieNightsStr.charAt(0);
const lastchar = boogieNightsStr.charAt(boogieNightsStr.length-1);
const midchar = boogieNightsStr.slice(1,15);
console.log(lastchar+midchar+firstchar);


//ex-9
const firstName= 'Jenny';
const city = 'London';
const job = 'Banker';
console.log(`My name is ${firstName}. I live in ${city} and I am a ${job}.`);

//ex-10
let foxStr='the quick brown fox';
let foxStrCap= foxStr.slice(0,1).toUpperCase() + foxStr.slice (1,4)+foxStr.slice(4,5).toUpperCase()+foxStr.slice(5,10)+foxStr.slice(10,11).toUpperCase()+foxStr.slice(11,16)+foxStr.slice(16,17).toUpperCase()+foxStr.slice(17,19);
console.log(foxStrCap);


//additional eercises

//* Exercise 01

const strLenght ='berlin';
console.log(`the lenght of the string ${strLenght} is `,strLenght.length); 

//* Exercise 02

const uniname='Mthatha';
const uninameLowercase = uniname.toLowerCase();
const uninameUppercase = uniname.toUpperCase();
console.log(uninameLowercase + '-'+ uninameUppercase);

//* Exercise 03

const firstStr= 'Hello';
const secondStr ='World';
console.log(firstStr.charAt(0)+secondStr.charAt(0));


//* Exercise 04
const roseStr = ' Rose Parks';
console.log(roseStr.charAt(1));

//* Exercise 05
const bitstr= 'bit';
const itStr='it';
console.log(bitstr+itStr);
console.log(bitstr.indexOf(itStr));

////* Exercise 06
const quoteStr = 'See and Stop';
//console.log('the first word is ',quoteStr.slice(0,3));
const firstblank= quoteStr.indexOf(' ');
console.log('the first word of string is ', quoteStr.substring(0,firstblank));

////* Exercise 07
let Date= '25-05-2017';
console.log('the date is',Date.replace('-','/'));

////* Exercise 08
const string8= 'How are you today';
const String8Split= string8.split(' ');
console.log(String8Split);

////* Exercise 09
console.log(typeof typeof 1); //string t

////* Exercise 10
const filename= 'solution.js';
const filetype= filename.substring(filename.indexOf('.')+1);
console.log(filetype)