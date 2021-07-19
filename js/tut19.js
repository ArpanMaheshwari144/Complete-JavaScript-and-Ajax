// Local Storage->local storage kabhi delete nhi hoga jab tak hum use apne se delete na kare chahe app browser ko dobara khol bhi le or chahe aap local storage ke items ko comment bhi karde
let impArray=['adrak','pyaz','ghobi'];

// Add a key value pair inside the local storage
localStorage.setItem('name1','arpan');
localStorage.setItem('name2','adarsh');
// localStorage.setItem('Sabzi',impArray); // ye string return kar raha hai
localStorage.setItem('Sabzi',JSON.stringify(impArray)); // ye object leta hai as an argument and return karta hai string

let p=window.localStorage;
console.log(p);
console.log(p.name1);
console.log(p.name2);
console.log(typeof p);

localStorage.clear(); // Clears the entire local storage  

//  localStorage.removeItem('name1'); // Clears a particular key value pair

// Retrieve an item from the local storage
let name=localStorage.getItem('name1');
console.log(name);
console.log(typeof name);

// let sabzi=localStorage.getItem('Sabzi'); // ye ek string return karega
let sabzi=JSON.parse(localStorage.getItem('Sabzi'));  // ye string leta hai as an argument and return karta hai object
console.log(sabzi);
console.log(typeof sabzi);

// Session Storage->session storage delete ho jayega jab bhi app browser ko band karke dobara kholenege or aapko session storage ke items ko comment bhi karna padega or hum use apne se delete bhi kar sakte hai 
let impArray1=['adrak','pyaz','ghobi'];

// Add a key value pair inside the local storage
sessionStorage.setItem('name3','aditya');
sessionStorage.setItem('name4','verma');
// sessionStorage.setItem('Sabzi',impArray1); // ye string return kar raha hai
sessionStorage.setItem('Sabzi1',JSON.stringify(impArray1)); // ye object leta hai as an argument and return karta hai string

let p1=window.sessionStorage;
console.log(p1); 
console.log(p1.name3);
console.log(p1.name4);
console.log(typeof p1);

sessionStorage.clear(); // Clears the entire session storage  

// sessionStorage.removeItem('name3'); // Clears a particular key value pair

// Retrieve an item from the session storage
let getname=sessionStorage.getItem('name3');
console.log(getname);
console.log(typeof getname);

// let sabzi=localStorage.getItem('Sabzi'); // ye ek string return karega
let sabzi1=JSON.parse(sessionStorage.getItem('Sabzi1'));  // ye string leta hai as an argument and return karta hai object
console.log(sabzi1);
console.log(typeof sabzi1);
