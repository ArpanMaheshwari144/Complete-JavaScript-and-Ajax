let btn=document.getElementById('btn');
// btn.addEventListener('click',func1);
// btn.addEventListener('dblclick',func2);
// btn.addEventListener('mousedown',func3);
// btn.addEventListener('mouseup',func4);

// function func1(e){
//     console.log("Thanks for click", e);
//     e.preventDefault(); // ye form ko submit nhi hone dega rather than ye us event ko print kar dega
// }

// function func2(e){
//     console.log("Thanks for double click", e);
//     e.preventDefault();
// }

// function func3(e){
//     console.log("Thanks for mouse down",e);  //mouse par right click karna hai ya mousewheel par click karna hai 
//     e.preventDefault();
// }

// function func4(e){
//     console.log("Thanks for mouse up",e); //mouse par right click karna hai ya mousewheel par click karna hai 
//     e.preventDefault();
// }

//ye first occurence par kaam karta hai mtlb jiski bhi pheli class no hogi us par hi kaam karega 

// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log("You Entered");
// })

// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log("You Exit");
// })

// document.querySelector('.container').addEventListener('mousemove',function(){
//     console.log("You Moved");
// })

// document.querySelector('.container').addEventListener('mousemove',function(e){
//     console.log(e.offsetX,e.offsetY);
//     document.body.style.backgroundColor='red';
//     console.log("You Moved");
// })

document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},154)`; //ye range 0 to 255 hoti hai
    console.log("You Moved");
})
