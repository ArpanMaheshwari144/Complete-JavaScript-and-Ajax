let today=new Date();
console.log(today);

let otherDate=new Date('8-4-2003 04:54:08');
console.log(otherDate);

let otherDate1=new Date('june 13 1976');
console.log(otherDate1);

let otherDate2=new Date('09/16/1976'); //format->mm/dd//yy
console.log(otherDate2);

console.log(otherDate.getDay()); //ye day bta raha hai as sunday to saturday i.e 0(sunday) to  (6)saturday

console.log(otherDate.getDate());

console.log(otherDate.getFullYear());

console.log(otherDate.getMinutes());

console.log(otherDate.getSeconds());

console.log(otherDate.getHours());

console.log(otherDate.getTime());// 1 jan 1970 se jitne seconds otherDate tak pahuchne me lage utne dikha raha hai

console.log(otherDate.getMilliseconds());

console.log(otherDate.getMonth());//ye month bta raha hai from 0(jan) to dec(11)

otherDate.setDate(23);
console.log(otherDate);

otherDate.setMonth(2);
console.log(otherDate);

otherDate.setFullYear(2006);
console.log(otherDate);

otherDate.setSeconds(50);
console.log(otherDate);

otherDate.setMinutes(15);
console.log(otherDate);

otherDate.setHours(05);
console.log(otherDate);