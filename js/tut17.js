//ye program jab aap heading(humne de rakha hai) pe click(kyoki eventlistner click hai) karaoge tabhi run hoga 

document.getElementById('heading').addEventListener('click', function(e){
// document.getElementById('heading').addEventListener('mouseover', function(e){
    let varaible;
    console.log("You clicked the heading");
    // varaible=e.target;
    // varaible=e.target.className;
    // varaible=e.target.id;
    // varaible=e.target.classList;
    // varaible = Array.from(e.target.classList);
    // varaible=e.offsetX;
    // varaible=e.offsetY;
    // varaible=e.clientX;
    varaible=e.clientY;
    console.log(varaible);
    // location.href='https://www.google.com/';

});