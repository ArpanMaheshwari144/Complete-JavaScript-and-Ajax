const name='harry';
const greeting='Good Morning';
console.log(greeting + ' ' + name);

let html;
html="<h1> this is heading </h1>"+ " <p> this is para </p>";
html=html.concat('this' ,' string');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);

//Indexing always starts from 0 in string
console.log(html[0]);
console.log(html.indexOf('this'));
console.log(html.lastIndexOf('this'));
console.log(html.indexOf('mdwd')); // return -1
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3));
console.log(html.endsWith('string'));
console.log(html.endsWith('s'));
console.log(html.includes('this'));
console.log(html.includes('baba'));
console.log(html.includes(' '));

//last wali index se ek kum hi return karega 
//substring negative number nhi leta
console.log(html.substring(0,3));

//slice negative number bhi leta hai
// negative number jab hum dalenge to humme peeche se string return hogi
console.log(html.slice(-4));
console.log(html.slice(0,6));

console.log(html.split(' '));
console.log(html.split('>'));

//ye first occurence ko hi replace karega sari occurence ko replace nhi karega
console.log(html.replace('this','arpan'));

let fruit1='Orange';
let fruit2='Apple';
let myHtml=`Hello ${name} <h1> This is heading </h1> <p> You like ${fruit1} and ${fruit2}`;

//Ye hamari body ke andar likhne ka tarika hai
document.body.innerHTML=myHtml;

let myName='Arpan';
let lastName='Maheshwari';
let message=`<h1>This is Cool heading</h1> Hello ${myName} ${lastName} <p> What are you doing</p>`
document.body.innerHTML=message;










