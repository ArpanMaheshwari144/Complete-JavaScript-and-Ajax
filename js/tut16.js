let element=document.createElement('li');
let text=document.createTextNode('I am a text node');
element.appendChild(text);

// Add a class name and id to li element
element.className='childul';
element.id='createdLi';
element.setAttribute('title','mytitle');
// element.innerText='I am a text node';
//element.innerHTML='<b>I am a text node</b>';

let ul=document.querySelector('ul.this');
// let ul=document.querySelector('.this');
ul.appendChild(element);
// console.log(ul);
// console.log(element);

let element2=document.createElement('h3');
element2.id='element2';
element2.className='element2';
let tnode=document.createTextNode('This is a node');
element2.appendChild(tnode);

element.replaceWith(element2);
let myul=document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr=element2.getAttribute('id');
console.log(element2);
console.log(pr);

let pr2=element2.hasAttribute('class');
element2.removeAttribute('id');
element2.setAttribute('title','myelement2title');
console.log(element2);
console.log(pr2);

let ele = document.createElement('h4');
ele.innerHTML='Go to CodeWithHarry';
ele.setAttribute('id','myid');
ele.setAttribute('class','myclass');

let variable=document.querySelector('body');
variable.appendChild(ele);

ele=document.createElement('a');
ele.innerHTML='<b>Go Now</b>';
ele.setAttribute('href','https://www.codewithharry.com')
ele.setAttribute('id','myid1');
ele.setAttribute('class','myclass1');

variable.appendChild(ele);
console.log(ele);

