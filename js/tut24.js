//Object literal:Object.prototype
//prototype->apne us object ko kha se chalu karke banaya
//Jo bhi humne apna object banaya hai object literals ki madad se hum uske prototype ko change nhi karenge
let obj={
    name:'Harry',
    channel:'Code With Harry',
    address:'Mars',
}
console.log(obj);

//Obj Constructor->hum apna obj ka constructor bna ke prototype ko change kar sakte hai
function Obj(givenName){
    this.name=givenName;
}

Obj.prototype.getName=function(){
    return this.name;
}

Obj.prototype.setName=function(newName){
    this.name=newName;
}

let obj1=new Obj('Harry');
// console.log(obj1);
console.log(obj1.toString());
console.log(obj1.getName())
console.log(obj1.setName('Arpan'));
console.log(obj1);
