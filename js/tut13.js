let a=document;
a=document.links;
Array.from(a).forEach(function(element){
    if(element.href.includes("google")){
        console.log(element.href);
    }
});

// let str='python';
// let links=document.links;
// console.log(links);
// let href;
// Array.from(links).forEach(function(element){
//     href=element.href;
//     if(href.includes(str)){
//         console.log(href);
//     }
// });