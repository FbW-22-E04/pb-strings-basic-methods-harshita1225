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
const oldStr= 'happy';
const newStr= 'sad';
const firstCharnewStr = newStr.charAt(0);
const MergeoldStrnewStr = firstCharnewStr + oldStr +firstCharnewStr;
console.log(MergeoldStrnewStr);

//ex-7
const scritcherStr='chill';
const lastThreeChars =scritcherStr.slice(-3);
const result7 = lastThreeChars + scritcherStr;
console.log(result7);

//ex-8
const boogieNightsStr ='Dancing Giraffe';
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
const foxStr=' the quick brown fox';

