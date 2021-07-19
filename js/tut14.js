/*Element Selectors:
1.Single Element Selectors
2.Multi Element Selectors
*/ 

// 1.Single Element Selectors
// let element=document.getElementById('myfirst');
// element=element.className;
// element=element.childNodes;
// element=element.parentNode;
// element.style.color='red';
// element.style.background='blue';
// element.innerText='arpan';
// element.innerHTML='<b> arpan </b>'
// console.log(element);
// console.log(element.innerHTML);
// console.log(element.innerText);

// Query Selectors
// let sel=document.querySelector('#myfirst');
// let sel=document.querySelector('.child');

//hum direct tag ke name se bhi print karwa sakte hai agar waha multiple tags hai ek naam ke to wo always first one ko hi print karega
// let sel=document.querySelector('a');
// let sel=document.querySelector('h1');
// let sel=document.querySelector('div');
// sel.style.color='red';
// console.log(sel);

// 2.Multi Element Selectors
// let element=document.getElementsByClassName('child');
// let element=document.getElementsByClassName('container');
// console.log(element);
// console.log(element[0]);
// console.log(element[0].getElementsByClassName('red'));

let element=document.getElementsByTagName('div');
console.log(element);

for (let i = 0; i < element.length; i++) {
    const ele = element[i];
    console.log(ele);
    ele.style.color='red';
}
            //or

// Array.from(element).forEach(function(element){
//     console.log(element);
//     element.style.color='deeppink';
// });