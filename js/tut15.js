// let cont=document.querySelector('.no');
let cont=document.querySelector('.container');
console.log(cont.childNodes);  // ye spaces ko as text or comments ko bhi include karta hai
console.log(cont.children); //ye sirf elements ko hi include karta hai like div,h1 and all that

// Node Types:
// 1 for Element
// 2 for Attribute
// 3 for Text Node
// 8 for Comment
// 9 for document
// 10 for docType
let nodeName=cont.childNodes[1].nodeName;
let nodeType=cont.childNodes[1].nodeType;
console.log(nodeName);
console.log(nodeType);


let container=document.querySelector('div.container');
console.log(container.children)
console.log(container.children[1]);
console.log(container.children[1].children);
console.log(container.children[1].children[0]);
console.log(container.children[1].children[0].children);
console.log(container.firstChild);
console.log(container.firstElementChild);
console.log(container.lastChild);
console.log(container.lastElementChild);
console.log(container.childElementCount); //count only child elements
console.log(container.firstElementChild.parentNode);    
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);




 







