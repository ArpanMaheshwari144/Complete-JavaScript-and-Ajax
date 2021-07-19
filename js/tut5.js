// Type Conversion 

let myVarr1=34;
console.log(myVarr1,(typeof myVarr1));

let myVarr2=String(34);
console.log(myVarr2,(typeof myVarr2));

let booleanVarr1=true;
console.log(booleanVarr1,(typeof booleanVarr1));

let booleanVarr2=String(true);
console.log(booleanVarr2,(typeof booleanVarr2));

let date1 =new Date();
console.log(date1,(typeof date1));

let date2 =String(new Date());
console.log(date2,(typeof date2));

let arr1=[1,2,3,4,5];
console.log(arr1,(typeof arr1));
console.log(arr1.length,(typeof arr1));

let arr2=String([1,2,3,4,5]);
console.log(arr2,(typeof arr2));
console.log(arr2.length,(typeof arr2));

// Number O/P is in blue color in JS
let i=75;
console.log(i.toString());

let stri1=Number("3434");
let stri2=Number("3434d");
let stri3=Number(false);
let stri4=Number(true);
let stri5=Number([1,2,3,4,5,6,7]);
console.log(stri1,(typeof stri1));
console.log(stri2,(typeof stri2));
console.log(stri3,(typeof stri3));
console.log(stri4,(typeof stri4));
console.log(stri5,(typeof stri5));

let number1='34';
console.log(number1,(typeof number1));

let number2=parseInt('34');
console.log(number2,(typeof number2));

let number3=parseInt('34.988788');
console.log(number3,(typeof number3));

let number4=Number('34.988788');
console.log(number4,(typeof number4));

let number5=parseFloat('34.321212');
console.log(number5.toFixed(1)) // return the number after the decimal values which you gives in the bracket
console.log(number5,(typeof number5));

// Type Coercion
let mystr1="698";
let mynum1=34;
console.log(mystr1 + mynum1);

let mystr2=Number("698");
let mynum2=34;
console.log(mystr2 + mynum2);













